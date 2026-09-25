import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* eslint-disable @next/next/no-img-element -- ImageResponse renders this local asset through Satori. */

export const alt = "ことばのリハビリを、もっと日常へ。失語症の自主練習・リハビリを支えるSTAMU Aphasia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public", "brand", "stamu-aphasia-wordmark.png"));
const logoSrc = Uint8Array.from(logoData).buffer;

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
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* @ts-expect-error ImageResponse supports ArrayBuffer sources for local images. */}
          <img src={logoSrc} width={584} height={220} alt="" />
        </div>
        <div style={{ display: "flex", marginTop: "36px", fontSize: "58px", fontWeight: 700, letterSpacing: "-2px" }}>
          ことばのリハビリを、もっと日常へ。
        </div>
        <div style={{ display: "flex", marginTop: "28px", color: "#48627f", fontSize: "29px" }}>
          失語症の自主練習・リハビリを支えるSTAMU Aphasia
        </div>
      </div>
    </div>,
    size,
  );
}
