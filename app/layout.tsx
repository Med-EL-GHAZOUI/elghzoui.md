import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed El-Ghazoui | Portfolio",
  description: "Portfolio de Mohamed El-Ghazoui, développeur Full-Stack et étudiant ingénieur à l'EMSI Rabat. Recherche un stage PFE de 6 mois.",
  openGraph: {
    title: "Mohamed El-Ghazoui | Développeur Full-Stack",
    description: "Stages, projets, compétences, certifications et parcours EMSI de Mohamed El-Ghazoui.",
    type: "profile"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="cyber">
      <body>{children}</body>
    </html>
  );
}
