import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const portrait = await readFile(join(process.cwd(), "src/app/portrait.png"));
  const src = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f2c128" }}>
        <img src={src} width={180} height={180} alt="" />
      </div>
    ),
    size,
  );
}
