"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Star, MessageCircle, Heart, Copy, CheckCircle, AlertCircle, TrendingUp } from "lucide-react"

const REVIEW_RESPONSES = {
  "5_star": [
    "Thank you so much, {name}! It's an absolute honor to be part of your strength journey. Your dedication and positive spirit inspire me every day. Here's to many more years of staying strong together! 💪 - Eva",
    "{name}, your kind words mean the world to me! Watching you grow stronger and more confident has been one of the greatest joys of my work. Thank you for trusting PRIME STRENGTH with your wellness journey. - Eva ❤️",
    "I'm so grateful for your wonderful review, {name}! Your progress has been incredible, and it's a privilege to witness your transformation. Thank you for being such an inspiration to our entire PRIME STRENGTH community! - Eva",
  ],
  "4_star": [
    "Thank you for your feedback, {name}! I'm so glad you're seeing great results with our program. I'd love to discuss how we can make your experience even better - please give me a call at (778) 678-9831. Your success is my priority! - Eva",
    "{name}, I appreciate your honest review! It's wonderful to hear about your progress. I'm always looking for ways to improve our service - would you mind sharing what would make it a 5-star experience for you? - Eva",
  ],
  "3_star": [
    "Hi {name}, thank you for taking the time to share your experience. I'd really appreciate the opportunity to discuss your concerns and see how we can better serve you. Please call me directly at (778) 678-9831 - your satisfaction is incredibly important to me. - Eva",
    "{name}, I value your feedback and want to make sure you're getting the most out of your PRIME STRENGTH experience. Let's chat about how we can improve - I'm here to listen and make things right. - Eva",
  ],
  "1_2_star": [
    "Hi {name}, I'm truly sorry to hear about your experience. This doesn't reflect the standard of care I strive to provide every member of our PRIME STRENGTH family. Please call me directly at (778) 678-9831 so we can discuss this immediately and make it right. - Eva",
    "{name}, I sincerely apologize that we didn't meet your expectations. Your experience is not acceptable, and I want to personally address your concerns. Please reach out to me at (778) 678-9831 at your earliest convenience. - Eva",
  ],
}

const REVIEW_REQUEST_TEMPLATES = [
  {
    type: "Post-Session Text",
    template:
      "Hi {name}! Eva here 😊 I hope you're feeling strong after today's session! If you have a moment, would you mind sharing your PRIME STRENGTH experience on Google? Your story could inspire another senior to start their strength journey: [Google Review Link] Thank you for being amazing! 💪",
  },
  {
    type: "Email Follow-up",
    template:
      "Dear {name},\n\nI hope you're continuing to feel the benefits of our recent session together! Your progress has been truly inspiring to witness.\n\nIf you've been happy with your PRIME STRENGTH experience, would you consider sharing a quick review on Google? Your story could be the encouragement another Victoria senior needs to take that first step toward strength.\n\n[Leave a Review Button]\n\nThank you for being such a wonderful part of our community!\n\nWith gratitude,\nEva\nFounder, PRIME STRENGTH",
  },
  {
    type: "Family Member Outreach",
    template:
      "Hi {family_name},\n\nI wanted to reach out because {member_name} has been making such incredible progress with PRIME STRENGTH! Their dedication and positive attitude have been truly inspiring.\n\nIf you've noticed positive changes in {member_name}'s strength, confidence, or overall well-being, would you consider sharing a review about their experience? Family perspectives are so valuable for other adult children researching options for their parents.\n\n[Google Review Link]\n\nThank you for trusting us with {member_name}'s wellness journey!\n\nBest regards,\nEva",
  },
]

