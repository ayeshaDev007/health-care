import { ImageResponse } from "next/og";
import { SITE } from "./lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(150deg, #2e5c4b 0%, #234a3c 100%)",
          color: "#fbf8f2",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 600 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#fbf8f2",
              color: "#2e5c4b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          Synergy Wellness
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900, fontWeight: 500 }}>
            Care that brings your mind and body back into balance.
          </div>
          <div style={{ fontSize: 30, color: "#d6e6dc", fontFamily: "sans-serif" }}>
            Integrative mental health therapy · South Florida
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
