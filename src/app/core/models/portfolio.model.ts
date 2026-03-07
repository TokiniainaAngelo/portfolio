export type Lang = 'en' | 'fr';

export interface NavTranslations {
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
  resume: string;
}

export interface HeroTranslations {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  cta: string;
  contact: string;
  scrollDown: string;
}

export interface AboutTranslations {
  title: string;
  paragraphs: string[];
  statsYears: string;
  statsYearsLabel: string;
  statsProjects: string;
  statsProjectsLabel: string;
  statsClients: string;
  statsClientsLabel: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  featured: boolean;
}

export interface ProjectsTranslations {
  title: string;
  subtitle: string;
  problemLabel: string;
  solutionLabel: string;
  impactLabel: string;
  items: ProjectItem[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
}

export interface SkillsTranslations {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  stack: string[];
}

export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  present: string;
  items: ExperienceItem[];
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  send: string;
  sending: string;
  sent: string;
  or: string;
  emailMe: string;
}

export interface FooterTranslations {
  built: string;
  rights: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}
