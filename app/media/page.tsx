"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Heart, Share2, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const FEATURED_VIDEOS = [
  {
    id: "1",
    title: "Margaret's Transformation: From Worried to Wonderful",
    description: "78-year-old retired teacher shares her incredible strength journey",
    thumbnail: "/placeholder.svg?height=300&width=400&text=Margaret+Video",
    duration: "3:42",
    views: "2.1K",
    category: "Success Stories",
    embedId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "2",
    title: "5-Minute Morning Routine for Seniors",
    description: "Simple exercises you can do at home to start your day strong",
    thumbnail: "/placeholder.svg?height=300&width=400&text=Morning+Routine",
    duration: "5:12",
    views: "5.7K",
    category: "Exercise Tips",
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Family Session: Three Generations Getting Strong",
    description: "Watch as grandmother, daughter, and granddaughter exercise together",
    thumbnail: "/placeholder.svg?height=300&width=400&text=Family+Session",
    duration: "4:28",
    views: "3.2K",
    category: "Family Fitness",
    embedId: "dQw4w9WgXcQ",
  },
]

const SOCIAL_POSTS = [
  {
    id: "1",
    platform: "Facebook",
    content:
      "🌟 INCREDIBLE NEWS! Our member Patricia just completed her first 5K walk in 10 years! At 75, she's proving that strength has no expiration date. #PrimeStrength #SeniorFitness #VictoriaBC",
    image: "/placeholder.svg?height=300&width=400&text=Patricia+5K",
    likes: 127,
    comments: 23,
    shares: 15,
    date: "2 days ago",
  },
  {
    id: "2",
    platform: "Instagram",
    content:
      "✨ Monday Motivation: 'I thought my strong days were behind me. PRIME STRENGTH proved me wrong!' - Robert, 82, Veteran 💪 #MondayMotivation #SeniorStrength #NeverTooLate",
    image: "/placeholder.svg?height=300&width=400&text=Robert+Motivation",
    likes: 89,
    comments: 12,
    shares: 8,
    date: "3 days ago",
  },
  {
    id: "3",
    platform: "Facebook",
    content:
      "🏡 HOME VISIT HIGHLIGHT: Today we brought our reformer pilates to the beautiful Broadmead Care community! 12 residents experienced their first session and the smiles say it all! 😊 #CommunityOutreach #BroadmeadCare",
    image: "/placeholder.svg?height=300&width=400&text=Broadmead+Visit",
    likes: 156,
    comments: 31,
    shares: 22,
    date: "1 week ago",
  },
]

const CATEGORIES = [
  "All",
  "Success Stories",
  "Exercise Tips",
  "Family Fitness",
  "Community Outreach",
  "Health Education",
]

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredVideos =
    selectedCategory === "All"
      ? FEATURED_VIDEOS
      : FEATURED_VIDEOS.filter((video) => video.category === selectedCategory)

  return (
    <div className="min-h-screen bg-prime-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-prime-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 gradient-prime rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="font-bold text-xl text-prime-900 tracking-tight">PRIME STRENGTH</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-prime-600 hover:text-prime-900 transition-colors">
                Home
              </Link>
              <Link
                href="#programs"
                className="text-sm font-medium text-prime-600 hover:text-prime-900 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/knowledge"
                className="text-sm font-medium text-prime-600 hover:text-prime-900 transition-colors"
              >
                Knowledge Library
              </Link>
              <Button
                size="sm"
                className="bg-prime-900 hover:bg-prime-800 text-white px-6 py-2.5 rounded-xl font-semibold"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="bg-rose-50 text-rose-700 border-rose-200 px-4 py-2 font-medium mb-6">Media Center</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-prime-900 mb-6 tracking-tight">Stories That Inspire</h1>
            <p className="text-xl text-prime-600 max-w-2xl mx-auto leading-relaxed">
              Watch real transformations, learn from our experts, and join a community that celebrates strength at every
              age.
            </p>
          </div>

          {/* Video Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-prime-900">Featured Videos</h2>
              <div className="flex gap-2 overflow-x-auto">
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-xl ${
                      selectedCategory === category
                        ? "bg-prime-900 hover:bg-prime-800 text-white"
                        : "border-prime-300 text-prime-700 hover:bg-prime-50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <Card
                  key={video.id}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedVideo(video.embedId)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-prime-900 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-prime-900/80 text-white border-0 mb-2">{video.category}</Badge>
                        <div className="text-white text-sm font-medium">
                          {video.duration} • {video.views} views
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-prime-900 mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-prime-600 text-sm leading-relaxed line-clamp-2">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Social Media Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-prime-900 mb-4">Community Highlights</h2>
              <p className="text-lg text-prime-600 max-w-2xl mx-auto">
                Follow our journey and celebrate the incredible achievements of our PRIME STRENGTH family.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {SOCIAL_POSTS.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt="Social media post"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            post.platform === "Facebook"
                              ? "bg-blue-600 text-white"
                              : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          } border-0`}
                        >
                          {post.platform}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-prime-700 mb-4 leading-relaxed">{post.content}</p>
                      <div className="flex items-center justify-between text-sm text-prime-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {post.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            {post.shares}
                          </span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="gradient-prime text-white rounded-3xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Story?</h2>
                <p className="text-xl text-prime-100 mb-8 max-w-2xl mx-auto">
                  Join hundreds of Victoria residents who've discovered that their strongest days are ahead of them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-prime-900 hover:bg-prime-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Link href="/#contact">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Your Free Assessment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
                  >
                    <Link href="/knowledge">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Explore Knowledge Library
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <Button
                onClick={() => setSelectedVideo(null)}
                className="bg-prime-900 hover:bg-prime-800 text-white rounded-xl"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
