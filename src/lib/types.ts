export type Lang = "en" | "fa";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  video?: string;
  poster: string;
  isImageOnly?: boolean;
  links: ProjectLink;
  size: "lg" | "md";
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface MindsetCard {
  title: string;
  body: string;
}

export interface WorkflowStep {
  index: string;
  title: string;
  body: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    items: NavItem[];
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    console: string[];
  };
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
    internshipNote: string;
  };
  experience: {
    label: string;
    heading: string;
    role: string;
    company: string;
    duration: string;
    body: string;
    points: string[];
  };
  skills: {
    label: string;
    heading: string;
    groups: SkillGroup[];
  };
  mindset: {
    label: string;
    heading: string;
    cards: MindsetCard[];
  };
  projects: {
    label: string;
    heading: string;
    intro: string;
    githubLabel: string;
    demoLabel: string;
    noLinkLabel: string;
    featuresLabel: string;
    techLabel: string;
    items: Project[];
  };
  privateProject: {
    label: string;
    heading: string;
    status: string;
    description: string;
    areasLabel: string;
    areas: string[];
    confidentialNote: string;
  };
  workflow: {
    label: string;
    heading: string;
    steps: WorkflowStep[];
  };
  focus: {
    label: string;
    heading: string;
    items: string[];
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}
