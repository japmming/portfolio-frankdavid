import { ImageResponse } from "next/og";

export const alt = "Frank Chávez Marchena — Geomática & SIG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const tick = { position: "absolute", width: 28, height: 28, borderColor: "#f2713c", borderStyle: "solid", borderWidth: 0 } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e14",
          color: "#e9e2d3",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "monospace", fontSize: 24, letterSpacing: 8, textTransform: "uppercase", color: "#6b6453" }}>
          <span>Geomática · SIG · RPAS</span>
          <span>12°02′S · 77°05′W</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 90, fontWeight: 800, letterSpacing: -2 }}>
            FRANK CHÁVEZ
          </div>
          <div style={{ display: "flex", fontSize: 90, fontWeight: 700, fontStyle: "italic", color: "#f2713c" }}>
            marchena.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#a9a18d", letterSpacing: 4 }}>
            MAPAS · GEOVISORES · DASHBOARDS
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#6b6453", fontFamily: "monospace", letterSpacing: 6 }}>
          REF. ATLAS NOCTURNO / 2026
        </div>

        <div style={{ ...tick, top: 40, left: 40, borderTopWidth: 3, borderLeftWidth: 3 }} />
        <div style={{ ...tick, top: 40, right: 40, borderTopWidth: 3, borderRightWidth: 3 }} />
        <div style={{ ...tick, bottom: 40, left: 40, borderBottomWidth: 3, borderLeftWidth: 3 }} />
        <div style={{ ...tick, bottom: 40, right: 40, borderBottomWidth: 3, borderRightWidth: 3 }} />
      </div>
    ),
    size,
  );
}