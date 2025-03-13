"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  // Set the countdown for 48 hours from now
  const calculateEndTime = () => {
    if (typeof window === "undefined") return Date.now() + 48 * 60 * 60 * 1000

    const storedEndTime = localStorage.getItem("cryptoOfferEndTime")

    if (storedEndTime) {
      return Number.parseInt(storedEndTime)
    } else {
      // Set to 48 hours from now
      const endTime = Date.now() + 48 * 60 * 60 * 1000
      localStorage.setItem("cryptoOfferEndTime", endTime.toString())
      return endTime
    }
  }

  const [endTime] = useState(calculateEndTime)
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime - Date.now()

      if (difference <= 0) {
        // Reset the timer if it's expired
        localStorage.removeItem("cryptoOfferEndTime")
        window.location.reload()
        return
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then set up interval
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  return (
    <div className="flex justify-center">
      <div className="flex gap-2 md:gap-4">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#FFD700]">{formatTime(timeLeft.hours)}</div>
          <div className="text-xs text-white/70">horas</div>
        </div>

        <div className="flex items-center text-[#FFD700] text-2xl font-bold">:</div>

        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#FFD700]">{formatTime(timeLeft.minutes)}</div>
          <div className="text-xs text-white/70">minutos</div>
        </div>

        <div className="flex items-center text-[#FFD700] text-2xl font-bold">:</div>

        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-[#FFD700]">{formatTime(timeLeft.seconds)}</div>
          <div className="text-xs text-white/70">segundos</div>
        </div>
      </div>
    </div>
  )
}

