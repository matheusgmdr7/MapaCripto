"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Check, X, ChevronDown } from 'lucide-react'
import NewsCarousel from "@/components/news-carousel"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModuleMap from "@/components/module-map"
import GoldButton from "@/components/gold-button"
import CountdownTimer from "@/components/countdown-timer"
import PageTitle from "@/components/page-title"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const headerRef = useRef<HTMLDivElement>(null)

  // Show fixed CTA after scrolling past the header
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.offsetTop + headerRef.current.offsetHeight
        setIsVisible(window.scrollY > headerBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">
      <PageTitle title="MapaCripto - Seu guia para o mercado de criptomoedas" />
      
      {/* Fixed CTA Button */}
      {isVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-[#FFD700]/20 py-3 px-4 flex justify-between items-center backdrop-blur-sm">
          <div className="text-xs md:text-base font-medium text-[#FFD700] truncate mr-2">
            A Revolução Cripto Espera Por Você
          </div>
          <GoldButton size="sm" className="whitespace-nowrap text-xs md:text-sm">
            QUERO INVESTIR
          </GoldButton>
        </div>
      )}

      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 md:py-20 lg:py-32 overflow-hidden"
      >
        {/* Modern background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(#FFD700 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: "linear-gradient(45deg, transparent 48%, #FFD700 49%, #FFD700 51%, transparent 52%)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-xs md:text-sm font-medium mb-4 md:mb-6 border border-[#FFD700]/20">
              MÉTODO EXCLUSIVO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight"
          >
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107] drop-shadow-[0_0_5px_rgba(255,215,0,0.2)]"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              A Revolução Ainda Está no Começo: Descubra Como Entrar do Jeito Certo no Mercado Cripto
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white/80 max-w-3xl mx-auto"
          >
            O único método comprovado e validado por mais de 1.357 pessoas que estão ganhando muito por terem entrado no
            momento certo, mesmo sem muito conhecimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 md:mt-12"
          >
            <div className="mb-4 md:mb-6">
              <div className="mb-4 inline-block">
                <p className="text-[#FFD700] font-bold mb-2 tracking-wide text-sm md:text-base">
                  ATENÇÃO: Últimas vagas disponíveis!
                </p>
                <CountdownTimer />
                <p className="text-white/70 text-xs md:text-sm mt-2">
                  Após este período, o valor do investimento aumentará em 50%.
                </p>
              </div>
            </div>

            <GoldButton size="lg" className="text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 whitespace-normal">
              <span className="block sm:hidden">QUERO INVESTIR EM CRIPTO!</span>
              <span className="hidden sm:block">QUERO APRENDER A INVESTIR EM CRIPTO!</span>
            </GoldButton>

            <div className="mt-4 flex justify-center items-center gap-2 text-white/70 text-xs md:text-sm">
              <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">🔒</div>
              <p>Pagamento 100% seguro • Garantia de 7 dias</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs md:text-sm text-white/60 mb-2">Descubra mais</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]/70" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Resto do código existente... */}
    </main>
  )
}
