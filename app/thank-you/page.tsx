"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Home, Calendar } from "lucide-react"
import Link from "next/link"

const INSPIRATIONAL_QUOTES = [
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    context: "Your strength journey starts today",
  },
  {
    quote: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
    author: "Mark Twain",
    context: "Beloved humorist and wisdom keeper",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    context: "Cherished author and philosopher",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    context: "Your first step toward strength",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
    context: "Victorian novelist and inspiration",
  },
]

export default function ThankYouPage() {
  const router = useRouter()
  const [quote] = useState(() => INSPIRATIONAL_QUOTES[Math.floor(Math.random() * INSPIRATIONAL_QUOTES.length)])
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-prime-50 via-white to-sage-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="gradient-sage p-8 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
            <p className="text-sage-100 text-lg">Your message has been received</p>
          </div>

          {/* Content */}
          <div className="p-8 text-center space-y-8">
            {/* Success Message */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-prime-900">We're Honored by Your Trust</h2>
              <p className="text-lg text-prime-600 leading-relaxed">
                Your journey toward strength and vitality begins now. We'll contact you within 24 hours to schedule your
                free assessment and answer any questions.
              </p>
            </div>

            {/* Inspirational Quote */}
            <Card className="bg-prime-50 border-prime-200 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-warmth rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <blockquote className="text-lg font-medium text-prime-900 mb-3 italic">"{quote.quote}"</blockquote>
                    <div className="text-sm text-prime-600">
                      <div className="font-semibold">— {quote.author}</div>
                      <div className="mt-1">{quote.context}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Next */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-prime-900">What Happens Next?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-ocean-50 rounded-xl">
                  <div className="w-10 h-10 gradient-ocean rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="text-sm font-medium text-prime-900">We'll Call You</div>
                  <div className="text-xs text-prime-600 text-center">Within 24 hours to schedule</div>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-sage-50 rounded-xl">
                  <div className="w-10 h-10 gradient-sage rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="text-sm font-medium text-prime-900">Free Assessment</div>
                  <div className="text-xs text-prime-600 text-center">In your home, no obligation</div>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-rose-50 rounded-xl">
                  <div className="w-10 h-10 gradient-rose rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="text-sm font-medium text-prime-900">Start Strong</div>
                  <div className="text-xs text-prime-600 text-center">Begin your strength journey</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-prime-900 hover:bg-prime-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-prime-300 text-prime-700 hover:bg-prime-50 rounded-xl px-6 py-3 bg-transparent"
                >
                  <Link href="#contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Another Session
                  </Link>
                </Button>
              </div>

              {/* Auto-redirect notice */}
              <div className="text-sm text-prime-500">
                Automatically returning to home page in {countdown} seconds...
              </div>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-prime-900 to-prime-800 text-white rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Need immediate assistance?</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:250-555-0199"
                    className="flex items-center gap-2 text-prime-100 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">📞</span>
                    </div>
                    (250) 555-0199
                  </a>
                  <a
                    href="mailto:hello@primestrength.ca"
                    className="flex items-center gap-2 text-prime-100 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">✉️</span>
                    </div>
                    hello@primestrength.ca
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
