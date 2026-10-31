import type { Project } from "@/types";

// No public repository or live demo has been confirmed for these projects.
// Add `repoUrl` / `demoUrl` only once a genuine link exists.
export const projects: Project[] = [
  {
    id: "sales-forecasting",
    index: "01",
    name: "Intelligent Sales Forecasting Application",
    type: "Academic project · Web platform",
    date: "June 2026",
    context: "Academic project",
    summary: "A web platform integrating sales forecasting models.",
    stack: ["Next.js", "Flask", "PostgreSQL", "Pandas", "NumPy", "JWT", "bcrypt"],
    focus: [
      "Web application development",
      "REST API integration",
      "Data processing and analysis",
    ],
    functionality: [
      "PostgreSQL data persistence",
      "Authentication using JWT",
      "Password hashing using bcrypt",
    ],
    theme: "forecast",
  },
  {
    id: "gpec",
    index: "02",
    name: "GPEC Management Application",
    type: "Internship project · Full-Stack web app",
    date: "July 2025",
    context: "Developed during the COPAG internship",
    summary:
      "A workforce and skills planning management application developed during the COPAG internship.",
    stack: ["Angular", "NestJS", "TypeORM", "REST API", "JWT"],
    focus: [
      "Requirements analysis and UML modeling",
      "Front-end and back-end integration through REST APIs",
      "Authentication and authorization",
    ],
    functionality: [
      "Angular front end",
      "NestJS back end with REST APIs",
      "JWT-based authentication and authorization",
      "Data persistence with TypeORM",
    ],
    theme: "gpec",
  },
  {
    id: "id-card-extraction",
    index: "03",
    name: "Identity Card Information Extraction",
    type: "Internship project · Blazor web app",
    date: "July – August 2026",
    context: "Developed during the Smart Data Innovation internship",
    summary:
      "A web application designed to extract information from national identity cards using OCR.",
    stack: ["C#", ".NET 9", "Blazor Server", "MariaDB", "OCR"],
    focus: [
      "OCR integration for automatic information extraction",
      "MariaDB persistence design",
    ],
    functionality: [
      "Blazor Server web interface",
      "Automatic extraction of information from Moroccan national identity cards",
      "Data persisted in MariaDB",
    ],
    theme: "ocr",
  },
  {
    id: "conference-management",
    index: "04",
    name: "Conference Management System",
    type: "Academic project · Django web app",
    date: "June 2025",
    context: "Academic project",
    summary:
      "An application for managing conferences, speakers, and registrations.",
    stack: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
    focus: [
      "Modeling the relationships between conferences, speakers, and registrations",
      "Server-rendered web interface with Django",
    ],
    functionality: [
      "Conference management",
      "Speaker management",
      "Registration management",
    ],
    theme: "conference",
  },
];
