export interface Service {
  title: string;
  icon: string;
  items: string[];
}

export interface Case {
  title: string;
  description: string;
  image: string;
  /** Destaque ocupa a coluna maior da grade. */
  featured: boolean;
}

export interface Skill {
  title: string;
  icon: string;
  items: string[];
}

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const SERVICES: Service[] = [
  {
    title: 'Desenvolvimento de Software',
    icon: 'assets/img/software.svg',
    items: ['Sistemas personalizados', 'Tecnologias modernas', 'Manutenção de códigos'],
  },
  {
    title: 'Outsourcing',
    icon: 'assets/img/outsourcing.svg',
    items: ['Capacitação de equipes', 'Times flexíveis', 'Gerenciamentos de pessoas'],
  },
  {
    title: 'Consultoria',
    icon: 'assets/img/consulting_1.svg',
    items: ['Pedir para o leal', 'Pedir para o leal', 'Pedir para o leal'],
  },
];

export const CASES: Case[] = [
  {
    title: 'Alô PanVel',
    description: 'Renovamos o software utilizado no atendimento do callcenter da PanVel Farmácias.',
    image: 'assets/img/case-panvel.jpg',
    featured: true,
  },
  { title: 'Siemens', description: LOREM, image: 'assets/img/case-siemens.jpg', featured: true },
  {
    title: 'Cerealiza',
    description: 'Criação de nova identidade e reestrutura do software para gestão agrícola.',
    image: 'assets/img/case-cerealiza.jpg',
    featured: false,
  },
  {
    title: 'Tintas Killing',
    description: LOREM,
    image: 'assets/img/case-killing.jpg',
    featured: false,
  },
  { title: 'PAF', description: LOREM, image: 'assets/img/case-paf.jpg', featured: false },
  { title: 'Safe Charge', description: LOREM, image: 'assets/img/case-safe.jpg', featured: false },
];

export const SKILLS: Skill[] = [
  {
    title: 'Design',
    icon: 'assets/img/design.svg',
    items: ['UX/UI Design', 'Prototipagem', 'Materiais gráficos'],
  },
  {
    title: 'Arquitetura',
    icon: 'assets/img/arquitetura.svg',
    items: ['Modernização de produto', 'Desenvolvimento de software personalizado'],
  },
  {
    title: 'QA',
    icon: 'assets/img/qa.svg',
    items: ['Automatização de testes', 'Testes manuais'],
  },
  { title: 'Front-end', icon: 'assets/img/front-end.svg', items: ['Angular'] },
  { title: 'Back-end', icon: 'assets/img/coding.svg', items: ['Java'] },
];
