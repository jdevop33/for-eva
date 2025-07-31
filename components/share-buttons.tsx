"use client"

import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, Mail, Link2, Check } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  variant?: "default" | "footer"
}

export function ShareButtons({ variant = "default" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://primestrength.ca"
  const shareText =
    "Check out PRIME STRENGTH - Experience Deserves Strength. Professional in-home fitness for Victoria's most experienced residents, founded by Eva."

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent("PRIME STRENGTH - Experience Deserves Strength")}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
  }

  if (variant === "footer") {
    return (
      <div className="flex gap-3">
        <Button
          size="sm"
          variant="outline"
          className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent"
          onClick={() => handleShare("twitter")}
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent"
          onClick={() => handleShare("email")}
        >
          <Mail className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <Share2 className="w-4 h-4 text-slate-600" />
        <span className="text-sm font-medium text-slate-700">Share</span>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          size="sm"
          variant="ghost"
          className="justify-start h-8 px-2 text-xs"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="w-3 h-3 mr-2" />
          Facebook
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="justify-start h-8 px-2 text-xs"
          onClick={() => handleShare("twitter")}
        >
          <Twitter className="w-3 h-3 mr-2" />
          Twitter
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="justify-start h-8 px-2 text-xs"
          onClick={() => handleShare("email")}
        >
          <Mail className="w-3 h-3 mr-2" />
          Email
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="justify-start h-8 px-2 text-xs"
          onClick={() => handleShare("copy")}
        >
          {copied ? <Check className="w-3 h-3 mr-2" /> : <Link2 className="w-3 h-3 mr-2" />}
          {copied ? "Copied!" : "Copy Link"}
        </Button>
      </div>
    </div>
  )
}