export function ReviewManagementSystem() {
  const [selectedRating, setSelectedRating] = useState("5_star")
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [customResponse, setCustomResponse] = useState("")
  const [copied, setCopied] = useState("")

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(""), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge className="bg-amber-50 text-amber-700 border-amber-200 px-4 py-2 font-medium mb-4">
          Review Management System
        </Badge>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Build a 5-Star Reputation</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Professional review response templates and strategies to build trust and attract more Victoria seniors
        </p>
      </div>

      {/* Review Response Templates */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Review Response Templates</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { key: "5_star", label: "5 Star", color: "bg-green-500", icon: "⭐⭐⭐⭐⭐" },
              { key: "4_star", label: "4 Star", color: "bg-blue-500", icon: "⭐⭐⭐⭐" },
              { key: "3_star", label: "3 Star", color: "bg-yellow-500", icon: "⭐⭐⭐" },
              { key: "1_2_star", label: "1-2 Star", color: "bg-red-500", icon: "⭐⭐" },
            ].map((rating) => (
              <Button
                key={rating.key}
                variant={selectedRating === rating.key ? "default" : "outline"}
                onClick={() => setSelectedRating(rating.key)}
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <div className={`w-8 h-8 ${rating.color} rounded-full flex items-center justify-center`}>
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <span className="font-semibold">{rating.label}</span>
                <span className="text-xs">{rating.icon}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">
              Response Templates for {selectedRating.replace("_", " ").toUpperCase()} Reviews
            </h3>

            {REVIEW_RESPONSES[selectedRating as keyof typeof REVIEW_RESPONSES].map((template, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">Template {index + 1}</label>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(template, `response-${index}`)}>
                    {copied === `response-${index}` ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <Textarea value={template} readOnly className="bg-slate-50 min-h-[80px]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Review Request Templates */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Review Request Templates</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {REVIEW_REQUEST_TEMPLATES.map((template, index) => (
              <Button
                key={index}
                variant={selectedTemplate === index ? "default" : "outline"}
                onClick={() => setSelectedTemplate(index)}
                className="h-auto p-4 flex flex-col items-start gap-2"
              >
                <span className="font-semibold">{template.type}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                {REVIEW_REQUEST_TEMPLATES[selectedTemplate].type}
              </label>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(REVIEW_REQUEST_TEMPLATES[selectedTemplate].template, "request")}
              >
                {copied === "request" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <Textarea
              value={REVIEW_REQUEST_TEMPLATES[selectedTemplate].template}
              readOnly
              className="bg-slate-50 min-h-[120px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Review Strategy Guide */}
      <Card className="bg-white shadow-xl border-0 rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Review Generation Strategy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Best Times to Ask
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• After a successful milestone (first month, strength goal)</li>
                <li>• Following a particularly positive session</li>
                <li>• When client mentions feeling stronger/better</li>
                <li>• After family members notice improvements</li>
                <li>• During program renewal conversations</li>
                <li>• After resolving any concerns successfully</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-500" />
                Review Best Practices
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Respond to ALL reviews within 24 hours</li>
                <li>• Use the client's name when possible</li>
                <li>• Keep responses personal and authentic</li>
                <li>• Address specific points mentioned</li>
                <li>• Always include your name (Eva)</li>
                <li>• Thank reviewers genuinely</li>
                <li>• Invite offline resolution for issues</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                Review Incentives
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Handwritten thank you notes</li>
                <li>• Feature positive reviews (with permission)</li>
                <li>• Small wellness gifts for detailed reviews</li>
                <li>• Priority booking for loyal reviewers</li>
                <li>• Referral bonuses for review + referral</li>
                <li>• Recognition in newsletter/social media</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Review Goals */}
      <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Monthly Review Goals</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">8-12</div>
              <div className="text-slate-300">New Reviews</div>
              <div className="text-xs text-slate-400 mt-2">Target per month</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">4.8+</div>
              <div className="text-slate-300">Average Rating</div>
              <div className="text-xs text-slate-400 mt-2">Maintain excellence</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-slate-300">Response Rate</div>
              <div className="text-xs text-slate-400 mt-2">Reply to all reviews</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">24hr</div>
              <div className="text-slate-300">Response Time</div>
              <div className="text-xs text-slate-400 mt-2">Maximum delay</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <h4 className="font-semibold mb-3">Review Monitoring Tools</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Google Business Profile App:</strong> Real-time notifications for new reviews
              </div>
              <div>
                <strong>Google Alerts:</strong> Set up alerts for "PRIME STRENGTH Victoria" mentions
              </div>
              <div>
                <strong>Review Tracking Sheet:</strong> Monthly spreadsheet to track review metrics
              </div>
              <div>
                <strong>Customer Feedback Forms:</strong> Collect feedback before issues become public
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
