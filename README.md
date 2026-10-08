# AGD Saúde

Landing page da **AGD Saúde**, home care de São Paulo especializado em acompanhamento hospitalar e cuidados em domicílio. Site institucional feito para transmitir o que a empresa entrega no dia a dia: cuidado humano, presença 24h e tranquilidade para a família.

## O que tem por aqui

- **Hero** com a proposta de valor e chamada para WhatsApp
- **Serviços**: acompanhamento hospitalar, cuidados em residência, consultas e exames, cuidados paliativos
- **Como funciona** (o passo a passo do atendimento), princípios de cuidado e depoimentos de famílias
- **CTA de contato** direto para WhatsApp ou telefone
- **Política de Privacidade** completa, em conformidade com a LGPD (`/politica-de-privacidade`)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS 4

## Rodando o projeto

```bash
npm install     # instala as dependências
npm run dev     # sobe o ambiente de desenvolvimento (http://localhost:3001)

npm run build   # gera o build de produção
npm run start   # sobe o build de produção
npm run lint    # verifica o código
```

## Estrutura

```
src/
├── app/
│   ├── page.tsx                    # página inicial
│   ├── layout.tsx                  # fontes, metadados e SEO
│   └── politica-de-privacidade/    # política LGPD
├── components/sites/...            # seções da landing page
└── types/site-seniornest...ts      # todo o conteúdo/copy do site
public/
├── img/logo/                       # logotipo AGD
└── sites/.../images/               # imagens das seções
```

Dica: quase todo o texto do site fica em `src/types/site-seniornest-webflow-io.ts`. Para ajustar uma chamada, um serviço ou um depoimento, é só editar lá.

## Antes de publicar

Troque os dados de contato placeholder pelos canais reais da AGD:

- Telefone: `(11) 98765-4321`
- WhatsApp: `wa.me/5511987654321`
- E-mail: `contato@agdsaude.com.br`

Esses dados estão em `src/types/site-seniornest-webflow-io.ts` (busque por `placeholders`).

## Créditos

Desenvolvido e otimizado por **2swebtech**.
