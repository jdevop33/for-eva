"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar, Gift, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button className="lg:hidden ml-auto" size="icon" variant="ghost" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative">
                    <Image src="/prime-strength-logo.png" alt="PRIME STRENGTH Logo" fill className="object-contain" />
                  </div>
                  <span className="font-serif text-lg font-bold text-slate-800">PRIME STRENGTH</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="space-y-4">
                <Link
                  href="#programs"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Programs</span>
                </Link>

                <Link
                  href="#story"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-medium">Our Story</span>
                </Link>

                <Link
                  href="#testimonials"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-blue-500 rounded-full"></div>
                  <span className="font-medium">Success Stories</span>
                </Link>

                <div className="border-t border-slate-200 pt-4 mt-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl h-12 mb-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#contact">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Assessment
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-slate-300 rounded-xl h-12 mb-3 bg-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Gift a Program
                  </Button>

                  <a
                    href="tel:778-678-9831"
                    className="flex items-center justify-center gap-2 w-full p-3 bg-green-50 text-green-700 rounded-xl font-medium hover:bg-green-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call (778) 678-9831
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
