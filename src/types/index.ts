import type { ReactNode, ComponentType } from 'react';

export type Theme = 'japan' | 'minimal';

export interface Language {
  name: string;
  width: string;
  summary: string;
}

export interface ProjectLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface Project {
  name: string;
  desc: string;
  img: string;
  imgOpen: string;
  content: ReactNode;
  languages: Language[];
  links: ProjectLink[];
  labelClass?: string;
  label?: string;
}

export interface Skill {
  name: string;
  icon: string | ComponentType<{ size?: number; className?: string }>;
  category: string;
}

export interface LinkedInAssessment {
  name: string;
  icon: string;
  top: number;
  pool: string;
  year: number;
  borderColor: string;
}
