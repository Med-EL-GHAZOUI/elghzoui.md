import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Mohamed EL-GHAZOUI | Full-Stack Developer";
const origin = siteUrl();

export const metadata: Metadata = {
  title,
  description: profile.siteDescription,
  ...(origin && { metadataBase: new URL(origin), alternates: { canonical: "/" } }),
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    "Full-Stack Developer",
    "PFE internship",
    "Spring Boot",
    "Java",
    "Angular",
    "NestJS",
    ".NET",
    "EMSI",
    "Rabat",
  ],
  openGraph: {
    title,
    description: profile.siteDescription,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    ...(origin && { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }] }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.siteDescription,
    ...(origin && { images: ["/og-image.png"] }),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
