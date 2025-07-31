"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Phone, Mail, MapPin, ArrowRight, Star, Heart, Gift, Play, Users, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ShareButtons } from "@/components/share-buttons"
import { TestimonialSubmission } from "@/components/testimonial-submission"
import { MobileMenu } from "@/components/mobile-menu"
import { CommunityProgramModal } from "@/components/community-program-modal"
import { BookingSystem } from "@/components/booking-system"
import { HeroAnimation } from "@/components/hero-animation"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-slate-50 overflow-x-hidden">
      {/* Premium Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-3" prefetch={false}>
              <div className="w-12 h-12 relative">
                <Image
                  src="/prime-strength-logo.png"
                  alt="PRIME STRENGTH Logo - Heart with embracing hands"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">PRIME STRENGTH</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="#programs"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
              >
                Programs
              </Link>
              <Link
                href="#story"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
              >
                Story
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
              >
                Success Stories
              </Link>
              <Button
                size="sm"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </nav>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section - Next Level */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Trust Indicators */}
                <div className="flex gap-6 mb-8">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    500+ Members
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Victoria BC
                  </div>
                </div>

                {/* Hero Text */}
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.9]">
                    Experience
                    <br />
                    <span className="font-light text-slate-600">Deserves</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-black">
                      Strength
                    </span>
                  </h1>

                  <p className="text-xl lg:text-2xl font-normal text-slate-600 max-w-2xl leading-relaxed">
                    Professional, in-home reformer pilates for Victoria's most experienced residents. Your lifetime of
                    wisdom deserves a body strong enough to share it.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      size="lg"
                      className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <CommunityProgramModal />
                  </div>

                  {/* Social Proof */}
                  <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                      <div className="text-sm font-medium text-slate-600">Happy Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-1">15+</div>
                      <div className="text-sm font-medium text-slate-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                      <div className="text-sm font-medium text-slate-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Animation */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl flex items-center justify-center">
                  <HeroAnimation className="w-full h-full" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <div className="absolute top-32 right-8 hidden xl:block">
            <ShareButtons />
          </div>
        </section>

        {/* How It Works - Premium Design */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium mb-6">
                How It Works
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Simple Steps to Stronger Living
              </h2>
              <p className="text-xl font-normal text-slate-600 leading-relaxed">
                We've made it incredibly easy to start your strength journey. No gym intimidation, no complicated
                schedules.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  description: "Eva visits your home for a friendly chat about your goals and health history.",
                  icon: Calendar,
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  step: "02",
                  title: "Find Your Group",
                  description: "We connect you with 3-5 neighbors who share similar goals and schedules.",
                  icon: Users,
                  gradient: "from-emerald-500 to-emerald-600",
                },
                {
                  step: "03",
                  title: "Start Strong",
                  description: "Twice-weekly sessions in your home with professional equipment and guidance.",
                  icon: Heart,
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  step: "04",
                  title: "Celebrate Progress",
                  description: "Watch your strength, balance, and confidence grow alongside new friendships.",
                  icon: Star,
                  gradient: "from-amber-500 to-orange-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-slate-400 mb-2">{item.step}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-base font-normal text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Premium Cards */}
        <section id="testimonials" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 font-medium mb-6">
                Success Stories
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Society's Most Experienced
              </h2>
              <p className="text-xl font-normal text-slate-600 mb-8 leading-relaxed">
                Our members aren't just getting stronger—they're reclaiming their power to contribute.
              </p>
              <TestimonialSubmission />
            </div>

            {/* Video Testimonial */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="bg-slate-900 border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full w-20 h-20 p-0 shadow-xl hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-semibold text-lg">Margaret's Transformation Story</p>
                    <p className="text-slate-300 font-normal">From concerned to confident in 3 months</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial Grid */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Margaret K., 78",
                  location: "Retired Teacher, Oak Bay",
                  quote:
                    "I can play with my grandchildren on the floor again, without any fear. My 40 years of teaching deserves this strength.",
                  initials: "MK",
                  gradient: "from-blue-500 to-blue-600",
                  image: "/placeholder.svg?height=400&width=400&text=Margaret+K",
                },
                {
                  name: "Robert P., 82",
                  location: "Veteran, Saanich",
                  quote:
                    "My balance was a concern. Now I walk with confidence I haven't felt in years. Ready to share my stories again.",
                  initials: "RP",
                  gradient: "from-emerald-500 to-emerald-600",
                  image: "/placeholder.svg?height=400&width=400&text=Robert+P",
                },
                {
                  name: "Patricia L., 75",
                  location: "Community Volunteer, Esquimalt",
                  quote:
                    "My doctor is amazed. My bone density improved, and I feel strong enough to keep volunteering.",
                  initials: "PL",
                  gradient: "from-purple-500 to-purple-600",
                  image: "/placeholder.svg?height=400&width=400&text=Patricia+L",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name} testimonial photo`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex text-amber-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-700 mb-6 leading-relaxed text-lg font-normal">"{testimonial.quote}"</p>
                      <div className="border-t border-slate-100 pt-4">
                        <p className="font-semibold text-slate-900 text-base">{testimonial.name}</p>
                        <p className="text-sm font-medium text-slate-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs - Premium Pricing */}
        <section id="programs" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2 font-medium mb-6">
                Programs
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Strong Bodies, Wise Minds
              </h2>
              <p className="text-xl font-normal text-slate-600 mb-8 leading-relaxed">
                Choose the program that honors your experience and supports your goals.
              </p>
              <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-200 px-4 py-2 font-medium">
                <Gift className="w-4 h-4 mr-2" />
                Gift programs available for all tiers
              </Badge>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Foundation */}
              <Card className="bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">F</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Foundation</h3>
                    <div className="text-4xl font-bold text-slate-900 mb-1">
                      $289<span className="text-lg text-slate-600 font-normal">/mo</span>
                    </div>
                    <p className="text-slate-600 font-normal">Perfect for getting started</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">4 In-Home Sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Personal Assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Monthly Review</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Equipment Included</span>
                    </li>
                  </ul>

                  <div className="space-y-3">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                      Choose Foundation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl py-3 bg-transparent font-medium"
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      Gift This Program
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progress - Featured */}
              <Card className="bg-slate-900 text-white rounded-2xl shadow-2xl transform scale-105 relative border-0">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 font-semibold text-sm shadow-lg">
                    Most Popular
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-slate-900 font-bold text-xl">P</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Progress</h3>
                    <div className="text-4xl font-bold mb-1">
                      $489<span className="text-lg text-slate-300 font-normal">/mo</span>
                    </div>
                    <p className="text-slate-300 font-normal">Most comprehensive option</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-100 font-normal">8 In-Home Sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-100 font-normal">Comprehensive Assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-100 font-normal">Bi-Weekly Reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-100 font-normal">Nutrition Guidance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-100 font-normal">Priority Support</span>
                    </li>
                  </ul>

                  <div className="space-y-3">
                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                      Choose Progress
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white/10 rounded-xl py-3 bg-transparent font-medium"
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      Gift This Program
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Transformation */}
              <Card className="bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Transformation</h3>
                    <div className="text-4xl font-bold text-slate-900 mb-1">
                      $689<span className="text-lg text-slate-600 font-normal">/mo</span>
                    </div>
                    <p className="text-slate-600 font-normal">Complete wellness journey</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">12 In-Home Sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Complete Wellness Plan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Weekly Reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Lifestyle Guidance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-normal">Priority Scheduling</span>
                    </li>
                  </ul>

                  <div className="space-y-3">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                      Choose Transformation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl py-3 bg-transparent font-medium"
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      Gift This Program
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section - Premium Layout */}
        <section id="story" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 mb-6 font-medium">Our Story</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Wisdom in Motion
                  </h2>
                </div>

                <div className="space-y-6 text-lg font-normal text-slate-600 leading-relaxed">
                  <p>
                    Eva's journey from Ukraine to Victoria taught her that strength isn't just physical. It's the
                    courage to start anew, the resilience to overcome, and the passion to lift others up.
                  </p>
                  <p>
                    Watching her own grandmother lose independence unnecessarily, she saw a need. She envisioned a
                    service that honored experience while building the strength to share it.
                  </p>
                  <p>
                    PRIME STRENGTH is that vision realized—a bridge between isolation and community, a tool that gives
                    independence back.
                  </p>
                </div>

                <Card className="bg-white border-0 shadow-xl rounded-2xl">
                  <CardContent className="p-8">
                    <blockquote className="text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
                      "We strengthen those who've given the most, so they can keep giving."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 relative">
                        <Image
                          src="/prime-strength-logo.png"
                          alt="Eva - PRIME STRENGTH Founder"
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Eva</p>
                        <p className="text-slate-600 font-normal">Founder & Lead Trainer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Eva+Founder+Portrait"
                    alt="Eva, Founder of PRIME STRENGTH"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Premium Form */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 font-medium mb-6">
                  Get Started
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Your Experience Deserves Our Expertise
                </h2>
                <p className="text-xl font-normal text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  We're here to honor your journey and support your goals. Multiple ways to connect with us.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <a
                      href="tel:778-678-9831"
                      className="flex items-center gap-4 p-6 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">(778) 678-9831</div>
                        <div className="text-slate-600 font-normal">Call Eva directly</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-lg">eva@primestrength.ca</div>
                        <div className="text-slate-600 font-normal">We respond within 24 hours</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-lg">Greater Victoria, BC</div>
                        <div className="text-slate-600 font-normal">Serving all neighborhoods</div>
                      </div>
                    </div>
                  </div>

                  <BookingSystem />
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section - Premium */}
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Stay Strong, Stay Connected</h2>
              <p className="text-xl font-normal text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get weekly strength tips, success stories, and exclusive content for Victoria's most experienced
                residents.
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 relative">
                    <Image src="/prime-strength-logo.png" alt="PRIME STRENGTH Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">PRIME STRENGTH</h3>
                    <p className="text-slate-600 text-sm font-normal">Experience Deserves Strength</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 max-w-md font-normal leading-relaxed">
                  Founded by Eva, strengthening society's most experienced members, enabling them to share their wisdom
                  and live with the vitality their lifetime of contribution deserves.
                </p>
                <ShareButtons variant="footer" />
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-slate-900">Programs</h4>
                <div className="space-y-2 text-slate-600">
                  <Link href="#programs" className="block hover:text-slate-900 transition-colors font-normal">
                    Foundation
                  </Link>
                  <Link href="#programs" className="block hover:text-slate-900 transition-colors font-normal">
                    Progress
                  </Link>
                  <Link href="#programs" className="block hover:text-slate-900 transition-colors font-normal">
                    Transformation
                  </Link>
                  <Link href="#" className="block hover:text-slate-900 transition-colors font-normal">
                    Gift Programs
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
                <div className="space-y-2 text-slate-600">
                  <Link href="#story" className="block hover:text-slate-900 transition-colors font-normal">
                    Our Story
                  </Link>
                  <Link href="#testimonials" className="block hover:text-slate-900 transition-colors font-normal">
                    Success Stories
                  </Link>
                  <Link href="#" className="block hover:text-slate-900 transition-colors font-normal">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="block hover:text-slate-900 transition-colors font-normal">
                    Terms of Service
                  </Link>
                  <Link href="#" className="block hover:text-slate-900 transition-colors font-normal">
                    Accessibility
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-600 mb-4 md:mb-0 font-normal">
                &copy; {new Date().getFullYear()} PRIME STRENGTH. All Rights Reserved.
              </p>
              <div className="flex items-center gap-2 text-slate-600 font-normal">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Victoria, BC</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
