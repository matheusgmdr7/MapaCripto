"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Imagens garantidas que funcionam no ambiente Next.js
const FALLBACK_IMAGE = "/placeholder.svg?height=400&width=600"

const news = [
  {
    title: "EUA Criam Reserva Estratégica de Bitcoin",
    image: "https://i.ibb.co/BVmL4ck7/8.png",
    source: "Financial Times",
  },
  {
    title: "Méliuz aloca 10% do caixa em Bitcoin",
    image: "https://i.ibb.co/LXDqdq6d/7.png",
    source: "Valor Econômico",
  },
  {
    title: "ETFs de Bitcoin batem recorde de captação",
    image: "https://i.ibb.co/fGVJ6Hx0/6.png",
    source: "Bloomberg",
  },
]

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false])

  const next = () => {
    setCurrent((current + 1) % news.length)
  }

  const prev = () => {
    setCurrent((current - 1 + news.length) % news.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  // Pré-carregamento das imagens para garantir que elas apareçam
  useEffect(() => {
    const preloadImages = () => {
      news.forEach((item, index) => {
        const img = new Image()
        img.src = item.image
        img.onload = () => {
          setImagesLoaded((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
          console.log(`Imagem ${index + 1} carregada com sucesso:`, item.image)
        }
        img.onerror = () => {
          console.error(`Erro ao carregar imagem ${index + 1}:`, item.image)
          // Se houver erro, tentamos carregar a imagem de fallback
          const fallbackImg = new Image()
          fallbackImg.src = FALLBACK_IMAGE
          fallbackImg.onload = () => {
            setImagesLoaded((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            console.log(`Imagem de fallback ${index + 1} carregada com sucesso`)
          }
        }
      })
    }

    preloadImages()
  }, [])

  return (
    <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={news[current].image || "/placeholder.svg"}
              alt={news[current].title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                console.error(`Erro ao exibir imagem ${current + 1}, usando fallback`)
                e.currentTarget.src = FALLBACK_IMAGE
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Indicador de carregamento caso a imagem não tenha sido carregada ainda */}
            {!imagesLoaded[current] && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <div className="w-8 h-8 border-4 border-[#FFD700]/30 border-t-[#FFD700] rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[#0A0A0A]/80 backdrop-blur-sm p-4 rounded-xl border border-[#FFD700]/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{news[current].title}</h3>
            <p className="text-[#FFD700] text-sm">Fonte: {news[current].source}</p>
          </div>
        </motion.div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-[#FFD700]/20 text-[#FFD700] hover:bg-black/70 hover:text-[#FFD700] rounded-full"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 border-[#FFD700]/20 text-[#FFD700] hover:bg-black/70 hover:text-[#FFD700] rounded-full"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
        {news.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-[#FFD700] w-4" : "bg-white/30"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          />
        ))}
      </div>
    </div>
  )
}

