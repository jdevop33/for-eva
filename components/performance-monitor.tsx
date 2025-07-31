"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime)
            // Track to analytics
            if (window.gtag) {
              window.gtag("event", "web_vitals", {
                event_category: "Performance",
                event_label: "LCP",
                value: Math.round(entry.startTime),
                custom_parameter_1: "senior_fitness_site",
              })
            }
          }
        }
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        console.log("Performance observer not supported")
      }

      // First Input Delay (FID) - via event listener
      const handleFirstInput = (event: any) => {
        console.log("FID:", event.processingStart - event.startTime)
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Performance",
            event_label: "FID",
            value: Math.round(event.processingStart - event.startTime),
            custom_parameter_1: "senior_fitness_site",
          })
        }
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
      })

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        console.log("Layout shift observer not supported")
      }

      // Report CLS on page unload
      const reportCLS = () => {
        console.log("CLS:", clsValue)
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Performance",
            event_label: "CLS",
            value: Math.round(clsValue * 1000),
            custom_parameter_1: "senior_fitness_site",
          })
        }
      }

      window.addEventListener("beforeunload", reportCLS)
      window.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          reportCLS()
        }
      })

      return () => {
        observer.disconnect()
        clsObserver.disconnect()
        window.removeEventListener("beforeunload", reportCLS)
      }
    }
  }, [])

  return null
}
