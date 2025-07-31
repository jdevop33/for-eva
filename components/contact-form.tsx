"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://public.herotofu.com/v1/aea08d20-6e4d-11f0-b214-db5e76d57d9c", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          window.location.href = "/thank-you"
        }, 2000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your form. Please try again or call us directly at (250) 555-0199.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-white shadow-2xl shadow-blue-100/50 border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Thank You!</h3>
          <p className="text-slate-600 mb-6">
            We've received your message and will contact you within 24 hours to schedule your free assessment.
          </p>
          <p className="text-sm text-slate-500">Redirecting you to our thank you page...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white shadow-2xl shadow-blue-100/50 border-0 rounded-3xl overflow-hidden">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Get Your Free Assessment</h3>
          <p className="text-slate-600">Tell us about your goals and we'll create a personalized plan.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden fields for form identification */}
          <input type="hidden" name="form_type" value="senior_contact" />
          <input type="hidden" name="source" value="prime_strength_website" />

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              name="first_name"
              placeholder="First Name"
              required
              className="h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
            />
            <Input
              name="last_name"
              placeholder="Last Name"
              required
              className="h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
            />
          </div>

          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number (Primary Contact Method)"
            required
            className="h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
          />

          <Input
            name="email"
            type="email"
            placeholder="Email Address (Optional)"
            className="h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Age Range (Optional)</label>
            <select
              name="age_range"
              className="w-full h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 px-4"
            >
              <option value="">Select age range</option>
              <option value="50-59">50-59</option>
              <option value="60-69">60-69</option>
              <option value="70-79">70-79</option>
              <option value="80-89">80-89</option>
              <option value="90+">90+</option>
              <option value="adult_child">I'm an adult child inquiring for my parent</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Current Activity Level</label>
            <select
              name="activity_level"
              className="w-full h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 px-4"
            >
              <option value="">Select current activity level</option>
              <option value="sedentary">Mostly sedentary</option>
              <option value="light">Light activity (walking, gentle stretching)</option>
              <option value="moderate">Moderate activity (regular walks, some exercise)</option>
              <option value="active">Very active (regular exercise routine)</option>
            </select>
          </div>

          <Textarea
            name="message"
            placeholder="Tell us about your experience, goals, health considerations, or any concerns you'd like to discuss..."
            required
            className="min-h-[120px] text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all resize-none text-prime-900 placeholder:text-prime-500"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">Preferred Contact Time</label>
            <select
              name="preferred_contact_time"
              className="w-full h-14 text-lg border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 px-4"
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
              <option value="evening">Early Evening (5:00 PM - 7:00 PM)</option>
              <option value="flexible">I'm flexible</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending Your Request...
              </>
            ) : (
              <>
                Request My Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            We respect your privacy and will never share your information. You can expect a call within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
