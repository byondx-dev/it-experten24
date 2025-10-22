# Repository Guide

## Overview
- **Project**: IT-Experten 24 website built with Astro
- **Purpose**: Marketing site, blog, SEO features for IT services

## Tech Stack
- **Runtime**: Node.js ≥ 18
- **Framework**: Astro 5
- **Styling**: Tailwind CSS
- **Content**: Astro Content Collections for blog posts
- **Assets**: `astro:assets`, dynamic OG images via Satori + Resvg

## Scripts
1. `npm run dev` – start local development server at `http://localhost:4321`
2. `npm run build` – create production build in `dist/`
3. `npm run preview` – preview production build locally
4. `npm run lint` – run Astro type and sanity checks

## Structure Highlights
- `src/pages` – routed pages including marketing and blog
- `src/components` – shared UI components (Header, Footer, etc.)
- `src/layouts` – layout wrappers such as `BaseLayout`
- `src/content/blog` – Markdown blog entries with frontmatter metadata
- `src/pages/api/og.ts` – dynamic Open Graph image generation
- `public/` – static assets, redirects, robots configuration

## Coding Guidelines
- Prefer readable, well-structured Astro components with clear semantics
- Leverage Tailwind utility classes and respect existing design tokens
- Reuse components from `src/components` rather than duplicating markup
- Keep blog metadata consistent (`publishedAt`, `updatedAt`, `excerpt`, `heroImage`)
- When adding client-side interactivity, include the appropriate `client:*` directive

## Deployment Notes
- Target platform: Netlify
- Build command: `npm run build`
- Publish directory: `dist/`
- Use `netlify deploy --build` for staging and `netlify deploy --prod` for production