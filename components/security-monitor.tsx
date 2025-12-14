"use client"

import { useEffect } from 'react'

export function SecurityMonitor() {
    useEffect(() => {
        // Monitor for security violations
        if (typeof window !== 'undefined') {
            // CSP Violation Reporting
            document.addEventListener('securitypolicyviolation', (e) => {
                console.error('[Security] CSP Violation:', {
                    blockedURI: e.blockedURI,
                    violatedDirective: e.violatedDirective,
                    originalPolicy: e.originalPolicy,
                })

                // Send to monitoring service
                if (process.env.NEXT_PUBLIC_SECURITY_ENDPOINT) {
                    fetch(process.env.NEXT_PUBLIC_SECURITY_ENDPOINT, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            type: 'csp_violation',
                            blockedURI: e.blockedURI,
                            violatedDirective: e.violatedDirective,
                            timestamp: new Date().toISOString(),
                            userAgent: navigator.userAgent,
                        }),
                    }).catch(console.error)
                }
            })

            // Monitor for console errors
            const originalError = console.error
            console.error = function (...args) {
                // Log errors in production
                if (process.env.NODE_ENV === 'production') {
                    // Send to error tracking service
                    if (process.env.NEXT_PUBLIC_ERROR_ENDPOINT) {
                        fetch(process.env.NEXT_PUBLIC_ERROR_ENDPOINT, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                type: 'console_error',
                                message: args.join(' '),
                                timestamp: new Date().toISOString(),
                                url: window.location.href,
                                userAgent: navigator.userAgent,
                            }),
                        }).catch(() => { })
                    }
                }
                originalError.apply(console, args)
            }

            // Monitor for unhandled promise rejections
            window.addEventListener('unhandledrejection', (event) => {
                console.error('[Security] Unhandled Promise Rejection:', event.reason)

                if (process.env.NEXT_PUBLIC_ERROR_ENDPOINT) {
                    fetch(process.env.NEXT_PUBLIC_ERROR_ENDPOINT, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            type: 'unhandled_rejection',
                            reason: String(event.reason),
                            timestamp: new Date().toISOString(),
                            url: window.location.href,
                        }),
                    }).catch(console.error)
                }
            })

            // Monitor for JavaScript errors
            window.addEventListener('error', (event) => {
                console.error('[Security] JavaScript Error:', event.message)

                if (process.env.NEXT_PUBLIC_ERROR_ENDPOINT) {
                    fetch(process.env.NEXT_PUBLIC_ERROR_ENDPOINT, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            type: 'javascript_error',
                            message: event.message,
                            filename: event.filename,
                            lineno: event.lineno,
                            colno: event.colno,
                            timestamp: new Date().toISOString(),
                            url: window.location.href,
                        }),
                    }).catch(console.error)
                }
            })

            // Check for HTTPS
            if (window.location.protocol !== 'https:' && process.env.NODE_ENV === 'production') {
                console.warn('[Security] Site is not served over HTTPS')
            }

            // Check for mixed content
            const checkMixedContent = () => {
                const images = document.querySelectorAll('img')
                const scripts = document.querySelectorAll('script')
                const links = document.querySelectorAll('link')

                const checkResource = (element: Element, attr: string) => {
                    const src = element.getAttribute(attr)
                    if (src && src.startsWith('http:') && window.location.protocol === 'https:') {
                        console.warn('[Security] Mixed content detected:', src)
                    }
                }

                images.forEach(img => checkResource(img, 'src'))
                scripts.forEach(script => checkResource(script, 'src'))
                links.forEach(link => checkResource(link, 'href'))
            }

            // Run mixed content check after page load
            setTimeout(checkMixedContent, 1000)
        }
    }, [])

    return null
}
