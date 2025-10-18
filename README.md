# IT-Experten 24 – Astro Website

Modernes Astro-Frontend für **IT-Experten 24**, den IT-Dienstleister in München für Privatkund:innen, Senior:innen und Familien. Enthält marketing Seiten, Blog mittels Astro Content Collections sowie optimierte SEO-Features (JSON-LD, OG-Bilder, Sitemap).

## Voraussetzungen

- Node.js ≥ 18
- pnpm, npm oder yarn (Beispiele unten mit `npm`)

## Entwicklung

```bash
npm install
npm run dev
```

Lokale Entwicklungsumgebung ist anschließend unter `http://localhost:4321` erreichbar.

## Build & Preview

```bash
npm run build
npm run preview
```

Der Produktionsbuild landet im Verzeichnis `dist/` und kann mit `npm run preview` überprüft werden.

## Netlify Deployment

1. **Initialisieren**
   ```bash
   netlify init
   ```
   - Build Command: `npm run build`
   - Publish Directory: `dist`

2. **Deploy triggern**
   ```bash
   netlify deploy --build    # Staging/Vorschau
   netlify deploy --prod     # Live
   ```

## Inhalte & Struktur

- `src/pages` – Seitenstruktur (Startseite, Leistungen, Service-, Schulungs- und Beratungsunterseiten, Blog, Preise, Standort, Kontakt, Impressum, Datenschutz).
- `src/components` – wiederverwendbare UI-Bausteine (Hero, Header, Footer, FAQs, Testimonials etc.).
- `src/content/blog` – Markdown-Beiträge (Astro Content Collections) inkl. Metadaten.
- `src/pages/api/og.ts` – dynamische OG-Bilder auf Basis von Satori + Resvg.
- `public/` – statische Assets, optimierte Platzhalterbilder (WebP), Netlify Redirects und robots.txt.

## Skripte

- `npm run dev` – Entwicklungsserver
- `npm run build` – Produktionsbuild
- `npm run preview` – Produktionsbuild lokal ansehen
- `npm run lint` – Typ- und Astro-Checks

## Anpassung

Branding (Farben, Typografie) und Inhalte befinden sich zentral in Tailwind (`tailwind.config.mjs`), globalen Styles (`src/styles/global.css`) sowie den Komponenten in `src/components`. Blogposts können einfach als weitere Markdown-Dateien in `src/content/blog` ergänzt werden.
