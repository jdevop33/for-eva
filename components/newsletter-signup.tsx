"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add hidden fields for newsletter identification
    formData.append("form_type", "newsletter_signup")
    formData.append("source", "prime_strength_website")

    try {
      const response = await fetch("https://public.herotofu.com/v1/aea08d20-6e4d-11f0-b214-db5e76d57d9c", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Newsletter signup failed")
      }
    } catch (error) {
      console.error("Newsletter signup error:", error)
      alert("There was an error signing up for our newsletter. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-3 text-white">
        <CheckCircle className="w-6 h-6" />
        <span className="text-lg font-medium">Welcome to the PRIME STRENGTH community!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        required
        className="h-14 text-lg bg-white border-2 border-white/30 text-prime-900 placeholder:text-prime-600 rounded-xl focus:bg-white focus:border-white focus:ring-2 focus:ring-white/50 transition-all"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-14 px-8 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold whitespace-nowrap"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Join Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  )
}
