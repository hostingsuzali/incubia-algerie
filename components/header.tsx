"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-xl">I</span>
            </div>
            <span className="text-xl font-bold text-foreground">Incubia</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#programme" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
              Programme
            </Link>
            <Link href="#services" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
              Services
            </Link>
            <Link href="#ressources" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
              Ressources
            </Link>
            <Link href="#success" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
              Success Stories
            </Link>
            <Link href="#faq" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
              FAQ
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-semibold">
              Parler à un expert
            </Button>
            <Button
              size="sm"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full font-semibold"
            >
              Rejoindre le programme
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-foreground/10">
            <nav className="flex flex-col gap-4">
              <Link
                href="#programme"
                className="text-foreground/60 hover:text-foreground transition-colors font-medium"
              >
                Programme
              </Link>
              <Link href="#services" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
                Services
              </Link>
              <Link
                href="#ressources"
                className="text-foreground/60 hover:text-foreground transition-colors font-medium"
              >
                Ressources
              </Link>
              <Link href="#success" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
                Success Stories
              </Link>
              <Link href="#faq" className="text-foreground/60 hover:text-foreground transition-colors font-medium">
                FAQ
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" size="sm" className="rounded-full border-2 bg-transparent">
                  Parler à un expert
                </Button>
                <Button size="sm" className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
                  Rejoindre le programme
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
