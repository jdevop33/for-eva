"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { MapPin, Star, Camera, Clock, CheckCircle, Copy, ExternalLink, TrendingUp, MessageSquare } from "lucide-react"

const GBP_CATEGORIES = [
  "Fitness instructor",
  "Personal trainer",
  "Physical fitness program",
  "Pilates studio",
  "Senior citizen service",
  "Health consultant",
  "Wellness program",
  "Home health care service",
]

const VICTORIA_NEIGHBORHOODS = [
  "Oak Bay",
  "Saanich",
  "Esquimalt",
  "View Royal",
  "Colwood",
  "Langford",
  "Sidney",
  "Central Saanich",
  "North Saanich",
  "Metchosin",
  "Sooke",
  "James Bay",
  "Fernwood",
  "Fairfield",
  "Rockland",
  "Cadboro Bay",
  "Gordon Head",
  "Broadmead",
  "Royal Oak",
  "Brentwood Bay",
]

const POST_TEMPLATES = [
  {
    type: "Success Story",
    template:
      "🌟 TRANSFORMATION TUESDAY! Meet {name}, {age}, who went from {before} to {after} in just {timeframe}! 'I never thought I could {achievement} again at my age. Eva and PRIME STRENGTH proved me wrong!' Ready to write your own success story? Call (778) 678-9831 #VictoriaBC #SeniorFitness #PrimeStrength",
    cta: "Book Your Free Assessment",
  },
  {
    type: "Educational",
    template:
      "💪 STRENGTH TIP: {tip_title} - {tip_content} This simple change can make a huge difference in your daily life! Questions? Eva is here to help. #SeniorWellness #VictoriaFitness #HealthyAging",
    cta: "Learn More About Our Programs",
  },
  {
    type: "Community",
    template:
      "🏡 NEIGHBORHOOD SPOTLIGHT: This week we're strengthening amazing residents in {neighborhood}! From {activity1} to {activity2}, our members are proving that experience deserves strength. Serving all of Greater Victoria! #Victoria{neighborhood} #CommunityStrong",
    cta: "See If We Serve Your Area",
  },
  {
    type: "Behind the Scenes",
    template:
      "👋 FROM EVA: {personal_message} Every day I'm inspired by the courage and determination of Victoria's most experienced residents. Your wisdom deserves a strong body to share it! #FounderStory #UkrainianCanadian #VictoriaBC",
    cta: "Meet Eva - Book a Consultation",
  },
]

