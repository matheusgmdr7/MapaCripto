"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { BookOpen, Shield, Wallet, TrendingUp, AlertTriangle } from "lucide-react"

const modules = [
  {
    title: "Introdução ao mercado cripto",
    description: "Entenda os fundamentos e como funciona o mercado de criptomoedas",
    icon: BookOpen,
  },
  {
    title: "Como funciona o movimento dos preços",
    description: "Entenda o porque este mercado é tão volátil e como você pode se beneficiar disso",
    icon: TrendingUp,
  },
  {
    title: "Os dois caminhos para começar a ganhar",
    description: "Aprenda a maneira com menos e mais esforço de começar a ganhar no mercado",
    icon: Wallet,
  },
  {
    title: "Como montar a sua carteira de ativos",
    description: "Aprenda a fazer a escolha certa de criptomoedas que podem valorizar muito ao longo do tempo",
    icon: Shield,
  },
  {
    title: "Estratégia para ganhar em dolar pelo o celular",
    description:
      "Aprenda a usar as ferramentas do mercado futuro para comprar ou vender e ter lucros em dolar em minutos",
    icon: TrendingUp,
  },
  {
    title: "Entenda como funciona as Exchanges",
    description: "Aprenda a usar as exchanges da maneira certa",
    icon: Wallet,
  },
  {
    title: "Aprenda a usar ColdWallets",
    description: "Entenda como se blindar de riscos e ter total controlo dos seus ativos usando ColdWalltes",
    icon: Shield,
  },
  {
    title: "Como evitar golpes e armadilhas",
    description: "Identifique e evite as fraudes mais comuns no mercado cripto",
    icon: AlertTriangle,
  },
]

export default function ModuleMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative">
      {/* Path line */}
      <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700]/80 via-[#FFD700] to-[#FFD700]/20 z-0"></div>

      <div className="space-y-6 sm:space-y-8 md:space-y-16 relative z-10">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-3 sm:gap-4 md:gap-6"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-[#0A0A0A] border-2 border-[#FFD700] flex items-center justify-center relative z-10"
              >
                <module.icon className="w-2 h-2 sm:w-3 sm:h-3 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#FFD700]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-[#FFD700]/20 blur-xl z-0"
              />
            </div>

            <div className="flex-1 bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-3 sm:p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#FFD700] mb-1 md:mb-2">
                Módulo {index + 1}: {module.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80">{module.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

