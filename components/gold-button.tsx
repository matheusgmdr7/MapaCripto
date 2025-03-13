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
}

export default function GoldButton({ children, className, size = "default", onClick }: GoldButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

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
          className,
        )}
        size={size}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}

