"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
    pageLoadTime: number
    domContentLoaded: number
    firstPaint: number
    firstContentfulPaint: number
    resourceCount: number
    totalResourceSize: number
}

export function PerformanceMonitor() {
    const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const measurePerformance = () => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            const paint = performance.getEntriesByType('paint')
            const resources = performance.getEntriesByType('resource')

            const totalSize = resources.reduce((sum, resource: any) => {
                return sum + (resource.transferSize || 0)
            }, 0)

            const performanceMetrics: PerformanceMetrics = {
                pageLoadTime: navigation?.loadEventEnd - navigation?.fetchStart || 0,
                domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.fetchStart || 0,
                firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
                firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
                resourceCount: resources.length,
                totalResourceSize: totalSize,
            }

            setMetrics(performanceMetrics)

            // Log performance metrics
            if (process.env.NODE_ENV === 'development') {
                console.log('[Performance Metrics]', {
                    'Page Load Time': `${Math.round(performanceMetrics.pageLoadTime)}ms`,
                    'DOM Content Loaded': `${Math.round(performanceMetrics.domContentLoaded)}ms`,
                    'First Paint': `${Math.round(performanceMetrics.firstPaint)}ms`,
                    'First Contentful Paint': `${Math.round(performanceMetrics.firstContentfulPaint)}ms`,
                    'Resources': performanceMetrics.resourceCount,
                    'Total Size': `${(performanceMetrics.totalResourceSize / 1024).toFixed(2)} KB`,
                })
            }

            // Send to analytics
            if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
                fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        type: 'performance',
                        metrics: performanceMetrics,
                        url: window.location.href,
                        timestamp: new Date().toISOString(),
                        userAgent: navigator.userAgent,
                    }),
                }).catch(console.error)
            }

            // Check for performance issues
            if (performanceMetrics.pageLoadTime > 3000) {
                console.warn('[Performance] Slow page load detected:', performanceMetrics.pageLoadTime, 'ms')
            }

            if (performanceMetrics.firstContentfulPaint > 2500) {
                console.warn('[Performance] Slow FCP detected:', performanceMetrics.firstContentfulPaint, 'ms')
            }

            if (performanceMetrics.totalResourceSize > 2 * 1024 * 1024) { // 2MB
                console.warn('[Performance] Large page size:', (performanceMetrics.totalResourceSize / 1024 / 1024).toFixed(2), 'MB')
            }
        }

        // Measure after page load
        if (document.readyState === 'complete') {
            measurePerformance()
        } else {
            window.addEventListener('load', measurePerformance)
            return () => window.removeEventListener('load', measurePerformance)
        }
    }, [])

    // Show performance badge in development
    if (process.env.NODE_ENV === 'development' && metrics) {
        return (
            <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white text-xs p-3 rounded-lg shadow-lg max-w-xs">
                <div className="font-bold mb-2">⚡ Performance</div>
                <div className="space-y-1">
                    <div>Load: {Math.round(metrics.pageLoadTime)}ms</div>
                    <div>FCP: {Math.round(metrics.firstContentfulPaint)}ms</div>
                    <div>Resources: {metrics.resourceCount}</div>
                    <div>Size: {(metrics.totalResourceSize / 1024).toFixed(0)}KB</div>
                </div>
            </div>
        )
    }

    return null
}
