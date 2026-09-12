import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* eslint-disable @next/next/no-img-element -- ImageResponse renders this local asset through Satori. */

export const alt = "ことばのリハビリを、もっと日常へ。失語症の自主練習・リハビリを支えるRe:Talk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconData = await readFile(join(process.cwd(), "src", "app", "icon.png"));
const iconSrc = Uint8Array.from(iconData).buffer;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "76px 88px",
        color: "#0b3b82",
        background: "linear-gradient(135deg, #f8fbff 0%, #eaf4ff 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "1024px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "42px", fontWeight: 700 }}>
          {/* @ts-expect-error ImageResponse supports ArrayBuffer sources for local images. */}
          <img src={iconSrc} width={72} height={72} alt="" />
          Re:Talk
        </div>
        <div style={{ display: "flex", marginTop: "64px", fontSize: "58px", fontWeight: 700, letterSpacing: "-2px" }}>
          ことばのリハビリを、もっと日常へ。
        </div>
        <div style={{ display: "flex", marginTop: "28px", color: "#48627f", fontSize: "29px" }}>
          失語症の自主練習・リハビリを支えるRe:Talk
        </div>
      </div>
    </div>,
    size,
  );
}
