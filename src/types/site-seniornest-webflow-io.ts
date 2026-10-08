/**
 * Content for the AGD Saúde landing page (route "/").
 * Copy target keyword: "Acompanhamento hospitalar em São Paulo".
 *
 * NOTE: phone / whatsapp / e-mail below are placeholders, replace
 * them with the real AGD contact channels before publishing.
 */

export type NavItem = { label: string; href: string };

export const CONTACT = {
  phoneLabel: "(11) 98765-4321",
  phoneHref: "tel:+5511987654321",
  email: "contato@agdsaude.com.br",
  whatsapp:
    "https://wa.me/5511987654321?text=Ol%C3%A1!%20Preciso%20de%20acompanhamento%20hospitalar%20em%20S%C3%A3o%20Paulo.",
  region: "Atendemos toda a Grande São Paulo",
};

export const NAV: { links: NavItem[] } = {
  links: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contact" },
  ],
};

export const HERO = {
  badge: "Plantões 24/7 · Enfermeiros e Auxiliares · Desde 2001",
  title: "Acompanhamento hospitalar em São Paulo com cuidado de verdade",
  body: "Assistência humanizada e contínua, com plantões de 24 horas por dia: um profissional de confiança ao lado do seu ente querido em hospitais e clínicas de São Paulo e da Grande SP, com relatório diário para a família.",
  cta: { label: "Falar no WhatsApp agora", href: CONTACT.whatsapp },
  ctaSecondary: { label: "Ver como funciona", href: "#services" },
};

export const STATS = {
  title: "AGD Saúde em números",
  items: [
    { value: "50", suffix: "+", label: "Atendimentos por mês", hint: "Contínuo, todo mês" },
    { value: "45", suffix: "+", label: "Profissionais capacitados", hint: "Equipe técnica verificada" },
    { value: "20", suffix: "+", label: "Anos de experiência", hint: "Tradição que tranquiliza" },
    { value: "100", suffix: "%", label: "de aprovação", hint: "Famílias que indicam" },
  ] as const,
};

export const ABOUT = {
  tag: "// Sobre a AGD Saúde",
  title: "Cuidando de vidas em São Paulo com confiança e tradição desde 2001",
  body: "A AGD Saúde é uma empresa de home care paulistana que há mais de 20 anos acompanha pacientes em hospitais, clínicas e residências em toda a Grande São Paulo. Nosso compromisso é preservar a dignidade, o conforto e a segurança de cada paciente, e dar tranquilidade real a quem ama.",
  bannerBody: "Presença de verdade, escala cumprida e cuidado humano do primeiro ao último minuto.",
  bullets: [
    "Escalas 24x7, com substituição garantida em até 2 horas",
    "Pontualidade confirmada por WhatsApp antes de cada plantão",
    "Profissionais registrados, verificados e supervisionados",
    "Plano de cuidado individualizado para cada paciente",
  ],
  cta: { label: "Falar com um especialista", href: CONTACT.whatsapp },
};

export const SERVICES = {
  tag: "// Serviços em destaque",
  title: "Serviços de cuidado profissional em hospitais e residências de São Paulo",
  body: "Do plantão hospitalar ao apoio em casa e nas consultas: a AGD Saúde cobre cada fase do cuidado com a mesma exigência técnica e o mesmo acolhimento.",
  items: [
    {
      title: "Acompanhamento Hospitalar",
      body: "O que inclui o acompanhamento hospitalar em São Paulo da AGD Saúde: higiene e conforto no leito, controle de sinais vitais, apoio em exames e procedimentos, administração de medicamentos conforme prescrição, intermediação com a equipe médica e relatório diário para a família. Atuamos em hospitais públicos, particulares e conveniados, em regime diurno, noturno ou de 24 horas.",
      bullets: [
        "Escala diurna, noturna ou 24h",
        "Enfermeiro ou auxiliar dedicado",
        "Relatório diário para a família",
      ],
      cta: { label: "Quero um acompanhante", href: CONTACT.whatsapp },
      image: "serviceImage1",
    },
    {
      title: "Cuidados em Residência",
      body: "Enfermeiros e auxiliares de enfermagem em domicílio para pós-cirúrgicos, recuperação, idosos e pacientes crônicos, com plano de cuidado em casa, administração de medicamentos, curativos, higiene, alimentação e avaliação clínica periódica.",
      bullets: [
        "Pós-cirúrgico e recuperação",
        "Idosos e pacientes crônicos",
        "Avaliação clínica periódica",
      ],
      cta: { label: "Cotar cuidados em casa", href: CONTACT.whatsapp },
      image: "serviceImage2",
    },
    {
      title: "Acompanhamento em Consultas e Exames",
      body: "O acompanhamento residencial começa na porta de casa: deslocamento ida e volta, apoio na triagem, anotação das orientações médicas, exames laboratoriais e de imagem, retirada de resultados e recado completo para a família, sem fila e sem ansiedade.",
      bullets: [
        "Deslocamento ida e volta",
        "Apoio em exames e consultas",
        "Recado médico para a família",
      ],
      cta: { label: "Agendar acompanhamento", href: CONTACT.whatsapp },
      image: "serviceImage3",
    },
  ] as const,
};

