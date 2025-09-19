// app/api/og/route.ts
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") || "Player";
    const score = searchParams.get("score") || "0";

    // optional: clamp or sanitize values here

    const width = 1200;
    const height = 630;

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
            padding: "56px",
            boxSizing: "border-box",
            background:
              "linear-gradient(180deg, rgba(75,130,75,1) 0%, rgba(66,100,66,1) 100%)",
            color: "#EBECD0",
            fontFamily: 'Inter, Roboto, -apple-system, "Segoe UI", sans-serif',
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 36, fontWeight: 700 }}>Chess Puzzles</span>
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}>
            </div>
          </div>

          {/* Center block */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginTop: 12,
            marginBottom: 12,
          }}>
            <div style={{
              width: 320,
              height: 320,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.08)",
              borderRadius: 20,
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            }}>
              {/* big score */}
              <span style={{ fontSize: 96, fontWeight: 900 }}>{score}</span>
            </div>

            <div style={{ fontSize: 26, opacity: 0.95 }}>
              {username}
            </div>
          </div>

          {/* footer */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(235,236,208,0.9)",
            fontSize: 16,
          }}>
            <span>— {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      ),
      {
        width,
        height,
      }
    );
  } catch (err) {
    console.error(err);
    return new Response("Failed to generate image", { status: 500 });
  }
}
