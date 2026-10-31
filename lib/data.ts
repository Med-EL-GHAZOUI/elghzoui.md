export const profile = {
  name: "Mohamed EL-GHAZOUI",
  role: "Développeur Full-Stack",
  email: "elghazoui.md@gmail.com",
  phone: "+212 6 82 44 49 21",
  location: "Rabat, Maroc | Mobilité nationale",
  linkedin: "https://www.linkedin.com/in/mohamed-el-ghazoui",
  github: "https://github.com/Med-EL-GHAZOUI",
  website: "https://elghzouimd.vercel.app",
  cv: "/assets/CV-EL-GHAZOUI-Mohamed.pdf",
};

export const expertises = [
  {
    title: "Développement Full-Stack",
    description:
      "Applications web complètes avec Angular, React / Next.js et des API REST sécurisées (JWT).",
  },
  {
    title: "Back-end Java & Spring Boot",
    description:
      "Java SE 17 certifié Oracle, Spring Boot, JPA/Hibernate, Maven et architectures REST.",
  },
  {
    title: "Node.js, NestJS & .NET",
    description:
      "NestJS / TypeORM, Django, Flask, Laravel, ASP.NET Core et Blazor Server (.NET 9).",
  },
  {
    title: "Data, Python & OCR",
    description:
      "Pandas, NumPy, modèles de prédiction des ventes et extraction automatique par OCR.",
  },
  {
    title: "Bases de données & DevOps",
    description:
      "PostgreSQL, MySQL, MariaDB, Oracle, MongoDB, Docker, Linux et Git en méthode Agile / Scrum.",
  },
];

export const projects = [
  {
    title: "Application GPEC - COPAG",
    label: "GPEC",
    description:
      "Gestion prévisionnelle des emplois et des compétences pour la Coopérative Agricole COPAG.",
    tags: ["Angular", "NestJS", "TypeORM", "JWT", "UML"],
  },
  {
    title: "Blazor & OCR - Extraction des CNI",
    label: ".NET 9",
    description:
      "Application Blazor Server extrayant automatiquement les données des cartes nationales d'identité par OCR.",
    tags: ["C#", ".NET 9", "Blazor", "MariaDB", "OCR"],
  },
  {
    title: "PFA - Prévision des ventes",
    label: "NEXT.JS",
    description:
      "Plateforme web intelligente intégrant des modèles de prédiction des ventes.",
    tags: ["Next.js", "Flask", "PostgreSQL", "Pandas", "JWT"],
  },
  {
    title: "PFA - Gestion des conférences",
    label: "DJANGO",
    description:
      "Gestion des conférences, des intervenants et des inscriptions.",
    tags: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Employee Management System",
    label: "REACT",
    description: "Interface de gestion des employés réalisée avec React.js.",
    tags: ["React.js"],
  },
  {
    title: "Gestion des devoirs",
    label: "LARAVEL",
    description: "Application web pour organiser et suivre les devoirs.",
    tags: ["Laravel", "PHP"],
  },
  {
    title: "Application E-Commerce",
    label: "NEXT.JS",
    description: "Expérience d'achat web construite avec Next.js.",
    tags: ["Next.js", "Web"],
  },
  {
    title: "Gestion des ressources humaines",
    label: "JAVA",
    description: "Application de gestion RH développée en Java.",
    tags: ["Java", "Gestion RH"],
  },
];

export const experiences = [
  {
    title: "Stagiaire Développeur .NET - Smart Data Innovation (DevlopStack)",
    stage: "07/2026 - 08/2026",
  },
  {
    title: "Stagiaire Développeur Full-Stack - COPAG, Taroudant",
    stage: "07/2025 - 08/2025",
  },
];

export const education = [
  {
    title: "Ingénieur d'État Informatique et Réseaux - EMSI Rabat (5ème année, option Développement Digital et SI)",
    stage: "2024 - 2027 (prévu)",
  },
  {
    title: "Classes Préparatoires Intégrées - EMSI Rabat",
    stage: "2022 - 2024",
  },
];

export const certifications = [
  { date: "06/2026", title: "Oracle Certified Professional : Java SE 17 Developer", issuer: "Oracle" },
  { date: "05/2026", title: "Affirmer son leadership dans une relation non hiérarchique", issuer: "CrossKnowledge", id: "0000647120" },
  { date: "05/2026", title: "Comprendre l'esprit critique à l'ère digitale", issuer: "CrossKnowledge", id: "0000648104" },
  { date: "05/2026", title: "Animer et contribuer à des réunions de qualité", issuer: "CrossKnowledge", id: "0000647638" },
  { date: "05/2026", title: "Adapter sa communication au style de son interlocuteur", issuer: "CrossKnowledge", id: "0000646874" },
  { date: "05/2026", title: "Communiquer efficacement par mail", issuer: "CrossKnowledge", id: "0000647884" },
  { date: "04/2026", title: "Introduction to Big Data", issuer: "University of California, San Diego - Rady School of Management", id: "KF0Z5NGLXV1W" },
  { date: "04/2026", title: "Agile Project Management", issuer: "Google", id: "DFZ8ZHY603OD" },
  { date: "12/2025", title: "React Native", issuer: "Meta", id: "TEDUL280WLL2" },
  { date: "12/2025", title: "Les bases de React", issuer: "Meta", id: "7H02R1X42DO1" },
  { date: "04/2025", title: "Python for Data Science, AI & Development", issuer: "IBM", id: "DJOYNMN321XX" },
  { date: "04/2025", title: "Génie logiciel : conception de logiciels et gestion de projets", issuer: "The Hong Kong University of Science and Technology", id: "T3K4105T91G5" },
  { date: "03/2025", title: "La recherche documentaire", issuer: "École Polytechnique", id: "JIMPTE8A4PNS" },
  { date: "12/2024", title: "The Unix Workbench", issuer: "The Johns Hopkins University", id: "XZS0V6GBTLPF" },
  { date: "12/2024", title: "Introduction à la programmation orientée objet (en C++)", issuer: "EPFL", id: "GOXM8SX335Z3" },
  { date: "12/2024", title: "Interactivity with JavaScript", issuer: "University of Michigan", id: "SA091BDPN2AS" },
] as { date: string; title: string; issuer: string; id?: string }[];

export const languages = [
  { title: "Français - Courant", stage: "" },
  { title: "Anglais - Technique (intermédiaire)", stage: "" },
  { title: "Arabe - Langue maternelle", stage: "" },
];
