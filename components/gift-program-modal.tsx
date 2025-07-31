"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Heart, ArrowRight, CheckCircle, Loader2, X } from "lucide-react"

export function GiftProgramModal() {
  const [isOpen, setIsOpen] = useState(false)
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
      } else {
        throw new Error("Gift program submission failed")
      }
    } catch (error) {
      console.error("Gift program submission error:", error)
      alert("There was an error submitting your gift request. Please try again or call us directly at (250) 555-0199.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        variant="outline"
        className="border-2 border-slate-300 hover:border-blue-500 px-12 py-6 text-lg font-bold rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
      >
        <Gift className="mr-2 w-5 h-5" />
        Gift Strength
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Gift Request Submitted!</h2>
              <p className="text-lg text-slate-600 mb-6">
                We'll contact you within 24 hours to arrange the gift program details and coordinate with the recipient.
                You'll receive a confirmation email shortly.
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-8 py-3"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Gift className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">Gift the Power of Strength</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-full w-8 h-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-blue-100">
                  Give someone you care about the gift of independence, confidence, and strength. Perfect for parents,
                  grandparents, or anyone who deserves to feel strong again.
                </p>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for gift program identification */}
                  <input type="hidden" name="form_type" value="gift_program" />
                  <input type="hidden" name="source" value="prime_strength_website" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Gift Giver Information
                      </h3>
                      <div className="space-y-4">
                        <Input
                          name="giver_name"
                          placeholder="Your Full Name"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="giver_email"
                          type="email"
                          placeholder="Your Email"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="giver_phone"
                          type="tel"
                          placeholder="Your Phone"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Gift className="w-5 h-5 text-blue-500" />
                        Recipient Information
                      </h3>
                      <div className="space-y-4">
                        <Input
                          name="recipient_name"
                          placeholder="Recipient's Full Name"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="recipient_phone"
                          type="tel"
                          placeholder="Recipient's Phone"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="relationship"
                          placeholder="Your Relationship (e.g., Mother, Father, Friend)"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="recipient_address"
                          placeholder="Recipient's Address (for home visits)"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 text-prime-900 placeholder:text-prime-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Choose Program</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { name: "Foundation", price: "$289/mo", value: "foundation", description: "4 sessions/month" },
                        {
                          name: "Progress",
                          price: "$489/mo",
                          value: "progress",
                          popular: true,
                          description: "8 sessions/month",
                        },
                        {
                          name: "Transformation",
                          price: "$689/mo",
                          value: "transformation",
                          description: "12 sessions/month",
                        },
                      ].map((program) => (
                        <label key={program.value} className="relative">
                          <input type="radio" name="program" value={program.value} required className="sr-only peer" />
                          <div className="p-4 border-2 border-slate-200 rounded-xl cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all">
                            {program.popular && (
                              <div className="text-xs font-bold text-blue-600 mb-1">MOST POPULAR</div>
                            )}
                            <div className="font-bold text-slate-800">{program.name}</div>
                            <div className="text-lg font-bold text-slate-900">{program.price}</div>
                            <div className="text-sm text-slate-600">{program.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Gift Duration</label>
                    <select
                      name="gift_duration"
                      required
                      className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
                    >
                      <option value="">Select gift duration</option>
                      <option value="1_month">1 Month</option>
                      <option value="3_months">3 Months (Most Popular)</option>
                      <option value="6_months">6 Months</option>
                      <option value="12_months">12 Months</option>
                    </select>
                  </div>

                  <Textarea
                    name="personal_message"
                    placeholder="Personal message for the recipient (optional) - This will be included in their welcome package"
                    className="min-h-[100px] border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all resize-none text-prime-900 placeholder:text-prime-500"
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 h-14 rounded-xl"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing Gift Request...
                        </>
                      ) : (
                        <>
                          Submit Gift Request
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
