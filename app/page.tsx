"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Check, X, ChevronDown } from "lucide-react"
import NewsCarousel from "@/components/news-carousel"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ModuleMap from "@/components/module-map"
import GoldButton from "@/components/gold-button"
import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const headerRef = useRef<HTMLDivElement>(null)
  const pricingSectionRef = useRef<HTMLDivElement>(null)

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

  // Função para rolar até a seção de preços
  const scrollToPricing = () => {
    pricingSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Fixed CTA Button */}
      {isVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-[#FFD700]/20 py-3 px-4 flex justify-between items-center backdrop-blur-sm">
          <div className="text-xs md:text-base font-medium text-[#FFD700] truncate mr-2">
            A Revolução Cripto Espera Por Você
          </div>
          <GoldButton size="sm" className="whitespace-nowrap text-xs md:text-sm" onClick={scrollToPricing}>
            QUERO INVESTIR
          </GoldButton>
        </div>
      )}

      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center text-center px-3 sm:px-4 py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
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
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight"
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
            <div className="mb-4 md:mb-6"></div>

            <GoldButton
              size="lg"
              className="text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 whitespace-normal"
              onClick={scrollToPricing}
            >
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

      {/* Pain Points Section */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 bg-[#0A0A0A] relative overflow-hidden border border-[#FFD700]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent"></div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
                Você se identifica com alguma dessas situações?
              </span>
            </motion.h2>

            <div className="space-y-4 md:space-y-6">
              {[
                "Você sente que está de fora da maior revolução financeira da história?",
                "Já viu pessoas ganhando dinheiro com criptomoedas, mas acha tudo muito complicado?",
                "Não tem tempo para estudar e aprender do zero?",
                "Tem medo de perder dinheiro ou cair em golpes?",
              ].map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="min-w-5 h-5 md:min-w-6 md:h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-[#FFD700]">•</span>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl font-medium">{question}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 md:mt-10 text-center"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFD700]">
                ➡ Se você respondeu SIM para alguma dessas perguntas, então este é o método certo para você.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
              Por Que Agora É o Momento Perfeito?
            </span>
          </motion.h2>

          <div className="mb-10 md:mb-16">
            <NewsCarousel />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "O mercado cripto ainda está no começo",
              "Os ciclos de alta sempre voltam",
              "Você não precisa ser um expert",
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="min-w-5 h-5 md:min-w-6 md:h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFD700]" />
                  </div>
                  <p className="text-base md:text-lg font-medium">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
              VOCÊ PRECISA ENTENDER O QUE É:
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Buy and Hold Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-5 md:p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="10" y="40" width="15" height="40" fill="#FFD700" opacity="0.3" />
                  <rect x="30" y="30" width="15" height="50" fill="#FFD700" opacity="0.5" />
                  <rect x="50" y="20" width="15" height="60" fill="#FFD700" opacity="0.7" />
                  <rect x="70" y="10" width="15" height="70" fill="#FFD700" opacity="0.9" />
                  <path d="M5,80 L95,80" stroke="#FFD700" strokeWidth="2" />
                  <path d="M10,85 L10,35" stroke="#FFD700" strokeWidth="2" />
                  <path d="M10,35 L85,35" stroke="#FFD700" strokeDasharray="4" strokeWidth="1" />
                  <circle cx="85" cy="35" r="5" fill="#FFD700" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2 md:mb-3">BUY AND HOLD</h3>
              <p className="text-sm md:text-base text-white/80">
                Estratégia de construção de carteira, onde você compra criptomoedas de qualidade e na quantidade certa,
                visando a supervalorização a longo prazo. Ideal para quem busca crescimento sustentável e não quer se
                preocupar com o dia a dia do mercado.
              </p>
            </motion.div>

            {/* Token Launches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-5 md:p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="30" fill="#FFD700" opacity="0.2" />
                  <circle cx="50" cy="50" r="20" fill="#FFD700" opacity="0.4" />
                  <circle cx="50" cy="50" r="10" fill="#FFD700" opacity="0.8" />
                  <path d="M50,20 L50,5" stroke="#FFD700" strokeWidth="2" />
                  <path d="M50,80 L50,95" stroke="#FFD700" strokeWidth="2" />
                  <path d="M20,50 L5,50" stroke="#FFD700" strokeWidth="2" />
                  <path d="M80,50 L95,50" stroke="#FFD700" strokeWidth="2" />
                  <path d="M30,30 L20,20" stroke="#FFD700" strokeWidth="2" />
                  <path d="M70,30 L80,20" stroke="#FFD700" strokeWidth="2" />
                  <path d="M30,70 L20,80" stroke="#FFD700" strokeWidth="2" />
                  <path d="M70,70 L80,80" stroke="#FFD700" strokeWidth="2" />
                  <path d="M50,10 L55,20 L45,20 Z" fill="#FFD700" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2 md:mb-3">
                LANÇAMENTOS DE TOKENS EXPLOSIVOS
              </h3>
              <p className="text-sm md:text-base text-white/80">
                Aprenda a como Identificar e investir em novos tokens com potencial de crescimento exponencial. Esta
                estratégia, pode gerar retornos impressionantes quando você encontra projetos promissores antes da
                maioria.
              </p>
            </motion.div>

            {/* Futures Market */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-5 md:p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10,50 C10,50 30,20 50,50 C70,80 90,50 90,50" stroke="#FFD700" strokeWidth="2" fill="none" />
                  <path d="M10,80 L90,80" stroke="#FFD700" strokeWidth="2" />
                  <path d="M10,20 L10,80" stroke="#FFD700" strokeWidth="2" />
                  <circle cx="30" cy="35" r="5" fill="#FFD700" opacity="0.7" />
                  <circle cx="50" cy="50" r="5" fill="#FFD700" opacity="0.7" />
                  <circle cx="70" cy="35" r="5" fill="#FFD700" opacity="0.7" />
                  <path d="M25,35 L35,35" stroke="#FFD700" strokeWidth="1" />
                  <path d="M30,30 L30,40" stroke="#FFD700" strokeWidth="1" />
                  <path d="M45,50 L55,50" stroke="#FFD700" strokeWidth="1" />
                  <path d="M65,35 L75,35" stroke="#FFD700" strokeWidth="1" />
                  <text x="15" y="25" fill="#FFD700" fontSize="8">
                    LONG
                  </text>
                  <text x="75" y="25" fill="#FFD700" fontSize="8">
                    SHORT
                  </text>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2 md:mb-3">OPERAÇÃO NO MERCADO FUTUROS</h3>
              <p className="text-sm md:text-base text-white/80">
                Negociar contratos futuros permite alavancar suas posições e lucrar tanto em mercados de alta quanto de
                baixa, vendendo ou comprando. Aprenda a usar as ferramentas do mercado a seu favor, para saber ganhar em
                todos os momentos.
              </p>
            </motion.div>

            {/* Leveraging in Bull/Bear Markets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-5 md:p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10,80 L90,80" stroke="#FFD700" strokeWidth="2" />
                  <path d="M10,20 L10,80" stroke="#FFD700" strokeWidth="2" />
                  <path d="M10,50 L90,50" stroke="#FFD700" strokeWidth="1" strokeDasharray="4" />
                  <path d="M10,65 L90,20" stroke="#FFD700" strokeWidth="3" />
                  <path d="M10,35 L90,80" stroke="#FFD700" strokeWidth="3" opacity="0.5" />
                  <polygon points="85,15 95,20 85,25" fill="#FFD700" />
                  <polygon points="85,75 95,80 85,85" fill="#FFD700" opacity="0.5" />
                  <circle cx="50" cy="42.5" r="5" fill="#FFD700" />
                  <circle cx="50" cy="57.5" r="5" fill="#FFD700" opacity="0.5" />
                  <text x="15" y="30" fill="#FFD700" fontSize="8">
                    BULL
                  </text>
                  <text x="15" y="75" fill="#FFD700" fontSize="8">
                    BEAR
                  </text>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2 md:mb-3">FAÇA MUITO COM POUCO</h3>
              <p className="text-sm md:text-base text-white/80">
                Utilizando estratégias de alavancagem, é possível maximizar seus ganhos com um capital inicial reduzido.
                Aprenda a identificar tendências e usar ferramentas financeiras para multiplicar seus resultados,
                independentemente da direção do mercado.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 md:mt-12 text-center"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Nosso método ensina todas essas estratégias de forma simples e prática, para que você possa escolher a que
              melhor se adapta ao seu perfil.
            </p>
            <GoldButton
              size="lg"
              className="text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 whitespace-normal"
              onClick={scrollToPricing}
            >
              <span className="block sm:hidden">DOMINAR ESTRATÉGIAS</span>
              <span className="hidden sm:block">QUERO DOMINAR ESSAS ESTRATÉGIAS</span>
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
              O Que Você Vai Aprender
            </span>
          </motion.h2>

          <ModuleMap />

          <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Checklist de Segurança Cripto", icon: "🔒" },
              { title: "Comunidade Exclusiva", icon: "👥" },
              { title: "Aulas ao vivo", icon: "🎬" },
              { title: "Suporte pelo WhatsApp", icon: "📱" },
            ].map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#FFD700]/20 rounded-xl p-4 md:p-6 bg-[#0A0A0A]"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="text-2xl md:text-3xl">{bonus.icon}</div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold text-[#FFD700]">BÔNUS {index + 1}</h3>
                    <p className="text-sm md:text-lg text-white/80">{bonus.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
              O Que Nossos Alunos Estão Dizendo
            </span>
          </motion.h2>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
              Conheça Seu Mentor
            </span>
          </motion.h2>

          <div className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl p-5 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-xl overflow-hidden border-2 border-[#FFD700]/30 flex-shrink-0">
                <img
                  src="https://i.ibb.co/3mRWkPRf/Whats-App-Image-2025-04-04-at-14-55-23.jpg"
                  alt="Mentor de Criptomoedas"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-2 text-center md:text-left">
                  Rafael Marins
                </h3>
                <p className="text-white/60 mb-4 text-center md:text-left text-sm md:text-base">
                  Especialista em Criptomoedas & Investimentos Digitais
                </p>

                <div className="space-y-3 md:space-y-4 text-white/80 text-sm md:text-base">
                  <p>
                   Tive o prazer de conhecer o mercado através de um amigo que pegou em minhas mãos e mostrou-me o 
                    caminho para liberdade financeira e que hoje é meu sócio, grande investidor, entusiasta do mercado 
                    e que já ajudou mais de 2.367 pessoas a iniciarem sua jornada no mundo cripto de forma segura e lucrativa.
                  </p>
                  <p>
                    Tive o prazer de convidá-lo para fazer parte desse projeto incrível e passar para você informações exclusivas 
                    e valiosíssimas que podem mudar a sua vida.
                  </p>
                  <p>Sua metodologia combina estratégias de longo prazo e também oportunidades de curto prazo, ajudando alunos 
                    a alcançarem resultados consistentes no mercado de criptomoedas..</p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <p className="text-xl md:text-2xl font-bold text-[#FFD700]">1.000+</p>
                    <p className="text-xs md:text-sm text-white/70">Alunos</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg text-center">
                    <p className="text-xl md:text-2xl font-bold text-[#FFD700]">7+</p>
                    <p className="text-xs md:text-sm text-white/70">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Escolha É Sua Section - Movida para após o Mentor */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
                A Escolha É Sua
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-xl p-5 md:p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="min-w-5 h-5 md:min-w-6 md:h-6 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3 md:w-4 md:h-4 text-white/80" />
                </div>
                <p className="text-base md:text-lg font-medium">
                  Ficar parado, vendo os outros ganharem dinheiro enquanto você fica de fora
                </p>
              </div>
              <ul className="space-y-2 md:space-y-3 pl-8 md:pl-9">
                <li className="text-sm md:text-base text-white/70 list-disc">Perder oportunidades de investimento</li>
                <li className="text-sm md:text-base text-white/70 list-disc">Continuar com medo e dúvidas</li>
                <li className="text-sm md:text-base text-white/70 list-disc">Depender apenas da renda tradicional</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A0A0A] border border-[#FFD700]/20 rounded-xl p-5 md:p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 mb-3 md:mb-4">
                <div className="min-w-5 h-5 md:min-w-6 md:h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFD700]" />
                </div>
                <p className="text-base md:text-lg font-medium">
                  Entrar agora no mercado de forma segura e começar sua jornada rumo à liberdade financeira
                </p>
              </div>
              <ul className="space-y-2 md:space-y-3 pl-8 md:pl-9">
                <li className="text-sm md:text-base text-white/70 list-disc">Aprender de forma simples e direta</li>
                <li className="text-sm md:text-base text-white/70 list-disc">Investir com confiança e segurança</li>
                <li className="text-sm md:text-base text-white/70 list-disc">Fazer parte da revolução financeira</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div>
              <div className="mb-6 text-center">
                <p className="text-[#FFD700] font-bold mb-2 text-sm md:text-base">
                  ATENÇÃO: Últimas vagas disponíveis!
                </p>
                <CountdownTimer />
                <p className="text-white/70 text-xs md:text-sm mt-2">
                  Após este período, o valor do investimento aumentará em 50%.
                </p>
              </div>

              <GoldButton
                size="lg"
                className="text-xs sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 whitespace-normal"
                onClick={scrollToPricing}
              >
                <span className="block sm:hidden">QUERO INVESTIR EM CRIPTO!</span>
                <span className="hidden sm:block">QUERO APRENDER A INVESTIR EM CRIPTO!</span>
              </GoldButton>

              <div className="mt-4 flex justify-center items-center gap-2 text-white/70 text-xs md:text-sm">
                <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">🔒</div>
                <p>Pagamento 100% seguro • Garantia de 7 dias</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingSectionRef} className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#FFD700]/20 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 bg-[#0A0A0A] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD700]/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
                  Investimento Especial
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/80">Acesso vitalício a todo o conteúdo</p>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base md:text-lg text-white/60 line-through">De R$ 997,00</span>
                <span className="bg-[#FFD700]/20 text-[#FFD700] text-xs md:text-sm px-2 py-1 rounded-full">
                  60% OFF
                </span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#FFD700] mb-2">
                R$ 257,00
              </div>
              <p className="text-sm md:text-base text-white/80">ou 12x de R$ 25,70</p>
            </div>

            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-full">
                <div className="mb-6 text-center">
                  <p className="text-[#FFD700] font-bold mb-2 text-sm md:text-base">
                    ATENÇÃO: Últimas vagas disponíveis!
                  </p>
                  <CountdownTimer />
                  <p className="text-white/70 text-xs md:text-sm mt-2">
                    Após este período, o valor do investimento aumentará em 50%.
                  </p>
                </div>

                <GoldButton
                  size="lg"
                  className="text-xs sm:text-sm md:text-lg w-full py-2 sm:py-3 whitespace-normal"
                  href="https://pay.kirvano.com/faeaf14a-3f49-41a0-94a1-22757f4351e0"
                >
                  <span className="block sm:hidden">QUERO INVESTIR EM CRIPTO!</span>
                  <span className="hidden sm:block">QUERO APRENDER A INVESTIR EM CRIPTO!</span>
                </GoldButton>

                <div className="mt-4 flex justify-center items-center gap-2 text-white/70 text-xs md:text-sm">
                  <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">🔒</div>
                  <p>Pagamento 100% seguro • Garantia de 7 dias</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-20 px-3 sm:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />

        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFC107]">
              Perguntas Frequentes
            </span>
          </motion.h2>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                question: "Preciso ter conhecimento prévio sobre criptomoedas?",
                answer:
                  "Não, o curso foi desenvolvido para iniciantes. Começamos do zero e avançamos gradualmente, explicando todos os conceitos de forma clara e objetiva.",
              },
              {
                question: "Quanto dinheiro preciso para começar a investir?",
                answer:
                  "Você pode começar com qualquer valor. O curso ensina estratégias para diferentes perfis de investimento, desde R$ 100 até valores maiores. O importante é começar.",
              },
              {
                question: "Por quanto tempo terei acesso ao conteúdo?",
                answer:
                  "O acesso é vitalício! Uma vez que você adquira o curso, poderá acessá-lo sempre que quiser, incluindo todas as atualizações futuras.",
              },
              {
                question: "Como funciona a garantia de 7 dias?",
                answer:
                  "Se você não ficar satisfeito com o conteúdo por qualquer motivo, basta solicitar o reembolso em até 7 dias após a compra, e devolveremos 100% do seu dinheiro, sem perguntas.",
              },
              {
                question: "Terei suporte para tirar dúvidas?",
                answer:
                  "Sim! Além do conteúdo do curso, você terá acesso à nossa comunidade exclusiva onde poderá interagir com outros alunos e receber suporte direto do nosso time.",
              },
              {
                question: "Em quanto tempo verei resultados?",
                answer:
                  "Isso varia de acordo com seu comprometimento e capital inicial. Alguns alunos começam a ver resultados nas primeiras semanas, enquanto outros levam alguns meses para consolidar suas estratégias.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A0A] border border-[#FFD700]/10 rounded-xl overflow-hidden"
              >
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#FFD700] mb-2 md:mb-3">{faq.question}</h3>
                  <p className="text-sm md:text-base text-white/80">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 md:mt-12 text-center"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Ainda tem dúvidas? Entre em contato conosco pelo e-mail{" "}
              <span className="text-[#FFD700]">suporte@mapacripto.com.br</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t border-white/5">
        <div className="container max-w-4xl mx-auto px-4 text-center text-white/50 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Mapa do Tesouro Cripto. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não constitui aconselhamento financeiro. Investimentos envolvem riscos.</p>
        </div>
      </footer>
    </main>
  )
}

