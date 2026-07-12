# Joylyn Rosa — Portfolio Website

A premium, production-ready personal portfolio built for Joylyn Rosa (SEO Content Writer & Virtual Assistant), based in Butuan, Caraga, Philippines.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** for animation
- **Lucide React** for icons
- **next-themes** for dark/light mode
- **Fontsource** self-hosted fonts (Playfair Display, Inter, JetBrains Mono) — no external Google Fonts request at build or runtime

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

The project builds to fully static pages (`○ Static` for every route) and has been verified to compile with **zero TypeScript errors and zero ESLint warnings**.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.
4. Deploy.

## Before Going Live

- **Resume**: replace `public/resume-joylyn-rosa.pdf` with the real resume file (the current one is a placeholder so the "Download Resume" button doesn't 404).
- **Email**: update the placeholder email in `lib/data.ts` (`site.email`) to the real inbox.
- **LinkedIn**: update `site.linkedin` in `lib/data.ts` with the real profile URL.
- **Domain**: update `siteUrl` in `app/layout.tsx`, and the base URLs in `app/sitemap.ts` / `app/robots.ts`, to the real production domain once one is chosen.
- **Portfolio projects**: `lib/data.ts` → `portfolio` array currently shows elegant "Project details will be added" placeholders per the brief. Swap in real case studies as they become available (add `description`, `link`, and an image if desired — the card component is ready to be extended).
- **Contact form**: the form currently opens the visitor's email client via a `mailto:` link with the message pre-filled (no backend required). To capture submissions directly, wire `components/Contact.tsx` to a form service (e.g. Formspree, Resend, or a serverless API route) instead of the `mailto:` handler.

## Project Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, Open Graph
  page.tsx           Assembles all sections
  globals.css        Design tokens (light + dark), utility classes
  robots.ts           Dynamic robots.txt
  sitemap.ts          Dynamic sitemap.xml
components/
  Navbar.tsx          Sticky nav, mobile menu, dark mode toggle, resume download
  Hero.tsx            Animated typing effect + gold monogram seal
  About.tsx
  Experience.tsx
  Education.tsx
  Skills.tsx
  Portfolio.tsx
  Services.tsx
  Testimonials.tsx
  Contact.tsx         Validated form + LinkedIn + email + location
  Footer.tsx
  ScrollProgress.tsx  Fixed gold progress bar
  BackToTop.tsx
  Loader.tsx          Brief entrance splash
  ThemeProvider.tsx
lib/
  data.ts             All editable content lives here
public/
  favicon.svg
  resume-joylyn-rosa.pdf   Placeholder — replace with the real file
```

## Design Notes

- **Palette**: white `#FFFFFF`, gold `#D4AF37`, ink `#111111`, light gray `#F5F5F5`, with a dedicated dark theme.
- **Type**: Playfair Display for display/headings, Inter for body copy, JetBrains Mono for eyebrows/labels — a deliberate editorial pairing that reads as a writer's site rather than a generic template.
- **Signature element**: the hero's circular gold "JR" seal, echoing a wax-seal/monogram motif appropriate for a writing-and-correspondence brand.
- All content in the About, Experience, Education, and Skills sections mirrors the information supplied in the brief exactly; the Portfolio and Testimonials sections use honest placeholders rather than invented clients, per the brief's instructions.
