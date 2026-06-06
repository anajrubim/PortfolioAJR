export const navLinks = [
  { title: 'Início',        slug: 'inicio' },
  { title: 'Sobre',         slug: 'sobre' },
  { title: 'Habilidades',   slug: 'habilidades' },
  { title: 'Projetos',      slug: 'projetos' },
  { title: 'Currículo',     slug: 'curriculo' },
  { title: 'Certificados',  slug: 'certificados' },
  { title: 'Eventos',       slug: 'eventos' },
  { title: 'Contato',       slug: 'contato' },
];

export const skillGroups = [
  {
    id: 'frontend', label: 'Frontend',
    skills: [
      { name: 'HTML',       slug: 'html5',      color: '#ff9100' },
      { name: 'CSS',        slug: 'css3',       color: '#3178C6' },
      { name: 'JavaScript', slug: 'javascript', color: '#fffb20' },
      { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
      { name: 'React',      slug: 'react',      color: '#61DAFB' },
      { name: 'Next.js',    slug: 'nextdotjs',  color: '#FFFFFF' },
      { name: 'Vite',       slug: 'vite',       color: '#646CFF' },
    ],
  },
  {
    id: 'backend', label: 'Backend',
    skills: [
      { name: 'Node.js', slug: 'nodedotjs', color: '#5FA04E' },
      { name: 'Java',    slug: 'java',      color: '#FBF0DF' },
      { name: 'Prisma',  slug: 'prisma',    color: '#5A67D8' },
      { name: 'Python',  slug: 'python',    color: '#EAB308' },
    ],
  },
  {
    id: 'database', label: 'Banco de Dados',
    skills: [
      { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
      { name: 'MySQL',      slug: 'mysql',      color: '#3ECF8E' },
    ],
  },
  {
    id: 'infra', label: 'Infra & Deploy',
    skills: [
      { name: 'Vercel', slug: 'vercel', color: '#FFFFFF' },
      { name: 'GitHub', slug: 'github', color: '#FFFFFF' },
    ],
  },
  {
    id: 'design', label: 'Design & IA',
    skills: [
      { name: 'Figma',  slug: 'figma',     color: '#F24E1E' },
      { name: 'Canva',  slug: 'canva',     color: '#A78BFA' },
      { name: 'Claude', slug: 'anthropic', color: '#D97757' },
    ],
  },
];

export const softSkills = [
  { name: 'Trabalho em equipe',       desc: 'Colaboração ativa em projetos acadêmicos e profissionais.' },
  { name: 'Organização',              desc: 'Gestão de tarefas, prazos e prioridades com disciplina.' },
  { name: 'Resolução de problemas',   desc: 'Análise crítica e criatividade para encontrar soluções.' },
  { name: 'Comunicação',              desc: 'Clareza na troca de ideias técnicas e interpessoais.' },
  { name: 'Proatividade',             desc: 'Iniciativa para aprender e propor melhorias constantes.' },
  { name: 'Adaptabilidade',           desc: 'Flexibilidade diante de novos contextos e tecnologias.' },
];

export const projects = [
  {
    title: 'TCC — Taiadinho, Além dos Corredores',
    description: 'Consistia num jogo com o objetivo apresentar a novos alunos da Etec o ambiente escolar, professores, dinâmica dos cursos e regras de funcionamento da escola.',
    problem: 'Criação de uma ferramenta que reunisse todas as linguagens de programação estudadas durante o curso.',
    solution: 'Desenvolvimento de um jogo em C#, integrado a banco de dados SQL.',
    tags: ['C#', 'GameMaker', 'MySQL', 'GML'],
    participation: 'Desenvolvimento de toda a parte visual e banco de dados.',
    href: 'https://drive.google.com/drive/folders/1qdw8836eY6AC4JYGF2s7dBvqA6xNg3El?usp=drive_link',
    status: 'Concluído',
  },
  {
    title: 'API 1 — FATEC',
    description: 'Projeto Integrador do 1º semestre da FATEC. Ferramenta de monitoramento de tendências do mercado de importação e exportação no estado de São Paulo.',
    problem: 'Dificuldade em monitorar tendências de mercado de maneira clara e objetiva, devido ao acesso a planihas extensas e descentralizadas. ',
    solution: 'Fornecer uma solução eficiente para monitorar as tendências de mercado, permitindo que usuários acessem e analisem dados de forma intuitiva e prática.',
    tags: ['HTML', 'CSS', 'Flask', 'Python', 'Colab', 'MySQL'],
    participation: 'Desenvolvimento do FrontEnd e do Design da aplicação.',
    href: 'https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025.git',
    status: 'Concluído',
  },
  {
    title: 'API 2 — NeweLog',
    description: 'Projeto Integrador do 2º semestre da FATEC. Plataforma única que centralize e padronize processos administrativos, comerciais e operacionais.',
    problem: 'Inexistência de uma plataforma única que centralize e padronize processos administrativos, comerciais e operacionais, facilitando a visualização das informações, notificações e relatórios da empresa.',
    solution: 'Sistema que visa a centralização de dados e processos em uma única plataforma que permite um maior controle e acompanhamento de processos além de relatórios precisos e em tempo real.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'MySQL', 'React', 'NodeJS'],
    participation: 'Participação no desenvolvimento do FrontEnd, BackEnd e desempenho da função de Scrum Master da equipe.',
    results: 'Sistema aprovado com destaque na apresentação final da equipe.',
    href: 'https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025.git',
    status: 'Concluído',
  },
  {
    title: 'API 3 — GSW',
    description: 'Projeto Integrador do 3º semestre. Plataforma de controle de apontamento de horas e processos administrativos.',
    problem: 'Dificuldade de organizar e gerir a equipe de forma eficiente diante do crescente volume de demandas. A falta de um processo centralizado e a lentidão no fluxo de informações geram gargalos operacionais que quebram a dinâmica do trabalho diário.',
    solution: 'Sistema centralizado que permite organizar e padronizar o registro de atividades, projetos, clientes e recursos em um único ambiente. Permite que colaboradores registrem de forma simples as horas dedicadas às tarefas, enquanto gestores terão uma visão clara do esforço, custo e faturamento em cada projeto.',
    tags: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'TypeScript', 'MySQL', 'React', 'Java', 'SpringBoot', 'Docker'],
    participation: 'Desempenho da função de Scrum Master da equipe.',
    href: 'https://github.com/Team-Chronos/API-DSM-3SEMESTRE-2026.git',
    status: 'Em andamento',
  },
];

export const curriculum = {
  academic: [
    {
      period: '2025 — Atual',
      title: 'Desenvolvimento de Software Multiplataforma',
      institution: 'FATEC São José dos Campos',
      desc: 'Ênfase no desenvolvimento de aplicações web, mobile e desktop, com foco em qualidade, escalabilidade e experiência do usuário.',
    },
    {
      period: '2022 — 2024',
      title: 'Desenvolvimento de Sistemas',
      institution: 'ETEC',
      desc: 'Formação voltada ao desenvolvimento de sistemas, modelagem de dados, lógica de programação e integração de soluções tecnológicas.',
    },
  ],
  courses: [
    { name: 'Inglês',institution: 'KNN Idiomas',  year: '2025' },
    { name: 'Arduíno',institution: 'Centro Paula Souza',  year: '2024' },
    { name: 'Escola de Inovadores',institution: 'Centro Paula Souza',  year: '2024' },
  ],
};

export const certificates = [
  { name: 'Design Patterns Básico',       institution: 'Fatec',     year: '2026', category: 'Técnico'  },
  { name: 'Desenvolvedor FrontEnd',       institution: 'Fatec',     year: '2025', category: 'Técnico' },
  { name: 'FrontEnd básico',              institution: 'Fatec',     year: '2025', category: 'Técnico'  },
  { name: 'Excel Avançado ',              institution: 'Fundação Bradesco',  year: '2025', category: 'Técnico' },
  { name: 'Excel Intermediário',          institution: 'Fundação Bradesco',  year: '2025', category: 'Técnico' },
  { name: 'Excel Básico',                 institution: 'Fundação Bradesco',  year: '2025', category: 'Técnico' },
  { name: 'Desenvolvedora de Sistemas JR',institution: 'Centro Paula Souza',  year: '2024', category: 'Técnico' },
  { name: 'Arduíno',                      institution: 'Centro Paula Souza',  year: '2024', category: 'Técnico' },
  { name: 'Escola de Inovadores',         institution: 'Centro Paula Souza',  year: '2024', category: 'Técnico' },
  { name: 'Inglês C2',   institution: 'KNN Idiomas', year: '2025', category: 'Idioma' },
];

export const events = [
  {
    type: 'Feira Tecnológica',
    name: 'Feira de Soluções FATEC 2025 (1)',
    role: 'Participante - Equipe Chronos',
    desc: 'Apresentação ao público dos resultados após 6 meses de desenvolvimento do API 1.',
    year: '2025',
    highlight: false,
  },
  {
    type: 'Feira Tecnológica',
    name: 'Feira de Soluções FATEC 2025 (2)',
    role: 'Participante - Equipe Chronos',
    desc: 'Apresentação ao público dos resultados após 6 meses de desenvolvimento do API 2.',
    year: '2025',
    highlight: true,
  },
  {
    type: 'Congresso Tecnológico',
    name: 'Science & Business Connection 2025',
    role: 'Participante',
    desc: 'Workshops de Inteligência Artificial, Programção e Desenvolvimento. Palestras com profissionais da indústria tech.',
    year: '2025',
    highlight: false,
  },
  {
    type: 'Congresso Tecnológico',
    name: 'Inovation Week 2025',
    role: 'Participante',
    desc: 'Workshops de Inovações Tecnológicas, novidades na área Tech. Palestras com profissionais da área.',
    year: '2025',
    highlight: false,
  },
];

export const LINKS = {
  github:    'https://github.com/anajrubim',
  linkedin:  'https://linkedin.com/in/ana-júlia-rubim',
  email:     'anajrbcosta25@gmail.com',
  whatsapp:  'https://wa.me/5512996664754',
  instagram: 'https://www.instagram.com/anajrubim',
};
