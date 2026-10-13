import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./og-font";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** PNG favicon for browsers that ignore SVG icons (Safari). Black square, yellow J. */
export default async function Icon() {
  const bold = await loadGoogleFont("Geist", 700);
  const fonts = bold ? [{ name: "Geist", data: bold, weight: 700 as const, style: "normal" as const }] : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0d",
          borderRadius: 14,
          color: "#f2c128",
          fontFamily: fonts.length ? "Geist" : "sans-serif",
          fontSize: 44,
          fontWeight: 700,
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        J
      </div>
    ),
    { ...size, fonts },
  );
}
