# Mohamed EL-GHAZOUI — Portfolio

Interactive 3D developer portfolio for Mohamed EL-GHAZOUI, Computer Engineering student at EMSI (Rabat), seeking a six-month PFE internship starting February 2027.

Visual identity: **Premium Digital Engineer** — dark navy, off-white type, electric cyan and subtle violet accents, fine grid details, and one purposeful 3D hero scene.

## Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19, TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS 3 with design tokens (colors, fonts, radii) in `tailwind.config.ts` and CSS variables |
| 3D | three.js through React Three Fiber v9 (raw primitives, no extra helper library) |
| Motion | Framer Motion for scroll reveals, nav indicator and scroll progress; CSS keyframes for the hero entrance |
| Icons | Lucide React |

React 19 is required: Next 15's App Router bundles React 19 internally, and React Three Fiber v8 (React 18) crashes against it.
GSAP and Drei were intentionally **not** added: nothing here needs a GSAP timeline, and the scene uses no Drei helpers.

## Setup

Requires Node.js 18.18+ (tested on Node 22).

```bash
npm install
npm run dev        # http://localhost:3000
```

### Commands

```bash
npm run dev        # development server
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
npx tsc --noEmit   # strict type check
npm run build      # production build
npm run start      # serve the production build
```

### Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Enables the contact form (delivered via [Web3Forms](https://web3forms.com)). If empty, the form is hidden and only the `mailto:` contact remains. The key is public by design. |
| `NEXT_PUBLIC_SITE_URL` | Production origin (e.g. `https://example.com`). Enables canonical URL, `metadataBase`, sitemap entries and Open Graph image. Leave empty until the domain is confirmed. |

## Deployment

The site is fully static. On Vercel: import the repository, add the two environment variables above, deploy. Any Node host works with `npm run build && npm run start`.
After deploying, set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy so the canonical URL, sitemap and social preview image are generated.

## Project structure

```text
app/                    layout, page, globals.css, sitemap.ts, robots.ts, icon.svg
components/
  layout/               Navbar, Footer, ScrollProgress, BackToTop
  sections/             Hero, About, Experience, Projects, Skills, Education, Contact, ContactForm
  projects/             ProjectVisual (SVG artwork), ProjectModal (native <dialog>)
  three/                HeroScene (R3F), HeroVisual (lazy loader + fallback), StaticHeroArt
  ui/                   Button, Reveal, SectionHeading
data/                   profile, experience, projects, skills, education  <- edit content here
hooks/                  useActiveSection, useSceneCapability
types/                  shared types
lib/                    utilities
public/assets/          CV PDF and portrait
public/og-image.png     static social preview (1200x630)
```

All copy lives in `data/`, separate from components, so a French version can be added later by swapping or localising those modules.

## 3D, performance and accessibility notes

- The 3D scene (core, connected nodes, particles, pointer parallax) is loaded with `next/dynamic` (`ssr: false`) only when WebGL is available and motion is allowed. three.js is not in the initial bundle.
- Fallbacks: reduced-motion users, devices without WebGL, and render errors all keep the static SVG illustration. The server render and first client render are identical, so there are no hydration mismatches.
- Mobile (<768px) uses a lighter scene: fewer nodes, no particles, no pointer parallax, lower pixel ratio.
- Rendering pauses while the hero is off-screen. The canvas never captures pointer events.
- `MotionConfig reducedMotion="user"` plus CSS media queries disable motion for reduced-motion users.
- Skip link, visible focus rings, `aria-current` on navigation, mobile menu closes with Escape, native `<dialog>` for project details (focus trap, Escape, focus return), `aria-live` form status.
- Skills are tagged by evidence (Internship / Project / Certified / Knowledge). There are no percentage bars.

## Content status — please confirm

- **CV PDF is outdated.** `public/assets/CV-EL-GHAZOUI-Mohamed.pdf` still describes Mohamed as a second-year student with no internships and no Java SE 17 certification. The download works, but replace the file (same name) with the current CV before sharing the site.
- **No project repositories or live demos are linked.** The public GitHub account lists `PlantCare-AI`, `StudyHub-AI` and a portfolio repo, but none of the four featured projects. Add `repoUrl` / `demoUrl` in `data/projects.ts` only when genuine links exist.
- **Project "technical focus" and "functionality" lists** only restate what the brief and CV state. Add further implementation detail only after confirming it.
- **Certification verification links** (Oracle, Google, IBM) are not included; add `verifyUrl` in `data/education.ts` if you have real ones.
- **Spring Boot / JPA / Hibernate** are shown as technical knowledge, not as internship or project experience, because none was listed in the supplied experience.
- Contact details exposed on the site are limited to email, LinkedIn, GitHub and city. The phone number and street address in the old site's structured data were removed.

## Files

Created: `data/*`, `types/index.ts`, `lib/utils.ts`, `hooks/*`, `components/{layout,sections,projects,three,ui}/*`, `components/providers.tsx`, `app/{sitemap.ts,robots.ts,icon.svg}`, `public/og-image.png`, `tailwind.config.ts`, `postcss.config.mjs`, `.eslintrc.json`, `.claude/launch.json`.
Rewritten: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `README.md`, `tsconfig.json`, `next.config.mjs`, `.env.example`, `package.json`.

Legacy files from the previous French static prototype are still present but unused (`components/Portfolio.tsx` is excluded from type-check and lint): `index.html`, `app.js`, `styles.css`, `components/Portfolio.tsx`, `components/ContactForm.tsx`, and the root `assets/` folder (a duplicate of `public/assets/`). They can be deleted safely.
