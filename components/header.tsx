"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Rocket, Zap, Users, BookOpen, FileText, Lightbulb, Briefcase, DollarSign, GraduationCap, ChevronRight, Sparkles, Building2, MapPin, Cloud } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#E7EBE9]/50 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center h-16 lg:h-[80px] gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logoincubia.svg"
              alt="Incuba-DZ Logo"
              width={140}
              height={30}
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 gap-2">
            {/* PROGRAMMES */}
            <div className="relative"
              onMouseEnter={() => setOpenDropdown('programmes')}
              onMouseLeave={() => setOpenDropdown(null)}
              ref={dropdownRef}>
              <DropdownMenu open={openDropdown === 'programmes'}>
                <DropdownMenuTrigger className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold outline-none text-base px-4 py-2.5 hover:bg-[#F9FAF9] rounded-xl">
                  Accompagnement
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[420px] p-3 shadow-xl border-[#E7EBE9]" onMouseEnter={() => setOpenDropdown('programmes')}>
                  <div className="px-3 py-3 mb-2">
                    <h3 className="font-bold text-base text-[#0D1F1A] mb-1.5">Offres d'Accompagnement</h3>
                    <p className="text-xs text-[#47534E] leading-relaxed">Parcours structurés pour transformer votre idée en entreprise rentable</p>
                  </div>
                  <DropdownMenuSeparator className="my-2" />

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/accompagnement" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] text-white shadow-lg shadow-[#1B1AFE]/20 group-hover:scale-110 transition-transform">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Incubation</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">De l'idée au lancement. Méthodologie Lean Startup et mentoring intensif</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/accompagnement" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white shadow-lg shadow-[#CA9BFA]/20 group-hover:scale-110 transition-transform">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Accélération</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Scalez votre startup et préparez votre levée de fonds</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/equipe#mentors" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] text-white shadow-lg shadow-[#0284C7]/20 group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Réseau de Mentors</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">100+ experts certifiés pour vous guider</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* FORMATIONS - NOUVEAU FOCUS */}
            <div className="relative"
              onMouseEnter={() => setOpenDropdown('formations')}
              onMouseLeave={() => setOpenDropdown(null)}
              ref={dropdownRef}>
              <DropdownMenu open={openDropdown === 'formations'}>
                <DropdownMenuTrigger className="relative text-[#47534E] hover:text-[#CA9BFA] transition-colors font-semibold outline-none text-base px-4 py-2.5 hover:bg-gradient-to-r hover:from-[#CA9BFA]/5 hover:to-[#E9D5FF]/5 rounded-xl">
                  <span className="flex items-center gap-2">
                    Formations
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-[10px] font-bold">
                      <Sparkles className="w-2.5 h-2.5" />
                      NOUVEAU
                    </span>
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[420px] p-3 shadow-xl border-[#E7EBE9]" onMouseEnter={() => setOpenDropdown('formations')}>
                  <div className="px-3 py-3 mb-2 bg-gradient-to-r from-[#CA9BFA]/10 to-[#E9D5FF]/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-5 h-5 text-[#CA9BFA]" />
                      <h3 className="font-bold text-base text-[#0D1F1A]">Formations Certifiantes</h3>
                    </div>
                    <p className="text-xs text-[#47534E] leading-relaxed">Développez vos compétences entrepreneuriales avec nos experts</p>
                  </div>
                  <DropdownMenuSeparator className="my-2" />

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/formations" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white shadow-lg shadow-[#CA9BFA]/20 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#CA9BFA] transition-colors">Catalogue Complet</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">30+ formations en Marketing, Finance, Leadership, Tech</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/formations#masterclass" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] text-white shadow-lg shadow-[#1B1AFE]/20 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Masterclasses</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Sessions intensives avec des entrepreneurs à succès</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/formations#b2b" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-lg shadow-[#059669]/20 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#059669] transition-colors">Formations B2B</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Programmes sur-mesure pour vos équipes</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* SERVICES */}
            <div className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
              ref={dropdownRef}>
              <DropdownMenu open={openDropdown === 'services'}>
                <DropdownMenuTrigger className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold outline-none text-base px-4 py-2.5 hover:bg-[#F9FAF9] rounded-xl">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[420px] p-3 shadow-xl border-[#E7EBE9]" onMouseEnter={() => setOpenDropdown('services')}>
                  <div className="px-3 py-3 mb-2">
                    <h3 className="font-bold text-base text-[#0D1F1A] mb-1.5">Services Complémentaires</h3>
                    <p className="text-xs text-[#47534E] leading-relaxed">Infrastructure essentielle pour votre réussite</p>
                  </div>
                  <DropdownMenuSeparator className="my-2" />

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/services/domiciliation" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] text-white shadow-lg shadow-[#0284C7]/20 group-hover:scale-110 transition-transform">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#0284C7] transition-colors">Domiciliation</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Adresse légale et siège social pour votre entreprise</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/services/coworking" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white shadow-lg shadow-[#CA9BFA]/20 group-hover:scale-110 transition-transform">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#CA9BFA] transition-colors">Espace Coworking</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Bureaux équipés et environnement stimulant</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/services/financement" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-lg shadow-[#059669]/20 group-hover:scale-110 transition-transform">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#059669] transition-colors">Aide au Financement</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Constitution de dossiers ANSEJ, CNAC, ANDI</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* RESSOURCES */}
            <div className="relative"
              onMouseEnter={() => setOpenDropdown('ressources')}
              onMouseLeave={() => setOpenDropdown(null)}
              ref={dropdownRef}>
              <DropdownMenu open={openDropdown === 'ressources'}>
                <DropdownMenuTrigger className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold outline-none text-base px-4 py-2.5 hover:bg-[#F9FAF9] rounded-xl">
                  Ressources
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[380px] p-3 shadow-xl border-[#E7EBE9]" onMouseEnter={() => setOpenDropdown('ressources')}>
                  <div className="px-3 py-3 mb-2">
                    <h3 className="font-bold text-base text-[#0D1F1A] mb-1.5">Hub Ressources</h3>
                    <p className="text-xs text-[#47534E] leading-relaxed">Outils et contenus pour entrepreneurs</p>
                  </div>
                  <DropdownMenuSeparator className="my-2" />

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/ressources#guides" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-[#1B1AFE]/10 text-[#1B1AFE] group-hover:bg-[#1B1AFE] group-hover:text-white transition-all">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Guides Pratiques</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Guides pour développer votre startup</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/ressources#templates" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-[#1B1AFE]/10 text-[#1B1AFE] group-hover:bg-[#1B1AFE] group-hover:text-white transition-all">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Templates</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Modèles prêts à l'emploi</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="p-0">
                    <Link href="/blog" className="flex items-start gap-3 px-3 py-3.5 rounded-xl hover:bg-[#F9FAF9] transition-all group">
                      <div className="mt-0.5 p-2.5 rounded-xl bg-[#1B1AFE]/10 text-[#1B1AFE] group-hover:bg-[#1B1AFE] group-hover:text-white transition-all">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm text-[#0D1F1A] group-hover:text-[#1B1AFE] transition-colors">Blog</h4>
                          <ChevronRight className="w-4 h-4 text-[#47534E] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-[#47534E] leading-relaxed">Articles et insights</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Link href="/contact" className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold text-base px-4 py-2.5 hover:bg-[#F9FAF9] rounded-xl">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              size="lg"
              className="border-2 border-[#1B1AFE] text-[#1B1AFE] bg-white hover:bg-[#1B1AFE]/5 py-3 px-6 rounded-full font-semibold transition-all h-auto"
              asChild
            >
              <Link href="/contact">Parler à un Expert</Link>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF] hover:opacity-90 text-white py-3 px-6 rounded-full font-bold transition-all h-auto shadow-lg shadow-[#1B1AFE]/30"
              asChild
            >
              <Link href="/postuler">Je Lance Mon Projet</Link>
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#E7EBE9]">
            <nav className="flex flex-col gap-3">
              <Link href="/accompagnement" className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold text-base py-2">
                Accompagnement
              </Link>
              <Link href="/formations" className="text-[#47534E] hover:text-[#CA9BFA] transition-colors font-semibold text-base py-2 flex items-center gap-2">
                Formations
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-[10px] font-bold">NOUVEAU</span>
              </Link>
              <Link href="/services" className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold text-base py-2">
                Services
              </Link>
              <Link href="/ressources" className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold text-base py-2">
                Ressources
              </Link>
              <Link href="/contact" className="text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold text-base py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-[#1B1AFE] text-[#1B1AFE] hover:bg-[#1B1AFE]/5 py-3 px-8 rounded-full font-semibold h-auto"
                  asChild
                >
                  <Link href="/contact">Parler à un Expert</Link>
                </Button>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF] text-white py-3 px-8 rounded-full font-bold h-auto"
                  asChild
                >
                  <Link href="/postuler">Je Lance Mon Projet</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
