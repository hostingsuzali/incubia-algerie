import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { WebVitalsReporter } from "@/components/web-vitals-reporter"
import { SecurityMonitor } from "@/components/security-monitor"
import { PerformanceMonitor } from "@/components/performance-monitor"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://incubia-algerie-v0.vercel.app'), // Replace with your actual domain
  title: {
    default: "Incubia Algérie — Incubateur & Accélérateur de Startups",
    template: "%s | Incubia Algérie",
  },
  description:
    "Incubateur et accélérateur de startups en Algérie. Accompagnement, formations, MVP building, SaaS development. Transformez votre idée en startup à succès avec Incubia.",
  keywords: [
    "incubateur algérie",
    "startup algérie",
    "accélérateur startup",
    "accompagnement entrepreneurial",
    "formation entrepreneuriat",
    "MVP development algérie",
    "SaaS development",
    "financement startup",
    "ANSEJ",
    "CNAC",
    "incubation alger",
    "mentors startup",
    "coworking alger",
  ],
  authors: [{ name: "Incubia Algérie" }],
  creator: "Incubia Algérie",
  publisher: "Incubia Algérie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: "https://incubia-algerie-v0.vercel.app",
    siteName: "Incubia Algérie",
    title: "Incubia Algérie — Incubateur & Accélérateur de Startups",
    description:
      "Transformez votre idée en startup à succès. Accompagnement, formations, et services tech pour entrepreneurs algériens.",
    images: [
      {
        url: "/og-image.jpg", // Create this image: 1200x630px
        width: 1200,
        height: 630,
        alt: "Incubia Algérie - Incubateur de Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incubia Algérie — Incubateur & Accélérateur de Startups",
    description:
      "Transformez votre idée en startup à succès. Accompagnement, formations, et services tech.",
    images: ["/og-image.jpg"],
    creator: "@incubia", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Incubia Algérie",
              "description": "Incubateur et accélérateur de startups en Algérie",
              "url": "https://incubia-algerie-v0.vercel.app",
              "logo": "https://incubia-algerie-v0.vercel.app/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+213-XX-XX-XX-XX",
                "contactType": "Customer Service",
                "areaServed": "DZ",
                "availableLanguage": ["French", "Arabic"]
              },
              "sameAs": [
                "https://facebook.com/incubia",
                "https://twitter.com/incubia",
                "https://linkedin.com/company/incubia",
                "https://instagram.com/incubia"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <WebVitalsReporter />
        <SecurityMonitor />
        <PerformanceMonitor />
      </body>
    </html>
  )
}
