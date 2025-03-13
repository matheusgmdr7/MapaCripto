import { ImageResponse } from "next/og"

// Tamanho da imagem: 180x180 pixels
export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 150,
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