export const PRINCIPLES = {
  tag: "// Procedimentos",
  title: "Todos os procedimentos que nossa equipe executa",
  body: "Técnicas de enfermagem executadas por profissionais com registro ativo e supervisão técnica, no hospital ou na sua casa.",
  items: [
    {
      title: "Curativos e cuidados com feridas",
      body: "Curativos simples, complexos e atraumáticos, com avaliação periódica da lesão, controle de sinais de infecção e troca conforme protocolo médico.",
    },
    {
      title: "Banho no leito e higiene conforto",
      body: "Banho completo no leito com técnica de rotação segura, higienização de cavidades, prevenção de escara e conforto do paciente em cada etapa.",
    },
    {
      title: "Administração de medicamentos EV e IM",
      body: "Aplicação endovenosa e intramuscular, incluindo antibióticos, sempre conforme prescrição, com registro da dose, do horário e da via utilizada.",
    },
    {
      title: "Cuidados paliativos e de conforto",
      body: "Controle de dor, higiene, decúbito, hidratação e presença contínua, com acolhimento também para a família em cada fase do cuidado.",
    },
    {
      title: "Controle de sinais vitais e glicemia",
      body: "Aferição de PA, FC, FR, temperatura e glicemia capilar, com registro em prontuário e alerta imediato ao enfermeiro responsável.",
    },
    {
      title: "Mobilização e transferência de leito",
      body: "Mudanças de decúbito, transferência para cadeira e deambulação assistida, com foco na prevenção de contracturas e úlceras por pressão.",
    },
    {
      title: "Alimentação assistida e deglutição",
      body: "Administração de dietas orais e enterais, identificação precoce de sinais de broncoaspiração e apoio ao acompanhamento nutricional.",
    },
    {
      title: "Acompanhamento em quimioterapia",
      body: "Presença durante sessões de longa duração, apoio emocional ao paciente e comunicação clara com a equipe oncológica e a família.",
    },
  ] as const,
};

export const PROCESS = {
  tag: "// Por que nos escolher",
  title: "O diferencial humano e técnico da equipe AGD",
  items: [
    {
      chip: "✓ COREN ativo",
      title: "Enfermeiros e auxiliares qualificados",
      body: "Profissionais com registro ativo, treinamento interno em cuidados hospitalares e supervisão técnica contínua de um enfermeiro responsável.",
    },
    {
      chip: "✓ 45+ em escala",
      title: "Equipe sempre disponível",
      body: "Mais de 45 profissionais em escala: qualquer falta é coberta no mesmo dia, sem deixar o paciente sozinho.",
    },
    {
      chip: "✓ 365 dias",
      title: "Presença 24 horas, todos os dias",
      body: "Plantões diurnos, noturnos e de 24 horas, inclusive feriados e finais de semana, com escala confirmada por WhatsApp.",
    },
    {
      chip: "✓ Relatório diário",
      title: "Transparência com a família",
      body: "Atualização diária, alinhamento com a equipe médica e canal direto com o responsável a qualquer hora do dia.",
    },
  ] as const,
};

