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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #2e5c4b 0%, #234a3c 100%)",
          color: "#fbf8f2",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#fbf8f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e5c4b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Synergy Wellness
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 960,
              letterSpacing: "-0.02em",
            }}
          >
            Care that brings your mind and body back into balance.
          </div>
          <div style={{ fontSize: 30, color: "#d6e6dc" }}>
            Integrative mental health therapy · Telehealth &amp; in-person · South
            Florida
          </div>
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: 16 }}>
          {["HIPAA-compliant", "Anxiety · Depression · Trauma · ADHD", "Free initial screening"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 22,
                  color: "#eaf3ee",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  padding: "10px 22px",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
