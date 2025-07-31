"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

interface HeroAnimationProps {
  className?: string
}

export function HeroAnimation({ className = "" }: HeroAnimationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <DotLottieReact
        src="https://lottie.host/90260f8a-1e9b-42f3-87f0-e9b234974dd0/Rxgfg3Sl5N.lottie"
        loop
        autoplay
        className="w-full h-full max-w-2xl max-h-2xl"
      />
    </div>
  )
}
