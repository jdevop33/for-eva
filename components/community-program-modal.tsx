"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, ArrowRight, CheckCircle, Loader2, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const VICTORIA_COMMUNITIES = [
  "Amica Douglas House",
  "Amica Senior Lifestyle",
  "Berwick House Gordon Head",
  "Berwick House Royal Oak",
  "Broadmead Care",
  "Carlton House",
  "Chartwell Hillside",
  "Chartwell Malaspina",
  "Chartwell Oak Bay",
  "Craigdarroch Care",
  "Glengarry Hospital",
  "Glenwarren Lodge",
  "Gorge Road Hospital",
  "Greenwoods Eldercare",
  "Harriet Road Care",
  "James Bay Care Centre",
  "Kiwanis Pavilion",
  "Luther Court",
  "Mount Edwards Court",
  "Mount Tolmie Hospital",
  "Oak Bay Lodge",
  "Parkwood Court",
  "Priory Care Centre",
  "Saanich Peninsula Hospital",
  "Selkirk Seniors Village",
  "Sunset Lodge",
  "The Heights at Mt. View",
  "The Lodge at Broadmead",
  "The Residence at Morgan's Harbour",
  "The Summit",
  "Tuscany Village",
  "Victoria General Hospital",
  "Yucalta Lodge",
]

export function CommunityProgramModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedCommunity, setSelectedCommunity] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://public.herotofu.com/v1/eb0c14a0-6e4d-11f0-9154-e964910b11a1", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Community program submission error:", error)
      alert("There was an error submitting your request. Please try again or call us directly at (250) 555-0199.")
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
        className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Building2 className="mr-2 w-5 h-5" />
        Bring PRIME to Your Community
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white shadow-2xl border-0 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Request Submitted!</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Thank you for your interest in bringing PRIME STRENGTH to your community. Our enterprise team will
                contact you within 48 hours to discuss partnership opportunities, pricing, and scheduling your FREE
                introductory session for residents.
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-8 py-3 font-semibold"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Enterprise Partnership Program</h2>
                      <Badge className="bg-emerald-500 text-white px-3 py-1 font-medium text-sm mt-1">
                        First Session FREE
                      </Badge>
                    </div>
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
                <p className="text-slate-200 leading-relaxed">
                  Partner with PRIME STRENGTH to bring professional fitness programming to your senior living community.
                  Perfect for retirement communities, assisted living facilities, and senior care centers.
                </p>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for enterprise form identification */}
                  <input type="hidden" name="form_type" value="enterprise_community" />
                  <input type="hidden" name="source" value="prime_strength_website" />
                  <input type="hidden" name="program_type" value="community_partnership" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <Input
                          name="contact_name"
                          placeholder="Your Full Name"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="job_title"
                          placeholder="Job Title (e.g., Activity Director, Administrator)"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="contact_email"
                          type="email"
                          placeholder="Business Email"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                        />
                        <Input
                          name="contact_phone"
                          type="tel"
                          placeholder="Business Phone"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                        />
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-slate-700">Your Role</label>
                          <select
                            name="contact_role"
                            required
                            className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
                          >
                            <option value="">Select your role</option>
                            <option value="activity_director">Activity Director</option>
                            <option value="administrator">Administrator</option>
                            <option value="wellness_coordinator">Wellness Coordinator</option>
                            <option value="executive_director">Executive Director</option>
                            <option value="operations_manager">Operations Manager</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-emerald-500" />
                        Community Details
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-slate-700">Community Name</label>
                          <select
                            name="community_name"
                            value={selectedCommunity}
                            onChange={(e) => setSelectedCommunity(e.target.value)}
                            required
                            className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
                          >
                            <option value="">Choose your community</option>
                            {VICTORIA_COMMUNITIES.map((community) => (
                              <option key={community} value={community}>
                                {community}
                              </option>
                            ))}
                            <option value="other">Other (please specify below)</option>
                          </select>
                        </div>

                        {selectedCommunity === "other" && (
                          <Input
                            name="other_community"
                            placeholder="Please specify your community name"
                            required
                            className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                          />
                        )}

                        <Input
                          name="community_address"
                          placeholder="Community Address"
                          required
                          className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                        />

                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            name="total_residents"
                            type="number"
                            placeholder="Total Residents"
                            min="10"
                            max="500"
                            required
                            className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                          />
                          <Input
                            name="interested_residents"
                            type="number"
                            placeholder="Estimated Interest"
                            min="1"
                            max="100"
                            className="h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all text-prime-900 placeholder:text-prime-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-slate-700">Community Type</label>
                          <select
                            name="community_type"
                            required
                            className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
                          >
                            <option value="">Select community type</option>
                            <option value="independent_living">Independent Living</option>
                            <option value="assisted_living">Assisted Living</option>
                            <option value="memory_care">Memory Care</option>
                            <option value="continuing_care">Continuing Care Retirement Community</option>
                            <option value="senior_center">Senior Center</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-slate-700">Preferred Program Schedule</label>
                          <select
                            name="preferred_schedule"
                            className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
                          >
                            <option value="">Select preferred schedule</option>
                            <option value="weekly">Weekly Sessions</option>
                            <option value="bi_weekly">Bi-Weekly Sessions</option>
                            <option value="monthly">Monthly Sessions</option>
                            <option value="flexible">Flexible Schedule</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Fitness Programs & Special Considerations
                    </label>
                    <Textarea
                      name="additional_info"
                      placeholder="Tell us about your current fitness programs, available space, resident mobility levels, budget considerations, and any special requirements..."
                      className="min-h-[120px] border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all resize-none text-prime-900 placeholder:text-prime-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Budget Range (Monthly)</label>
                    <select
                      name="budget_range"
                      className="w-full h-12 border-2 border-prime-300 bg-white rounded-xl focus:border-prime-900 focus:ring-2 focus:ring-prime-900/20 transition-all px-4 text-prime-900"
                    >
                      <option value="">Select budget range</option>
                      <option value="under_1000">Under $1,000</option>
                      <option value="1000_2500">$1,000 - $2,500</option>
                      <option value="2500_5000">$2,500 - $5,000</option>
                      <option value="5000_plus">$5,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>

                  {/* Benefits Highlight */}
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-2xl border border-emerald-200/50">
                    <h4 className="font-semibold text-slate-900 mb-3">Enterprise Partnership Benefits:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        FREE introductory session for up to 12 residents
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        Professional reformer pilates equipment provided
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        Certified instructors with senior specialization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        Flexible scheduling to fit your community calendar
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        Volume pricing for ongoing programs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        Marketing support and resident engagement materials
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 h-14 rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Enterprise Request...
                        </>
                      ) : (
                        <>
                          Request Partnership Information
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
