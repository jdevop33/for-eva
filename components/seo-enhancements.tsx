"use client"

import { useEffect } from "react"

export function SEOEnhancements() {
  useEffect(() => {
    // Add structured data for FAQ
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is PRIME STRENGTH?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PRIME STRENGTH is a professional, in-home reformer pilates service for Victoria's most experienced residents, founded by Eva. We bring strength training directly to your home.",
          },
        },
        {
          "@type": "Question",
          name: "Do you serve all of Greater Victoria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we serve all neighborhoods in Greater Victoria, BC including Oak Bay, Saanich, Esquimalt, and surrounding areas.",
          },
        },
        {
          "@type": "Question",
          name: "What age group do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in working with experienced adults, typically 50+ years old, who want to maintain or improve their strength, balance, and independence.",
          },
        },
        {
          "@type": "Question",
          name: "How much do your programs cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our programs range from $289/month for Foundation to $689/month for Transformation. We also offer gift programs for families.",
          },
        },
      ],
    }

    // Add review structured data
    const reviewStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PRIME STRENGTH",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Margaret K.",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I can play with my grandchildren on the floor again, without any fear. My 40 years of teaching deserves this strength.",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Robert P.",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "My balance was a concern. Now I walk with confidence I haven't felt in years. Ready to share my stories again.",
        },
      ],
    }

    // Add service structured data
    const serviceStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "In-Home Reformer Pilates for Seniors",
      provider: {
        "@type": "LocalBusiness",
        name: "PRIME STRENGTH",
        founder: {
          "@type": "Person",
          name: "Eva",
        },
      },
      areaServed: {
        "@type": "City",
        name: "Victoria",
        containedInPlace: {
          "@type": "Province",
          name: "British Columbia",
        },
      },
      serviceType: "Senior Fitness Training",
      description:
        "Professional, in-home reformer pilates specifically designed for Victoria's most experienced residents. We bring equipment and expertise directly to your home.",
      offers: [
        {
          "@type": "Offer",
          name: "Foundation Program",
          price: "289",
          priceCurrency: "CAD",
          description: "4 in-home sessions per month with personal assessment",
        },
        {
          "@type": "Offer",
          name: "Progress Program",
          price: "489",
          priceCurrency: "CAD",
          description: "8 in-home sessions per month with comprehensive assessment",
        },
        {
          "@type": "Offer",
          name: "Transformation Program",
          price: "689",
          priceCurrency: "CAD",
          description: "12 in-home sessions per month with complete wellness plan",
        },
      ],
    }

    // Inject structured data
    const addStructuredData = (data: any, id: string) => {
      const existingScript = document.getElementById(id)
      if (existingScript) {
        existingScript.remove()
      }

      const script = document.createElement("script")
      script.id = id
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    }

    addStructuredData(faqStructuredData, "faq-structured-data")
    addStructuredData(reviewStructuredData, "review-structured-data")
    addStructuredData(serviceStructuredData, "service-structured-data")

    // Add breadcrumb navigation
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://primestrength.ca",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Senior Fitness Victoria",
          item: "https://primestrength.ca#programs",
        },
      ],
    }

    addStructuredData(breadcrumbData, "breadcrumb-structured-data")

    return () => {
      // Cleanup on unmount
      const scripts = [
        "faq-structured-data",
        "review-structured-data",
        "service-structured-data",
        "breadcrumb-structured-data",
      ]
      scripts.forEach((id) => {
        const script = document.getElementById(id)
        if (script) script.remove()
      })
    }
  }, [])

  return null
}
