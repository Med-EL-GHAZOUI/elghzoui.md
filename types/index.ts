export type NavItem = {
  id: string;
  label: string;
};

export type Evidence = "internship" | "project" | "certified" | "knowledge";

export type SkillItem = {
  name: string;
  evidence: Evidence;
};

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  items: SkillItem[];
};

export type Experience = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
};

export type ProjectTheme = "forecast" | "gpec" | "ocr" | "conference";

export type Project = {
  id: string;
  index: string;
  name: string;
  type: string;
  date: string;
  context: string;
  summary: string;
  stack: string[];
  focus: string[];
  functionality: string[];
  theme: ProjectTheme;
  repoUrl?: string;
  demoUrl?: string;
};

export type Education = {
  id: string;
  title: string;
  institution: string;
  period: string;
  detail?: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
};
