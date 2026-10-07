import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | AGD Saúde",
  description:
    "Política de privacidade e proteção de dados da AGD Saúde — home care e acompanhamento hospitalar em São Paulo.",
};

const SECTIONS = [
  {
    title: "1. Controladora dos dados",
    body: "A AGD Saúde é responsável pelo tratamento dos dados pessoais coletados neste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).",
  },
  {
    title: "2. Dados que coletamos",
    body: "Coletamos apenas os dados que você informa voluntariamente ao entrar em contato: nome, telefone/WhatsApp, e-mail e a mensagem enviada pelo formulário ou pelos canais de atendimento. Não coletamos dados sensíveis por meio deste site.",
  },
  {
    title: "3. Finalidade do tratamento",
    body: "Seus dados são utilizados exclusivamente para responder às suas solicitações, orçamentos e agendamentos de serviços de cuidado, cumprir obrigações legais e melhorar a experiência de atendimento.",
  },
  {
    title: "4. Compartilhamento e armazenamento",
    body: "Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins comerciais. O armazenamento ocorre em ambiente seguro, pelo tempo necessário ao atendimento e ao cumprimento de prazos legais.",
  },
  {
    title: "5. Seus direitos",
    body: "Você pode solicitar a confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados, bem como a revogação do consentimento, pelos canais indicados no rodapé desta página.",
  },
  {
    title: "6. Cookies",
    body: "Este site pode utilizar cookies essenciais ao seu funcionamento e, quando autorizados, cookies de medição de audiência. Você pode gerenciar suas preferências a qualquer momento no navegador.",
  },
  {
    title: "7. Contato",
    body: "Dúvidas sobre esta política ou sobre seus dados pessoais: contato@agdsaude.com.br — telefone (11) 98765-4321, atendimento 24 horas.",
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="w-full bg-white pb-[100px] pt-[140px] text-dark-gunmetal max-lg:pb-[80px] max-lg:pt-[120px] max-md:pb-[64px] max-md:pt-[100px]">
      <div className="container">
        <Link
          href="/"
          className="text-small inline-block text-charcoal-blue transition-colors duration-300 hover:text-deep-teal"
        >
          ← Voltar para o site
        </Link>

        <div className="mt-8 max-w-[820px]">
          <div className="tag mb-4">{"// Legal"}</div>
          <h1 className="h2">Política de Privacidade</h1>
          <p className="body mt-6 text-charcoal-blue">
            Sua privacidade é prioridade da AGD Saúde. Esta página explica de
            forma transparente como tratamos as informações que você nos
            compartilha ao utilizar este site.
          </p>

          <div className="mt-12 flex flex-col gap-8">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="h6">{section.title}</h2>
                <p className="body mt-2 text-charcoal-blue">{section.body}</p>
              </section>
            ))}
          </div>

          <p className="text-small mt-12 text-charcoal-blue">
            Última atualização: janeiro de 2023.
          </p>
        </div>
      </div>
    </main>
  );
}
