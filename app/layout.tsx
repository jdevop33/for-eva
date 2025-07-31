import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { GoogleAnalytics, Analytics } from "@/components/analytics"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { SEOEnhancements } from "@/components/seo-enhancements"
import { AccessibilityFeatures } from "@/components/accessibility-features"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "PRIME STRENGTH - Experience Deserves Strength | Victoria BC Senior Fitness",
  description:
    "Professional, in-home reformer pilates for Victoria's most experienced residents. Founded by Eva, we strengthen society's most valuable members, enabling them to share their wisdom and live with the vitality their lifetime of contribution deserves.",
  keywords: [
    "senior fitness Victoria BC",
    "in-home pilates Victoria",
    "reformer pilates seniors",
    "mobile fitness training Victoria",
    "strength training elderly BC",
    "Victoria senior wellness",
    "experienced adults fitness",
    "premium senior care Victoria",
    "Eva Prime Strength",
    "senior pilates instructor Victoria",
    "home fitness seniors BC",
    "elderly exercise programs Victoria",
    "Oak Bay senior fitness",
    "Saanich senior pilates",
    "Esquimalt senior wellness",
  ],
  authors: [{ name: "Eva", url: "https://primestrength.ca" }],
  creator: "Eva - PRIME STRENGTH",
  publisher: "PRIME STRENGTH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://primestrength.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PRIME STRENGTH - Experience Deserves Strength",
    description:
      "Professional, in-home reformer pilates for Victoria's most experienced residents. Your lifetime of wisdom deserves a body strong enough to share it. Founded by Eva, serving Greater Victoria BC.",
    url: "https://primestrength.ca",
    siteName: "PRIME STRENGTH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PRIME STRENGTH - Experience Deserves Strength - Professional Senior Fitness Victoria BC",
      },
      {
        url: "/prime-strength-logo.png",
        width: 400,
        height: 400,
        alt: "PRIME STRENGTH Logo - Heart with embracing hands",
      },
    ],
    locale: "en_CA",
    type: "website",
    countryName: "Canada",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME STRENGTH - Experience Deserves Strength",
    description:
      "Professional, in-home reformer pilates for Victoria's most experienced residents. Your lifetime of wisdom deserves a body strong enough to share it.",
    images: ["/og-image.png"],
    creator: "@primestrength",
    site: "@primestrength",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "CA-BC",
    "geo.placename": "Victoria",
    "geo.position": "48.4284;-123.3656",
    ICBM: "48.4284, -123.3656",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PRIME STRENGTH",
  description:
    "Professional, in-home reformer pilates for Victoria's most experienced residents. We strengthen society's most valuable members.",
  url: "https://primestrength.ca",
  telephone: "+1-778-678-9831",
  email: "eva@primestrength.ca",
  founder: {
    "@type": "Person",
    name: "Eva",
    email: "eva@primestrength.ca",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Victoria",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.4284,
    longitude: -123.3656,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Victoria",
      containedInPlace: {
        "@type": "Province",
        name: "British Columbia",
        containedInPlace: {
          "@type": "Country",
          name: "Canada",
        },
      },
    },
    {
      "@type": "City",
      name: "Oak Bay",
    },
    {
      "@type": "City",
      name: "Saanich",
    },
    {
      "@type": "City",
      name: "Esquimalt",
    },
  ],
  serviceType: ["Senior Fitness", "Reformer Pilates", "In-Home Personal Training", "Strength Training"],
  priceRange: "$289-$689",
  image: "https://primestrength.ca/prime-strength-logo.png",
  logo: "https://primestrength.ca/prime-strength-logo.png",
  sameAs: [
    "https://www.facebook.com/primestrength",
    "https://www.instagram.com/primestrength",
    "https://www.linkedin.com/company/primestrength",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "E-transfer"],
  currenciesAccepted: "CAD",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <GoogleAnalytics />
      </head>
      <body className={cn("min-h-screen bg-slate-50 antialiased", inter.className)}>
        <Suspense>
          {children}
          <Analytics />
          <PerformanceMonitor />
          <SEOEnhancements />
          <AccessibilityFeatures />
        </Suspense>
      </body>
    </html>
  )
}
