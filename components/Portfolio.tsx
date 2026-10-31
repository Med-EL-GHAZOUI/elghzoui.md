"use client";

import Image from "next/image";
import { FormEvent, MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import ContactForm from "./ContactForm";

type Theme = "cyber" | "midnight" | "light";
type Filter = "all" | "frontend" | "backend" | "java";

type Skill = {
  icon: string;
  title: string;
  values: string[];
};

type Project = {
  id: string;
  title: string;
  category: string;
  techLabel: string;
  techClass?: string;
  description: string;
  detail: string;
  tags: string[];
  featured?: boolean;
};

const themes: Theme[] = ["cyber", "midnight", "light"];

const skills: Skill[] = [
  { icon: "{ }", title: "Back-end", values: ["Java", "Spring Boot", "JPA/Hibernate", "Node.js", "NestJS", "Django", "Flask", "PHP", "Laravel", "C#", ".NET 9", "ASP.NET Core", "Blazor", "API REST", "JWT", "TypeORM"] },
  { icon: "</>", title: "Front-end", values: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { icon: "DB", title: "Bases de données", values: ["SQL", "PL/SQL", "PostgreSQL", "MySQL", "MariaDB", "SQL Server", "Oracle", "MongoDB", "SQLite"] },
  { icon: "PY", title: "Data / Python", values: ["Python", "Pandas", "NumPy", "Modèles de prédiction", "OCR"] },
  { icon: "++", title: "Outils & Méthodes", values: ["Git", "Maven", "Docker", "Linux", "Postman", "IntelliJ", "WebStorm", "Taiga", "UML", "Agile / Scrum"] }
];

const projects: Project[] = [
  {
    id: "gpec",
    title: "Application GPEC - COPAG",
    category: "frontend backend web",
    techLabel: "GPEC",
    description: "Gestion prévisionnelle des emplois et des compétences pour la Coopérative Agricole COPAG (Angular / NestJS).",
    detail: "Stage 07/2025 - 08/2025 : analyse des besoins et conception UML, application Front-end Angular / Back-end NestJS, authentification et autorisation JWT, API REST et persistance avec TypeORM.",
    tags: ["Angular", "NestJS", "TypeORM", "JWT", "UML"],
    featured: true
  },
  {
    id: "blazor-ocr",
    title: "Blazor & OCR - Extraction des CNI",
    category: "backend web",
    techLabel: ".NET 9",
    techClass: "web",
    description: "Application Blazor Server avec OCR pour extraire automatiquement les données des cartes nationales d'identité.",
    detail: "Stage chez Smart Data Innovation - DevlopStack (07/2026 - 08/2026) : application Blazor Server (C#, .NET 9), intégration d'un système OCR et conception de la base MariaDB.",
    tags: ["C#", ".NET 9", "Blazor Server", "MariaDB", "OCR"]
  },
  {
    id: "ventes",
    title: "PFA - Prévision des ventes",
    category: "frontend backend web",
    techLabel: "NEXT",
    techClass: "next",
    description: "Plateforme web intelligente intégrant des modèles de prédiction des ventes.",
    detail: "Projet 06/2026 : plateforme Next.js / Flask, API REST sécurisées, base PostgreSQL, traitement des données avec Pandas et NumPy, authentification JWT et hachage bcrypt.",
    tags: ["Next.js", "Flask", "PostgreSQL", "Pandas", "NumPy", "JWT", "bcrypt"]
  },
  {
    id: "conferences",
    title: "PFA - Gestion des conférences",
    category: "backend web",
    techLabel: "DJANGO",
    techClass: "django",
    description: "Application web de gestion des conférences, des intervenants et des inscriptions.",
    detail: "Projet 06/2025 : conception et développement d'une application Django, de l'interface utilisateur et de la base de données SQLite.",
    tags: ["Django", "SQLite", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "employee",
    title: "Employee Management System",
    category: "frontend web",
    techLabel: "REACT",
    techClass: "react",
    description: "Interface de gestion des employés réalisée avec React.js.",
    detail: "Système de gestion d'employés organisé autour d'une interface React.js moderne et modulaire.",
    tags: ["React.js", "Frontend"]
  },
  {
    id: "devoirs",
    title: "Gestion des devoirs",
    category: "backend web",
    techLabel: "LARAVEL",
    techClass: "laravel",
    description: "Application web pour organiser et suivre les devoirs.",
    detail: "Application permettant de structurer la gestion et le suivi des devoirs avec le framework Laravel.",
    tags: ["Laravel", "PHP"]
  },
  {
    id: "commerce",
    title: "Application E-Commerce",
    category: "frontend web",
    techLabel: "NEXT",
    techClass: "next",
    description: "Expérience d'achat web construite avec Next.js.",
    detail: "Application e-commerce développée avec Next.js, orientée navigation produit et expérience utilisateur.",
    tags: ["Next.js", "Web"]
  },
  {
    id: "rh",
    title: "Gestion des ressources humaines",
    category: "java",
    techLabel: "JAVA",
    techClass: "java",
    description: "Application de gestion RH développée en Java.",
    detail: "Application de gestion des ressources humaines développée en Java.",
    tags: ["Java", "Gestion RH"]
  }
];

const experiences = [
  {
    period: "07/2026 - 08/2026",
    title: "Stagiaire Développeur .NET - Blazor & OCR",
    company: "Smart Data Innovation - DevlopStack | Mohammadia",
    stack: ["C#", ".NET 9", "Blazor Server", "MariaDB", "OCR", "Git"],
    points: [
      "Développement d'une application web Blazor Server (C#, .NET 9) dédiée à l'extraction des données des CNI.",
      "Intégration d'un système OCR pour l'extraction automatique des données des cartes nationales d'identité.",
      "Conception et gestion de la base de données MariaDB pour la persistance des informations."
    ]
  },
  {
    period: "07/2025 - 08/2025",
    title: "Stagiaire Développeur Full-Stack - Application GPEC",
    company: "Coopérative Agricole COPAG | Taroudant",
    stack: ["Angular", "NestJS", "TypeORM", "API REST", "JWT", "UML", "Git"],
    points: [
      "Développement d'une application web de Gestion Prévisionnelle des Emplois et des Compétences (GPEC).",
      "Analyse des besoins et conception de l'architecture de l'application (UML).",
      "Architecture Front-end (Angular) / Back-end (NestJS).",
      "Authentification et autorisation sécurisées avec JWT.",
      "Développement des API REST et persistance des données avec TypeORM."
    ]
  }
];

const formations = [
  { period: "2024 - 2027 (prévu)", title: "Ingénieur d'État en Informatique et Réseaux", institution: "EMSI (École Marocaine des Sciences de l'Ingénieur) - Rabat, Maroc | Option Développement Digital et Systèmes d'Information - 5ème année" },
  { period: "2022 - 2024", title: "Classes Préparatoires Intégrées (Sciences de l'Ingénieur)", institution: "EMSI (École Marocaine des Sciences de l'Ingénieur) - Rabat, Maroc" }
];

const certifications = [
  { date: "06/2026", title: "Oracle Certified Professional : Java SE 17 Developer", issuer: "Oracle", id: "" },
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
  { date: "12/2024", title: "Interactivity with JavaScript", issuer: "University of Michigan", id: "SA091BDPN2AS" }
];

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Technique (intermédiaire)" },
  { name: "Arabe", level: "Langue maternelle" }
];

const sectionLinks = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "Profil" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "education", label: "Formations" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const interval = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(100, value + Math.ceil(Math.random() * 15));
        if (next === 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setDone(true), 230);
        }
        return next;
      });
    }, 75);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="loader" className={`loader${done ? " done" : ""}`} aria-label="Chargement de l'interface">
      <div className="loader-core">
        <div className="boot-lines" aria-live="polite">
          <span>&gt; INITIALIZING PORTFOLIO</span>
          <span>&gt; LOADING EMSI PROFILE</span>
          <span>&gt; READY TO CONNECT</span>
        </div>
        <div className="loader-brand"><span>M</span> MED//PORTFOLIO</div>
        <div className="loader-track"><i style={{ width: `${progress}%` }} /></div>
        <div className="loader-meta"><span>BOOT SEQUENCE</span><output>{String(progress).padStart(2, "0")}%</output></div>
      </div>
    </section>
  );
}

function useVisualEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.13 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".dock a, .nav a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-40% 0px -47%" });
    document.querySelectorAll("main > section[id]").forEach((section) => sectionObserver.observe(section));

    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height ? (window.scrollY / height) * 100 : 0;
      document.documentElement.style.setProperty("--progress", `${value}%`);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    type Particle = { x: number; y: number; size: number; speed: number };
    let particles: Particle[] = [];
    let frame = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: Math.min(58, Math.floor(window.innerWidth / 23)) }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.4,
        speed: Math.random() * 0.2 + 0.05
      }));
    };
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--cyan");
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < -4) particle.y = window.innerHeight + 4;
        context.globalAlpha = 0.15 + particle.size / 5;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursor-dot");
    const spotlight = document.getElementById("spotlight");
    const handleMove = (event: globalThis.MouseEvent) => {
      document.body.classList.add("cursor-active");
      if (dot) {
        dot.style.left = `${event.clientX}px`;
        dot.style.top = `${event.clientY}px`;
      }
      cursor?.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 260, fill: "forwards" });
      spotlight?.style.setProperty("--x", `${event.clientX}px`);
      spotlight?.style.setProperty("--y", `${event.clientY}px`);
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return canvasRef;
}

function Header({ theme, cycleTheme, setPaletteOpen }: { theme: Theme; cycleTheme: () => void; setPaletteOpen: (value: boolean) => void }) {
  return (
    <header className="header glass">
      <a className="brand" href="#home" aria-label="Mohamed El-Ghazoui, retour accueil">
        <span className="brand-mark">M</span><span>MED.DEV</span>
      </a>
      <nav className="nav" aria-label="Navigation principale">
        {sectionLinks.slice(1).filter((link) => !["certifications", "experience"].includes(link.id)).map((link) => (
          <a key={link.id} href={`#${link.id}`}>{link.label}</a>
        ))}
      </nav>
      <div className="controls">
        <button id="theme-toggle" className="pill-button" aria-label="Changer le thème" onClick={cycleTheme}>{theme.toUpperCase()}</button>
        <button id="command-open" className="command-button" aria-label="Ouvrir la palette de commandes" onClick={() => setPaletteOpen(true)}>
          <span>Ctrl</span>K
        </button>
      </div>
    </header>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>("cyber");
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>(["Portfolio CLI - tapez help pour découvrir les commandes."]);
  const canvasRef = useVisualEffects();

  useEffect(() => {
    const saved = window.localStorage.getItem("med-theme") as Theme | null;
    if (saved && themes.includes(saved)) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("med-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setActiveProject(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const visibleProjects = useMemo(() => projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase().trim());
    return matchesFilter && matchesSearch;
  }), [filter, search]);

  const commandItems = [
    { action: "projects", title: "Voir les projets", key: "P" },
    { action: "experience", title: "Voir les expériences", key: "E" },
    { action: "education", title: "Voir les formations", key: "F" },
    { action: "certifications", title: "Voir les certifications", key: "C" },
    { action: "contact", title: "Me contacter", key: "M" },
    { action: "theme", title: "Changer de thème", key: "T" },
    { action: "terminal", title: "Ouvrir le terminal", key: ">_" }
  ].filter((command) => command.title.toLowerCase().includes(commandQuery.toLowerCase()));

  function cycleTheme() {
    setTheme(themes[(themes.indexOf(theme) + 1) % themes.length]);
  }

  function runCommand(action: string) {
    setPaletteOpen(false);
    setCommandQuery("");
    if (action === "theme") cycleTheme();
    else if (action === "terminal") setTerminalOpen(true);
    else document.getElementById(action)?.scrollIntoView({ behavior: "smooth" });
  }

  function submitTerminal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    const results: Record<string, string> = {
      help: "Commandes : about, skills, projects, experience, education, contact, clear",
      about: "MOHAMED EL-GHAZOUI - Développeur Full-Stack, étudiant ingénieur en Informatique et Réseaux à l'EMSI (5ème année). Recherche un stage PFE de 6 mois.",
      skills: "Java / Spring Boot / Angular / NestJS / Next.js / .NET 9 / Python / SQL / Docker / Git",
      projects: "Ouverture de la section projets...",
      experience: "Stagiaire .NET Blazor & OCR (Smart Data Innovation, 07-08/2026) ; Stagiaire Full-Stack GPEC (COPAG, 07-08/2025).",
      education: "EMSI Rabat : classes préparatoires intégrées (2022-2024), cycle ingénieur (2024-2027).",
      contact: "elghazoui.md@gmail.com | +212 6 82 44 49 21"
    };
    if (command === "clear") setTerminalLines([]);
    else setTerminalLines((lines) => [...lines, `visitor@med:~$ ${command}`, results[command] ?? `Commande inconnue : ${command}. Tapez help.`]);
    if (["projects", "experience", "education", "contact"].includes(command)) document.getElementById(command)?.scrollIntoView({ behavior: "smooth" });
    setTerminalInput("");
  }

  return (
    <>
      <Loader />
      <div className="noise" aria-hidden="true" />
      <canvas ref={canvasRef} id="particle-canvas" aria-hidden="true" />
      <div className="grid-floor" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div id="spotlight" className="spotlight" aria-hidden="true" />
      <div id="cursor" className="cursor" aria-hidden="true" />
      <div id="cursor-dot" className="cursor-dot" aria-hidden="true" />
      <div id="progress" className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">Aller au contenu</a>

      <Header theme={theme} cycleTheme={cycleTheme} setPaletteOpen={setPaletteOpen} />
      <aside className="dock glass" aria-label="Sections rapides">
        {sectionLinks.map((link, index) => (
          <a key={link.id} href={`#${link.id}`} className={index === 0 ? "active" : ""} aria-label={link.label}><span /></a>
        ))}
      </aside>

      <main id="main">
        <section id="home" className="hero section">
          <div className="hero-content reveal">
            <div className="availability"><i /><span>Recherche stage PFE 6 mois</span></div>
            <p className="eyebrow">DÉVELOPPEUR FULL-STACK / JAVA / WEB</p>
            <h1 className="profile-name">MOHAMED<br /><span className="gradient-text">EL-GHAZOUI</span></h1>
            <p className="hero-role">Développeur Full-Stack | Étudiant ingénieur en Informatique et Réseaux</p>
            <p className="hero-copy">
              Étudiant en 5ème année à l&apos;EMSI (option Développement Digital et Systèmes d&apos;Information),
              certifié Oracle Java SE 17, je développe des applications full-stack avec Java / Spring Boot,
              Angular, NestJS, Next.js et .NET. Deux stages réalisés, à la recherche d&apos;un stage PFE de 6 mois.
            </p>
            <div className="hero-actions">
              <a className="cta magnetic" href="#projects">Voir mes projets</a>
              <a className="cta secondary magnetic" href="#contact">Me contacter</a>
              <a className="cta secondary magnetic" href="/assets/CV-EL-GHAZOUI-Mohamed.pdf" download>Télécharger CV</a>
            </div>
            <div className="socials" aria-label="Contacts professionnels">
              <a href="mailto:elghazoui.md@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/mohamed-el-ghazoui" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Med-EL-GHAZOUI" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="avatar-shell portrait-shell glass">
              <div className="scanline" />
              <Image className="profile-photo" src="/assets/mohamed-el-ghazoui.jpeg" alt="Portrait de Mohamed El-Ghazoui" fill priority sizes="(max-width: 720px) 90vw, 390px" />
              <div className="identity"><strong>MOHAMED EL-GHAZOUI</strong><span>Développeur Full-Stack / Rabat</span></div>
            </div>
            <div className="hud-card glass hud-top"><span>PARCOURS</span><strong>5ÈME ANNÉE</strong></div>
            <div className="hud-card glass hud-bottom"><span>PROMOTION</span><strong>2027</strong><div className="mini-wave" /></div>
          </div>
          <div className="scroll-hint"><span>DÉCOUVRIR LE PROFIL</span><i /></div>
        </section>

        <section id="about" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">01 / À PROPOS</p>
            <h2>Un profil full-stack tourné vers le développement logiciel.</h2>
            <p>Étudiant en 5ème année du cycle d&apos;ingénieur en Informatique et Réseaux à l&apos;EMSI, développeur full-stack passionné par les technologies web et le développement logiciel. Compétences en Java / Spring Boot (certifié Oracle Java SE 17), API REST, SQL et Git, en méthodes Agile / Scrum.</p>
          </div>
          <div className="profile-grid">
            <article className="profile-card glass reveal">
              <span className="label">PROFIL ACADÉMIQUE</span>
              <h3>EMSI Rabat</h3><p>Ingénieur d&apos;État en Informatique et Réseaux</p>
              <div className="profile-lines">
                <span><small>Niveau</small>5ème année - Développement Digital et SI</span>
                <span><small>Parcours</small>2024 - 2027</span>
                <span><small>Localisation</small>Rabat, Maroc | Mobilité nationale</span>
              </div>
            </article>
            <article className="profile-card glass reveal">
              <span className="label">OBJECTIF</span>
              <h3>Stage PFE de 6 mois en full-stack</h3>
              <p>Rejoindre une équipe pour concevoir et développer des applications full-stack, en m&apos;appuyant sur mes deux stages et mes projets académiques.</p>
              <div className="tags"><span>Full-Stack</span><span>Java</span><span>Agile / Scrum</span><span>PFE 6 mois</span></div>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading reveal compact">
            <p className="eyebrow">02 / COMPÉTENCES</p><h2>Technologies et environnements pratiqués.</h2>
          </div>
          <div className="skills-grid five">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card glass reveal">
                <span className="skill-icon">{skill.icon}</span><h3>{skill.title}</h3>
                <div className="skill-badges">{skill.values.map((value) => <span key={value}>{value}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading reveal">
            <p className="eyebrow">03 / PROJETS</p><h2>Stages, projets académiques et réalisations.</h2>
          </div>
          <div className="project-tools reveal">
            <label className="search glass"><span aria-hidden="true">⌕</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Rechercher un projet..." /></label>
            <div id="filters" className="filters" aria-label="Filtrer les projets">
              {([["all", "Tous"], ["frontend", "Frontend"], ["backend", "Backend"], ["java", "Java"]] as [Filter, string][]).map(([value, label]) => (
                <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{label}</button>
              ))}
            </div>
          </div>
          <div className="project-grid portfolio-projects">
            {visibleProjects.map((project) => (
              <article key={project.id} className={`project-card glass reveal visible${project.featured ? " featured" : ""}`} data-title={project.title}>
                {project.featured ? (
                  <div className="preview preview-featured"><span className="pulse" /><strong>{project.techLabel}</strong><i /></div>
                ) : (
                  <div className={`preview tech-preview ${project.techClass}`}>{project.techLabel}</div>
                )}
                <div className="project-content">
                  {project.featured && <span className="label">STAGE / COPAG</span>}
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links"><button onClick={() => setActiveProject(project)}>Voir détails</button></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading reveal compact"><p className="eyebrow">04 / EXPÉRIENCE PROFESSIONNELLE</p><h2>Stages réalisés.</h2></div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.period} className="timeline-item reveal">
                <time>{experience.period}</time>
                <div className="glass">
                  <h3>{experience.title}</h3>
                  <p>{experience.company}</p>
                  <ul className="experience-points">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <div className="tags">{experience.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading reveal compact"><p className="eyebrow">05 / FORMATION</p><h2>Parcours académique.</h2></div>
          <div className="timeline">
            {formations.map((formation) => (
              <article key={formation.period} className="timeline-item reveal">
                <time>{formation.period}</time><div className="glass"><h3>{formation.title}</h3><p>{formation.institution}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-heading reveal compact"><p className="eyebrow">06 / CERTIFICATIONS</p><h2>Apprentissage certifié.</h2></div>
          <div className="cert-grid">
            {certifications.map((certification) => (
              <article key={certification.title} className="cert-card glass reveal">
                <time>{certification.date}</time><h3>{certification.title}</h3><p>{certification.issuer}</p>{certification.id && <small>ID : {certification.id}</small>}
              </article>
            ))}
          </div>
        </section>

        <section id="personal" className="section">
          <div className="section-heading reveal compact"><p className="eyebrow">07 / PROFIL PERSONNEL</p><h2>Langues, qualités et recherche.</h2></div>
          <div className="personal-grid">
            <article className="glass reveal"><span className="label">LANGUES</span><div className="interest-list">{languages.map((language) => <strong key={language.name}>{language.name} <small>- {language.level}</small></strong>)}</div></article>
            <article className="glass reveal"><span className="label">QUALITÉS HUMAINES</span><div className="large-badges"><span>Travail en équipe</span><span>Autonomie</span><span>Rigueur</span><span>Résolution de problèmes</span><span>Esprit d&apos;initiative</span></div></article>
            <article className="glass reveal"><span className="label">RECHERCHE</span><div className="interest-list"><strong>Stage PFE - 6 mois</strong><strong>Développement full-stack</strong><strong>Mobilité nationale</strong></div></article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading reveal">
            <p className="eyebrow">08 / CONTACT</p><h2>Échangeons autour d&apos;une opportunité.</h2>
            <p>À la recherche d&apos;un stage PFE de 6 mois en développement full-stack. Échangeons autour d&apos;une opportunité.</p>
            <div className="contact-list">
              <a href="tel:+212682444921"><small>Téléphone</small>+212 6 82 44 49 21</a>
              <a href="mailto:elghazoui.md@gmail.com"><small>Email</small>elghazoui.md@gmail.com</a>
              <span><small>Localisation</small>Rabat, Maroc | Mobilité nationale</span>
              <a href="https://www.linkedin.com/in/mohamed-el-ghazoui" target="_blank" rel="noreferrer"><small>LinkedIn</small>mohamed-el-ghazoui</a>
              <a href="https://github.com/Med-EL-GHAZOUI" target="_blank" rel="noreferrer"><small>GitHub</small>Med-EL-GHAZOUI</a>
              <a href="https://elghzouimd.vercel.app" target="_blank" rel="noreferrer"><small>Portfolio</small>elghzouimd.vercel.app</a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="footer">
        <div className="brand"><span className="brand-mark">M</span><span>MED.DEV</span></div>
        <p>&copy; 2026 Mohamed El-Ghazoui. Portfolio personnel.</p>
        <div><a href="mailto:elghazoui.md@gmail.com">Email</a><a href="https://github.com/Med-EL-GHAZOUI" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mohamed-el-ghazoui" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>

      {activeProject && (
        <div className="project-modal-overlay" role="presentation" onMouseDown={() => setActiveProject(null)}>
          <section className="modal glass" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event: MouseEvent) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Fermer" onClick={() => setActiveProject(null)}>x</button>
            <p className="eyebrow">PROJET / STAGE</p><h2 id="modal-title">{activeProject.title}</h2><p>{activeProject.detail}</p>
            <div className="tags">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </section>
        </div>
      )}

      {paletteOpen && (
        <div className="palette-overlay" role="presentation" onMouseDown={() => setPaletteOpen(false)}>
          <section className="palette glass" role="dialog" aria-modal="true" aria-label="Palette de commandes" onMouseDown={(event: MouseEvent) => event.stopPropagation()}>
            <div className="palette-search"><span>⌕</span><input autoFocus value={commandQuery} onChange={(event) => setCommandQuery(event.target.value)} placeholder="Naviguer vers une section..." /></div>
            <div className="commands">{commandItems.map((command) => <button key={command.action} onClick={() => runCommand(command.action)}><span>{command.title}</span><kbd>{command.key}</kbd></button>)}</div>
          </section>
        </div>
      )}

      {terminalOpen && (
        <section className="terminal glass" aria-label="Terminal interactif">
          <header><span /><span /><span /><strong>mohamed-portfolio</strong><button aria-label="Fermer" onClick={() => setTerminalOpen(false)}>x</button></header>
          <div id="terminal-output">{terminalLines.map((line, index) => <p key={`${index}-${line}`}>{line}</p>)}</div>
          <form onSubmit={submitTerminal}><label>visitor@med:~$</label><input value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} autoFocus autoComplete="off" spellCheck={false} /></form>
        </section>
      )}
    </>
  );
}
