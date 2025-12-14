"use client"

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'

export function WebVitalsReporter() {
    useEffect(() => {
        // Function to send metrics to analytics
        function sendToAnalytics(metric: Metric) {
            // Log to console in development
            if (process.env.NODE_ENV === 'development') {
                console.log('[Web Vitals]', metric.name, metric.value, metric.rating)
            }

            // Send to Google Analytics if available
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', metric.name, {
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    event_category: 'Web Vitals',
                    event_label: metric.id,
                    non_interaction: true,
                })
            }

            // Send to Vercel Analytics (automatically handled by @vercel/analytics)
            // You can also send to custom analytics endpoint
            if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
                fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: metric.name,
                        value: metric.value,
                        rating: metric.rating,
                        delta: metric.delta,
                        id: metric.id,
                        navigationType: metric.navigationType,
                    }),
                }).catch(console.error)
            }
        }

        // Register all Web Vitals metrics
        onCLS(sendToAnalytics)  // Cumulative Layout Shift
        onFCP(sendToAnalytics)  // First Contentful Paint
        onLCP(sendToAnalytics)  // Largest Contentful Paint
        onTTFB(sendToAnalytics) // Time to First Byte
        onINP(sendToAnalytics)  // Interaction to Next Paint (replaces FID)
    }, [])

    return null
}
