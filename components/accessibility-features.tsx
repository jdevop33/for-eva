"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Type, Contrast, Volume2, X } from "lucide-react"

export function AccessibilityFeatures() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  useEffect(() => {
    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  useEffect(() => {
    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms")
    } else {
      document.documentElement.style.removeProperty("--animation-duration")
    }
  }, [reducedMotion])

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 p-0 shadow-xl"
        aria-label="Open accessibility options"
      >
        <Settings className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 bg-white shadow-2xl border-2 border-blue-200 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            Accessibility
          </h3>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="rounded-full w-8 h-8 p-0">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Font Size */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <Type className="w-4 h-4" />
              Text Size: {fontSize}%
            </label>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                className="flex-1"
              >
                A-
              </Button>
              <Button size="sm" variant="outline" onClick={() => setFontSize(100)} className="flex-1">
                Reset
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                className="flex-1"
              >
                A+
              </Button>
            </div>
          </div>

          {/* High Contrast */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <Contrast className="w-4 h-4" />
              High Contrast
            </label>
            <Button
              size="sm"
              variant={highContrast ? "default" : "outline"}
              onClick={() => setHighContrast(!highContrast)}
              className="w-full"
            >
              {highContrast ? "Disable" : "Enable"} High Contrast
            </Button>
          </div>

          {/* Reduced Motion */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
              <Volume2 className="w-4 h-4" />
              Reduce Motion
            </label>
            <Button
              size="sm"
              variant={reducedMotion ? "default" : "outline"}
              onClick={() => setReducedMotion(!reducedMotion)}
              className="w-full"
            >
              {reducedMotion ? "Enable" : "Disable"} Animations
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="border-t border-slate-200 pt-4">
            <p className="text-xs text-slate-600 mb-3">Quick Actions:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setFontSize(120)
                  setHighContrast(true)
                }}
                className="text-xs"
              >
                Senior Mode
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setFontSize(100)
                  setHighContrast(false)
                  setReducedMotion(false)
                }}
                className="text-xs"
              >
                Reset All
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
