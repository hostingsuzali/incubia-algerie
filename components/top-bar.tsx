"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function TopBar() {
  const [language, setLanguage] = useState<"FR" | "AR">("FR")

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "AR" : "FR")
  }

  return (
    <div className="border-b border-foreground/10 bg-white/50 backdrop-blur-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Left: Small logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logoincubia.svg"
              alt="Incubia Logo"
              width={80}
              height={18}
              className="h-5 w-auto"
            />
          </Link>

          {/* Center: Micro-links */}
          <nav className="hidden md:flex items-center gap-4 text-foreground/60">
            <Link href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <span className="text-foreground/30">•</span>
            <Link href="/support" className="hover:text-foreground transition-colors">
              Support
            </Link>
            <span className="text-foreground/30">•</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span className="text-foreground/30">•</span>
            <Link href="/postuler" className="hover:text-foreground transition-colors">
              Postuler
            </Link>
          </nav>

          {/* Right: Language toggle + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language}</span>
            </button>
            <Button
              size="sm"
              className="h-7 px-3 text-xs bg-foreground hover:bg-foreground/90 text-background rounded-full font-medium"
              asChild
            >
              <Link href="/programmes">Rejoindre Incubia</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