export const TESTIMONIALS = {
  tag: "// Depoimentos",
  title: "Famílias que confiam no cuidado da AGD",
  items: [
    {
      quote:
        "Quando minha mãe foi internada, eu morava em Santo André e não conseguia ficar com ela o dia todo. A AGD colocou a enfermeira Carla no plantão noturno e, pela primeira vez em duas semanas, eu dormi tranquila. Recebia relatório toda noite, foi como se cuidassem da minha mãe como filha.",
      name: "Mariana Alcântara",
      role: "Filha de paciente · Santo André, ABC Paulista",
      image: "testimonial1",
    },
  ] as const,
};

export const CTA = {
  title: "Precisa de um cuidador ou enfermeiro de confiança hoje?",
  body: "Fale com um especialista da AGD Saúde agora: montamos o melhor plantão para o seu caso, 24 horas por dia, sem compromisso e com resposta em poucos minutos.",
  badge: { title: "Atendimento imediato 24h", text: "Resposta em até 10 minutos" },
  primary: { label: "Falar no WhatsApp agora", href: CONTACT.whatsapp },
  secondary: { label: "Ligar agora", href: CONTACT.phoneHref },
};

export const FOOTER = {
  phone: CONTACT.phoneLabel,
  phoneHref: CONTACT.phoneHref,
  email: CONTACT.email,
  blurb:
    "Home care e acompanhamento hospitalar em São Paulo desde 2001. Plantões 24h, equipe qualificada e cuidado humano para a sua família.",
  columns: [
    {
      heading: "Navegação",
      links: [
        { label: "Início", href: "/" },
        { label: "Sobre a AGD", href: "#about" },
        { label: "Serviços", href: "#services" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Contato", href: "#contact" },
      ],
    },
    {
      heading: "Serviços",
      links: [
        { label: "Acompanhamento Hospitalar", href: "#services" },
        { label: "Cuidados em Residência", href: "#services" },
        { label: "Consultas e Exames", href: "#services" },
        { label: "Cuidados Paliativos", href: "#services" },
      ],
    },
    {
      heading: "AGD Saúde",
      links: [
        { label: "WhatsApp 24h", href: CONTACT.whatsapp },
        { label: "E-mail", href: `mailto:${CONTACT.email}` },
        { label: "Telefone", href: CONTACT.phoneHref },
      ],
    },
  ],
  legal: {
    copyright: "© 2023 AGD Saúde. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    privacyHref: "/politica-de-privacidade",
    note: "Desenvolvido por 2swebtech",
  },
};

/* --------------------------------------------------------------------------
 * Sections that are part of the base template but not rendered on this page.
 * Kept so their components stay compilable.
 * ------------------------------------------------------------------------ */

export const MARQUEE = {
  lines: ["Trusted by nearly", "5000+", "Partner's"],
};

export const PROMISE = {
  text: "Because every senior\ndeserves not just care, but\ncompassion, respect, and a place to call home.",
  // Desktop line split produced by the source site's SplitText (masks are
  // nowrap per line; concatenated they reflow into `text` below 992px).
  masks: [
    [
      { t: "Because every senior" },
      { img: "promiseAvatar1" as const },
      { t: "deserves not just " },
    ],
    [
      { t: "care, but" },
      { img: "promiseAvatar2" as const },
      { t: "compassion, respect, and a " },
    ],
    [{ t: "place to call home." }],
  ],
};

export const CHOOSE = {
  tag: "//  Why Choose Us",
  title:
    "The Right Choice for Your Loved One\u2019s Next Chapter\u2014In a Place They\u2019ll Truly Feel at Home.",
  items: [
    {
      num: "01/",
      title: "Personalized Care Plans",
      body: "We tailor our support to meet the unique needs, liking routines of each resident.",
      image: "choose1",
    },
    {
      num: "02/",
      title: "Experienced, Compassionate Staff",
      body: "Our team is trained, trusted, and deeply committed to senior well-being.",
      image: "choose2",
    },
    {
      num: "03/",
      title: "Warm, Home-Like Environment",
      body: "Comfortable rooms, cozy shared spaces, and a welcoming atmosphere.",
      image: "choose3",
    },
    {
      num: "04/",
      title: "Engaging Daily Activities",
      body: "From music and gentle exercise\u2014there\u2019s always something joyful to do.",
      image: "choose4",
    },
  ] as const,
};

export const GALLERY = {
  tag: "//  Gallery",
  title: "Capturing Moments of Joy, Care, and Connection",
  items: [
    {
      title: "Planting & Garden Work",
      body: "A look at full-service jobs where we\u2019ve handled planting, flower beds, shrubs, and landscape updates.",
      image: "gallery1",
    },
    {
      title: "Lawn Care & Maintenance",
      body: "A look at full-service jobs where we\u2019ve handled mowing, edging, trimming, and routine yard upkeep.",
      image: "gallery2",
    },
    {
      title: "Daily Life & Activities",
      body: "At look at full-service jobs where we\u2019ve handled mowing, planting, trimming more.",
      image: "gallery3",
    },
    {
      title: "Complete Landscape Services",
      body: "A look at full-service jobs where we\u2019ve handled mowing, planting, trimming, and more.",
      image: "gallery4",
    },
  ] as const,
};

export const TEAM = {
  tag: "//  Our Team",
  title: "The Team That Makes Our Home Feel Like Family",
  body: "Each staff member\u2014from our nurses and caregivers to our activity coordinators and chefs\u2014is dedicated to making every.",
  cta: { label: "Meet Our Team", href: "#team" },
  members: [
    {
      role: "Director of Care",
      quote:
        "\"My mission is to ensure every resident feels respected, heard, and at home\u2014every single day.\"",
      name: "Marh Thompson ",
      suffix: "– Director of Care",
      image: "team1",
    },
    {
      role: "Head Nurse / Clinical Manager",
      quote:
        "\u201cEvery heartbeat matters. My goal is to make care feel comforting, not clinical.\u201d",
      name: "Sophia Bennett",
      suffix: "\u2013 Head Nurse / Clinical Manager\n",
      image: "team4",
    },
    {
      role: "Senior Caregiver",
      quote: "\u201cI treat every resident like my own parent\u2014with patience and love.\u201d",
      name: "Martha Lewis",
      suffix: "\u2013 Senior Caregiver",
      image: "team6",
    },
    {
      role: "Activity & Engagement Coordinator",
      quote: "\u201cJoy is medicine\u2014and I serve it daily through laughter and creativity.\u201d",
      name: "Ella Parker",
      suffix: "\u2013 Activity & Engagement Coordinator",
      image: "team5",
    },
    {
      role: "Nutritionist & Head Chef",
      quote: "\u201cGood food is good care. I make every meal feel like home.\u201d",
      name: "James Collins",
      suffix: "\u2013 Nutritionist & Head Chef",
      image: "team2",
    },
    {
      role: "Housekeeping Lead",
      quote: "\u201cClean spaces create peace of mind. That\u2019s what I deliver daily.\u201d",
      name: "Harper Reed",
      suffix: "\u2013 Housekeeping Lead",
      image: "team3",
    },
  ] as const,
};

export const BLOG = {
  tag: "//  Success Stories",
  title: "Insights, Stories & Support for Families",
  body: "Explore articles on senior wellness, caregiving tips, memory care advice, and updates from life inside our care home.",
  cta: { label: "All Blog Posts", href: "#blog" },
  posts: [
    {
      excerpt: "This is some text inside of a div block.",
      date: "January 4, 2026",
      category: "Amily & Caregiver",
      title: "From Data to Action: Making Chronic Care More Effective",
      image: "misc1",
    },
    {
      excerpt: "This is some text inside of a div block.",
      date: "January 4, 2026",
      category: "Memory & Dementia",
      title: "From Insights to Impact: Transforming Chronic Care",
      image: "misc2",
    },
    {
      excerpt: "This is some text inside of a div block.",
      date: "January 4, 2026",
      category: "Health & Wellness",
      title: "Turning Healthcare Data Into Actionable Chronic Care",
      image: "miscBg",
    },
  ] as const,
};
