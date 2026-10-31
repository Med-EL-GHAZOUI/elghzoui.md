import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "sdi",
    role: ".NET Developer Intern — Blazor & OCR",
    organization: "Smart Data Innovation — DevelopStack",
    period: "July 2026 – August 2026",
    summary:
      "Development of a Blazor Server web application designed to extract information from Moroccan national identity cards.",
    responsibilities: [
      "Developed the web application using C# and .NET 9.",
      "Integrated OCR functionality for automatic information extraction.",
      "Designed and managed MariaDB persistence.",
    ],
    stack: ["C#", ".NET 9", "Blazor Server", "MariaDB", "OCR", "Git"],
  },
  {
    id: "copag",
    role: "Full-Stack Developer Intern — GPEC Application",
    organization: "COPAG",
    period: "July 2025 – August 2025",
    summary:
      "Development of a web application for workforce and skills planning management.",
    responsibilities: [
      "Participated in requirements analysis and UML modeling.",
      "Developed the Angular front end.",
      "Implemented the NestJS back end.",
      "Developed REST APIs.",
      "Implemented JWT-based authentication and authorization.",
      "Managed data persistence using TypeORM.",
    ],
    stack: ["Angular", "NestJS", "TypeORM", "REST API", "JWT", "UML", "Git"],
  },
];
