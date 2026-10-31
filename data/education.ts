import type { Certification, Education } from "@/types";

export const education: Education[] = [
  {
    id: "emsi-engineering",
    title: "Engineering degree in Computer Science and Networks",
    institution: "EMSI — École Marocaine des Sciences de l'Ingénieur, Rabat",
    period: "2024 – 2027 (expected)",
    detail: "Specialization: Digital Development and Information Systems.",
  },
  {
    id: "emsi-prep",
    title: "Integrated preparatory classes",
    institution: "EMSI — École Marocaine des Sciences de l'Ingénieur, Rabat",
    period: "2022 – 2024",
  },
];

// Add `verifyUrl` only when a genuine verification link is available.
export const certifications: Certification[] = [
  {
    id: "oracle-java-17",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: "June 2026",
  },
  {
    id: "agile-google",
    title: "Agile Project Management",
    issuer: "Google",
    date: "April 2026",
  },
  {
    id: "python-ibm",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "April 2025",
  },
];
