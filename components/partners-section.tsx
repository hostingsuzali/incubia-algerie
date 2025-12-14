"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const partners = [
    { name: "Hostinger", logo: "/placeholder-logo.svg", tooltip: "Partenariat infrastructure cloud" },
    { name: "HEC", logo: "/placeholder-logo.svg", tooltip: "Programme académique" },
    { name: "Université d'Alger", logo: "/placeholder-logo.svg", tooltip: "Recherche & innovation" },
    { name: "BNA Bank", logo: "/placeholder-logo.svg", tooltip: "Financement startups" },
    { name: "Sonatrach", logo: "/placeholder-logo.svg", tooltip: "Projets énergie" },
    { name: "Algeria Venture", logo: "/placeholder-logo.svg", tooltip: "Investissement tech" },
  ]

  return (
    <section ref={sectionRef} className="py-12 bg-white border-y border-[#E7EBE9] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div 
          className={`text-center transition-all duration-500 mb-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-sm text-[#47534E] uppercase tracking-wider font-medium">
            Ils nous font confiance
          </p>
        </div>
        <TooltipProvider>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partners.slice(0, 6).map((partner, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div 
                    className={`flex items-center justify-center cursor-pointer group ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-6 scale-90'
                    }`}
                    style={{
                      transition: 'all 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={100}
                        height={50}
                        className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">{partner.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
