"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Camera, CheckCircle, Loader2 } from "lucide-react"

export function TestimonialSubmission() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add hidden fields for testimonial identification
    formData.append("form_type", "testimonial_submission")
    formData.append("source", "prime_strength_website")

    try {
      const response = await fetch("https://public.herotofu.com/v1/aea08d20-6e4d-11f0-b214-db5e76d57d9c", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Testimonial submission failed")
      }
    } catch (error) {
      console.error("Testimonial submission error:", error)
      alert("There was an error submitting your testimonial. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl px-6 py-3"
      >
        <Star className="w-4 h-4 mr-2" />
        Share Your Success Story
      </Button>
    )
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            Your story will inspire others to start their strength journey. We may contact you for a professional photo
            session.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto bg-white shadow-xl border-0 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800">Share Your Success Story</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-600"
          >
            ×
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="member_name"
              placeholder="Your Name"
              required
              className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
            />
            <Input
              name="member_age"
              type="number"
              placeholder="Age"
              min="50"
              max="100"
              className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
            />
          </div>

          <Input
            name="member_location"
            placeholder="Neighborhood (e.g., Oak Bay, Saanich)"
            required
            className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              How long have you been with PRIME STRENGTH?
            </label>
            <select
              name="membership_duration"
              required
              className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
            >
              <option value="">Select duration</option>
              <option value="1_month">1 Month</option>
              <option value="3_months">3 Months</option>
              <option value="6_months">6 Months</option>
              <option value="1_year">1 Year</option>
              <option value="1_year_plus">More than 1 Year</option>
            </select>
          </div>

          <Textarea
            name="testimonial_text"
            placeholder="Tell us about your experience with PRIME STRENGTH - what changes have you noticed? How do you feel? What would you tell other seniors considering our program?"
            required
            className="min-h-[120px] border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 resize-none text-prime-900 placeholder:text-prime-500"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Rate your overall experience</label>
            <select
              name="rating"
              required
              className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
            >
              <option value="">Select rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600 bg-blue-50 p-3 rounded-xl">
            <Camera className="w-4 h-4" />
            <span>Photo optional - we may contact you for a professional photo session to feature your story</span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting Your Story...
              </>
            ) : (
              "Share My Success Story"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
