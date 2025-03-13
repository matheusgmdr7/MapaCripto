import { ImageResponse } from "next/og"

// Tamanho da imagem: 192x192 pixels
export const size = {
  width: 192,
  height: 192,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 160,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "#FFD700",
        border: "6px solid #FFD700",
        overflow: "hidden",
      }}
    >
      <div style={{ marginTop: "-10px" }}>₿</div>
    </div>,
    {
      ...size,
    },
  )
}