export function GoogleBusinessProfileManager() {
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [customPost, setCustomPost] = useState("")
  const [copied, setCopied] = useState("")

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(""), 2000)
  }

  const businessInfo = {
    name: "PRIME STRENGTH",
    description:
      "Professional, in-home reformer pilates for Victoria's most experienced residents. Founded by Eva, we strengthen society's most valuable members, enabling them to share their wisdom and live with the vitality their lifetime of contribution deserves.",
    address: "Victoria, BC, Canada (Service Area)",
    phone: "(778) 678-9831",
    email: "eva@primestrength.ca",
    website: "https://primestrength.ca",
    hours: {
      Monday: "8:00 AM - 6:00 PM",
      Tuesday: "8:00 AM - 6:00 PM",
      Wednesday: "8:00 AM - 6:00 PM",
      Thursday: "8:00 AM - 6:00 PM",
      Friday: "8:00 AM - 6:00 PM",
      Saturday: "9:00 AM - 4:00 PM",
      Sunday: "Closed",
    },
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium mb-4">
          Google Business Profile Setup
        </Badge>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Dominate Victoria's Local Search</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Complete guide to setting up and optimizing Eva's Google Business Profile for maximum local visibility
        </p>
      </div>

      {/* Business Information Card */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Business Information</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                <div className="flex items-center gap-2">
                  <Input value={businessInfo.name} readOnly className="bg-slate-50" />
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(businessInfo.name, "name")}>
                    {copied === "name" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Primary Category</label>
                <select className="w-full h-12 border-2 border-slate-300 rounded-xl px-4">
                  {GBP_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <div className="flex items-center gap-2">
                  <Input value={businessInfo.phone} readOnly className="bg-slate-50" />
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(businessInfo.phone, "phone")}>
                    {copied === "phone" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Website</label>
                <div className="flex items-center gap-2">
                  <Input value={businessInfo.website} readOnly className="bg-slate-50" />
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(businessInfo.website, "website")}>
                    {copied === "website" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Business Description</label>
                <Textarea value={businessInfo.description} readOnly className="bg-slate-50 min-h-[120px]" />
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 bg-transparent"
                  onClick={() => copyToClipboard(businessInfo.description, "description")}
                >
                  {copied === "description" ? (
                    <CheckCircle className="w-4 h-4 mr-2" />
                  ) : (
                    <Copy className="w-4 h-4 mr-2" />
                  )}
                  Copy Description
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Areas</label>
                <div className="bg-slate-50 p-4 rounded-xl max-h-32 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {VICTORIA_NEIGHBORHOODS.map((area) => (
                      <div key={area} className="text-slate-700">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hours Setup */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Business Hours</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(businessInfo.hours).map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="font-medium text-slate-900">{day}</span>
                <span className="text-slate-600">{hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Post Templates */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Content Templates</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {POST_TEMPLATES.map((template, index) => (
              <Button
                key={index}
                variant={selectedTemplate === index ? "default" : "outline"}
                onClick={() => setSelectedTemplate(index)}
                className="h-auto p-4 flex flex-col items-start gap-2"
              >
                <span className="font-semibold">{template.type}</span>
                <span className="text-xs opacity-75">{template.cta}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {POST_TEMPLATES[selectedTemplate].type} Template
              </label>
              <Textarea
                value={POST_TEMPLATES[selectedTemplate].template}
                readOnly
                className="bg-slate-50 min-h-[120px]"
              />
              <Button
                size="sm"
                variant="outline"
                className="mt-2 bg-transparent"
                onClick={() => copyToClipboard(POST_TEMPLATES[selectedTemplate].template, "template")}
              >
                {copied === "template" ? <CheckCircle className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                Copy Template
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Custom Post</label>
              <Textarea
                value={customPost}
                onChange={(e) => setCustomPost(e.target.value)}
                placeholder="Create your own Google Business Profile post..."
                className="min-h-[100px]"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Photo Guidelines */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Photo Strategy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Essential Photos</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Eva's professional headshot
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Reformer equipment setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Seniors exercising (with permission)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Victoria neighborhood shots
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Before/after transformations
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Photo Tips</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• High resolution (1024x1024 minimum)</li>
                <li>• Good lighting, natural preferred</li>
                <li>• Show real people, real results</li>
                <li>• Include Victoria landmarks</li>
                <li>• Update weekly with fresh content</li>
                <li>• Use consistent branding colors</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Content Calendar</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-blue-50 rounded">
                  <strong>Monday:</strong> Motivation Monday
                </div>
                <div className="p-2 bg-green-50 rounded">
                  <strong>Tuesday:</strong> Transformation Tuesday
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <strong>Wednesday:</strong> Wisdom Wednesday
                </div>
                <div className="p-2 bg-amber-50 rounded">
                  <strong>Thursday:</strong> Technique Thursday
                </div>
                <div className="p-2 bg-rose-50 rounded">
                  <strong>Friday:</strong> Feature Friday
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Setup Checklist */}
      <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Setup Checklist</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Initial Setup</h3>
              <div className="space-y-3">
                {[
                  "Create Google Business Profile account",
                  "Verify business address (use service area)",
                  "Add all business information",
                  "Upload high-quality photos",
                  "Set up business hours",
                  "Add services and attributes",
                  "Enable messaging",
                  "Connect Google Analytics",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Ongoing Optimization</h3>
              <div className="space-y-3">
                {[
                  "Post 3-4 times per week",
                  "Respond to reviews within 24 hours",
                  "Update photos monthly",
                  "Monitor Q&A section",
                  "Track insights and metrics",
                  "Encourage customer reviews",
                  "Use local keywords in posts",
                  "Share success stories regularly",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <h4 className="font-semibold mb-3">Quick Start Links</h4>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open("https://business.google.com/create", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Create GBP Account
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open("https://support.google.com/business/answer/2911778", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Verification Guide
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open("https://business.google.com/posts", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Create Posts
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
