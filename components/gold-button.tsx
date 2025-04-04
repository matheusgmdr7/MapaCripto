"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GoldButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg"
  onClick?: () => void
  href?: string
}

export default function GoldButton({ children, className, size = "default", onClick, href }: GoldButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (href) {
      window.location.href = href
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className="relative">
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-[#FFD700]/30 blur-xl rounded-full"
        />
      )}
      <Button
        className={cn(
          "relative font-bold tracking-wide",
          "bg-gradient-to-r from-[#FFD700] to-[#FFC107] hover:from-[#FFC107] hover:to-[#FFD700]",
          "text-black border-0 shadow-lg",
          "transition-all duration-300",
          "rounded-full",
          "px-3 sm:px-4 md:px-6",
          "text-xs sm:text-sm md:text-base",
          "h-auto min-h-[2.5rem] md:min-h-[2.75rem]",
          className,
        )}
        size={size}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {children}
      </Button>
    </div>
  )
}

