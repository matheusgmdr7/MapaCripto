"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "João S.",
    text: "Sempre quis entrar no mercado cripto, mas achava tudo complicado. Com esse guia, entendi tudo e já fiz meus primeiros investimentos!",
    avatar: "https://i.ibb.co/ZRcNmwJD/robert.png",
  },
  {
    name: "Camila M.",
    text: "Nunca pensei que poderia entrar no mercado de forma tão segura. Aprendi tudo o que precisava em poucos dias!",
    avatar: "https://i.ibb.co/0yZVy85Z/Captura-de-Tela-2025-03-13-a-s-02-06-20.png",
  },
  {
    name: "Ricardo P.",
    text: "Já tinha perdido dinheiro antes por não saber o que estava fazendo. Esse método me deu a confiança que eu precisava para voltar ao mercado.",
    avatar: "https://i.ibb.co/xKNM3f47/cristian.png",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="border border-[#FFD700]/10 bg-[#0A0A0A] backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#FFD700]/30 flex-shrink-0">
                <img
                  src={testimonials[current].avatar || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#FFD700]/30 mb-2 mx-auto md:mx-0" />
                <p className="text-base md:text-lg lg:text-xl mb-3 md:mb-4 italic text-white/90">
                  "{testimonials[current].text}"
                </p>
                <p className="font-bold text-[#FFD700]">{testimonials[current].name}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {testimonials.map((_, index) => (
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

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-[#0A0A0A] border-[#FFD700]/20 text-[#FFD700] hover:bg-black/70 hover:text-[#FFD700] rounded-full w-8 h-8 md:w-10 md:h-10"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="bg-[#0A0A0A] border-[#FFD700]/20 text-[#FFD700] hover:bg-black/70 hover:text-[#FFD700] rounded-full w-8 h-8 md:w-10 md:h-10"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>
    </div>
  )
}

