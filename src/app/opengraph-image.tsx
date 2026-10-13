import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { loadGoogleFont } from "./og-font";

export const runtime = "nodejs";
export const alt = "Jev, Full Stack Web Developer, Brighton UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(join(process.cwd(), "src/app/portrait.png"));
  const src = `data:image/png;base64,${portrait.toString("base64")}`;
  const [bold, regular] = await Promise.all([loadGoogleFont("Geist", 700), loadGoogleFont("Geist", 400)]);
  const fonts = [
    ...(bold ? [{ name: "Geist", data: bold, weight: 700 as const, style: "normal" as const }] : []),
    ...(regular ? [{ name: "Geist", data: regular, weight: 400 as const, style: "normal" as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
          background: "#0d0d0d",
          color: "#ffffff",
          fontFamily: fonts.length ? "Geist" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: -120,
              left: -120,
              width: 560,
              height: 560,
              borderRadius: 9999,
              background:
                "radial-gradient(circle, rgba(242,193,40,0.22) 0%, rgba(13,13,13,0) 70%)",
            }}
          />
          <img
            src={src}
            width={320}
            height={320}
            alt=""
            style={{ borderRadius: 9999, border: "3px solid rgba(242,193,40,0.5)" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>Jev</div>
          <div style={{ fontSize: 42, marginTop: 20 }}>Full Stack Web Developer</div>
          <div style={{ fontSize: 30, marginTop: 12, color: "rgba(255,255,255,0.6)" }}>
            Brighton, UK · jev.codes
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
