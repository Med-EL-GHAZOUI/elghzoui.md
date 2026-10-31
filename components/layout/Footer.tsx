import { profile } from "@/data/profile";

export const Footer = () => (
  <footer className="border-t border-line py-8">
    <div className="container-page flex flex-col gap-2 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs">Designed and built with Next.js, React Three Fiber and Tailwind CSS.</p>
    </div>
  </footer>
);
