import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  return new ImageResponse(
    <div
      style={{
        fontSize: 32,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "#FFD700",
        border: "1px solid #FFD700",
        overflow: "hidden",
      }}
    >
      <div style={{ marginTop: "-2px" }}>₿</div>
    </div>,
    {
      width: 32,
      height: 32,
    },
  )
}

