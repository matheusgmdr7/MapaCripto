"use client"

import { useEffect } from "react"

interface PageTitleProps {
  title?: string
}

export default function PageTitle({ title = "MapaCripto" }: PageTitleProps) {
  useEffect(() => {
    // Atualiza o título da página
    document.title = title

    // Limpa ao desmontar
    return () => {
      document.title = "MapaCripto"
    }
  }, [title])

  return null
}
