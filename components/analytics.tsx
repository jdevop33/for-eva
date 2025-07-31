"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

export function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_path: window.location.pathname,
              custom_map: {
                'custom_parameter_1': 'senior_fitness_victoria',
                'custom_parameter_2': 'prime_strength_eva'
              }
            });
            
            // Track key interactions
            gtag('event', 'page_view', {
              page_title: 'PRIME STRENGTH - Experience Deserves Strength',
              page_location: window.location.href,
              content_group1: 'Senior Fitness',
              content_group2: 'Victoria BC'
            });
          `,
        }}
      />
    </>
  )
}
