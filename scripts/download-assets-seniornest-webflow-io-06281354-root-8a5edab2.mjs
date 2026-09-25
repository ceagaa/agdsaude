/**
 * Asset downloader for seniornest.webflow-io / root-8a5edab2
 *
 * Extracts every CDN asset URL referenced by the captured original page and
 * downloads it into public/sites/<site>/<page>/images/.
 *
 * Skipped by design:
 *  - .css / .js / gsap bundles (not visual assets)
 *  - responsive "-p-500/800/1080/1600" srcset variants (we ship the base file)
 *  - .webm duplicates (mp4 + poster already kept)
 *  - lottie .json (Webflow-only spinner)
 *
 * Run: node scripts/download-assets-seniornest-webflow-io-06281354-root-8a5edab2.mjs
 */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_KEY = "seniornest-webflow-io-06281354";
const PAGE_KEY = "root-8a5edab2";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_HTML = path.join(
  ROOT,
  "docs/research",
  SITE_KEY,
  PAGE_KEY,
  "original-page.html",
);
const OUT_DIR = path.join(ROOT, "public/sites", SITE_KEY, PAGE_KEY, "images");

const SKIP_RE = /(-p-(500|800|1080|1600)\.|\.webm$|\.css$|\.js$|\.json$|gsap\/)/i;

function decodeUrl(u) {
  return u
    .replace(/&quot;/g, "")
    .replace(/%25/g, "%")
    .replace(/\\\//g, "/");
}

function localNameFor(url) {
  const clean = decodeUrl(url).split("?")[0];
  const base = decodeURIComponent(
    clean.substring(clean.lastIndexOf("/") + 1),
  ).replace(/[/\\:*?"<>|]/g, "_");
  return base || "asset";
}

async function main() {
  const html = await readFile(SOURCE_HTML, "utf8");
  const raw = html.match(/https:\/\/cdn\.prod\.website-files\.com\/[^\s"'\\),]+/g) ?? [];
  const seen = new Set();
  const jobs = [];
  for (const r of raw) {
    const url = decodeUrl(r);
    if (SKIP_RE.test(url)) continue;
    if (!/\.(avif|png|jpe?g|webp|svg|mp4|gif)$/i.test(url)) continue;
    if (seen.has(url)) continue;
    seen.add(url);
    jobs.push({ url, name: localNameFor(url) });
  }

  await mkdir(OUT_DIR, { recursive: true });
  console.log(`Downloading ${jobs.length} assets -> ${path.relative(ROOT, OUT_DIR)}`);

  const manifest = {};
  let ok = 0;
  let fail = 0;
  const CONCURRENCY = 8;
  let cursor = 0;

  async function worker() {
    while (cursor < jobs.length) {
      const job = jobs[cursor++];
      try {
        const res = await fetch(job.url, { redirect: "follow" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(path.join(OUT_DIR, job.name), buf);
        manifest[job.name] = job.url;
        ok++;
        process.stdout.write(`  ok ${job.name} (${buf.length}B)\n`);
      } catch (err) {
        fail++;
        console.error(`  FAIL ${job.name}: ${err.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  await writeFile(
    path.join(OUT_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8",
  );
  console.log(`Done. ${ok} ok, ${fail} failed.`);
  if (fail > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
