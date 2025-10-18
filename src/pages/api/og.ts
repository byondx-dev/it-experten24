import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));

let fontRegular: ArrayBuffer | undefined;
let fontSemibold: ArrayBuffer | undefined;

async function loadFonts() {
  if (!fontRegular || !fontSemibold) {
    const fontsDir = join(__dirname, "../../..", "node_modules", "@fontsource", "inter", "files");
    fontRegular = await readFile(join(fontsDir, "inter-latin-400-normal.woff"));
    fontSemibold = await readFile(join(fontsDir, "inter-latin-600-normal.woff"));
  }

  return { fontRegular, fontSemibold };
}

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get("title")?.slice(0, 120) ?? "IT-Experten 24";
  const subtitle =
    url.searchParams.get("subtitle")?.slice(0, 160) ??
    "IT-Hilfe für München: Service, Schulung und Beratung für Privatkund:innen, Familien und Senior:innen.";

  const { fontRegular, fontSemibold } = await loadFonts();

  const markup = html`<div
    style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 72px;
      background: linear-gradient(135deg, rgba(46, 107, 230, 0.18), rgba(55, 178, 108, 0.18));
      color: #1E293B;
      font-family: 'Inter', sans-serif;
    "
  >
    <div style="display:flex; align-items:center; gap:16px;">
      <div
        style="
          width:72px;
          height:72px;
          border-radius:20px;
          background:#2E6BE6;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#FFFFFF;
          font-size:36px;
          font-weight:600;
        "
      >
        IT
      </div>
      <div>
        <div style="font-size:32px; font-weight:600;">IT-Experten 24</div>
        <div style="font-size:22px; opacity:0.7;">München & Umgebung</div>
      </div>
    </div>
    <div style="max-width:980px;">
      <h1
        style="
          font-size:60px;
          line-height:1.05;
          margin:0 0 28px 0;
          font-weight:600;
        "
      >
        ${title}
      </h1>
      <p style="font-size:28px; line-height:1.3; margin:0; font-weight:400;">
        ${subtitle}
      </p>
    </div>
    <div style="display:flex; gap:18px; font-size:24px;">
      <div
        style="
          background:#FFFFFF;
          color:#2E6BE6;
          padding:14px 24px;
          border-radius:16px;
          font-weight:600;
        "
      >
        Vor Ort & Fernwartung
      </div>
      <div
        style="
          background:rgba(255,255,255,0.85);
          color:#37B26C;
          padding:14px 24px;
          border-radius:16px;
          font-weight:600;
        "
      >
        Kompetent · Geduldig · Sicher
      </div>
    </div>
  </div>`;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontRegular!,
        style: "normal",
        weight: 400
      },
      {
        name: "Inter",
        data: fontSemibold!,
        style: "normal",
        weight: 600
      }
    ],
    background: "#F5F6F8"
  });

  const png = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200
    }
  }).render();

  return new Response(png.asPng(), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
};
