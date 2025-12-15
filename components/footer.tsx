import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, Phone, MapPin, Sparkles, Award, TrendingUp } from "lucide-react"

export function Footer() {
  const links = {
    programmes: [
      { label: "Incubation", href: "/accompagnement" },
      { label: "Accélération", href: "/accompagnement" },
      { label: "Réseau de Mentors", href: "/equipe#mentors" },
      { label: "Postuler", href: "/postuler" },
    ],
    formations: [
      { label: "Catalogue Complet", href: "/formations", badge: "NOUVEAU" },
      { label: "Masterclasses", href: "/formations#masterclass" },
      { label: "Formations B2B", href: "/formations#b2b" },
      { label: "Certifications", href: "/formations#certifications" },
    ],
    services: [
      { label: "Domiciliation", href: "/services/domiciliation" },
      { label: "Espace Coworking", href: "/services/coworking" },
      { label: "Aide au Financement", href: "/services/financement" },
      { label: "Création d'Entreprise", href: "/services/creation" },
      { label: "MVP Building", href: "/services/mvp-building", badge: "TECH" },
      { label: "SaaS Platform", href: "/services/saas-platform", badge: "TECH" },
    ],
    ressources: [
      { label: "Guides Pratiques", href: "/ressources#guides" },
      { label: "Templates Gratuits", href: "/ressources#templates" },
      { label: "Blog & Articles", href: "/blog" },
      { label: "Événements", href: "/evenements" },
    ],
    company: [
      { label: "À propos", href: "/a-propos" },
      { label: "Notre Équipe", href: "/equipe" },
      { label: "Partenaires", href: "/partenaires" },
      { label: "Contact", href: "/contact" },
    ],
  }

  const socials = [
    { icon: Facebook, href: "https://facebook.com/incubadz", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/incubadz", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/incubadz", label: "Instagram" },
  ]

  const stats = [
    { icon: Award, value: "20+", label: "Mentors Certifiés" },
    { icon: Sparkles, value: "10+", label: "Formations" },
    { icon: TrendingUp, value: "+16", label: "Projets Accompagnées" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#0D1F1A] via-[#1a1a2e] to-[#0D1F1A] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B1AFE] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#CA9BFA] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Stats Bar */}
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logoincubia.svg"
                  alt="Incubia-algerie Logo"
                  width={160}
                  height={35}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/80 mb-8 leading-relaxed text-base">
                <strong className="text-white">Incuba-DZ</strong> : L'écosystème de référence pour transformer votre vision en réalité. Accompagnement expert, formations stratégiques et réseau puissant.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a href="mailto:contact@incubia-algerie.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">contact@incubia-algerie.com</span>
                </a>
                <a href="tel:+213542999301" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm">+213 542 99 93 01</span>
                </a>
                <div className="flex items-start gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Oran, Algérie</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#CA9BFA]" />
                  Newsletter
                </p>
                <p className="text-xs text-white/60 mb-3">Recevez nos dernières actualités et conseils</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="bg-white/10 border-white/20 hover:border-white/40 focus:border-[#CA9BFA] focus:ring-1 focus:ring-[#CA9BFA] text-white placeholder:text-white/50 rounded-xl px-4 py-3 h-12"
                  />
                  <Button size="icon" className="bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] hover:opacity-90 text-white shrink-0 rounded-xl h-12 w-12 shadow-lg">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Programmes */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base">Programmes</h4>
              <ul className="space-y-3">
                {links.programmes.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#CA9BFA] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formations */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base flex items-center gap-2">
                Formations
                <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-[9px] font-bold">
                  NOUVEAU
                </span>
              </h4>
              <ul className="space-y-3">
                {links.formations.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white/70 hover:text-[#CA9BFA] transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#CA9BFA] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                      {link.badge && (
                        <span className="px-1.5 py-0.5 rounded bg-[#CA9BFA]/20 text-[#CA9BFA] text-[9px] font-bold">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-white mb-5 text-base">Services</h4>
              <ul className="space-y-3">
                {links.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#1B1AFE] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ressources & Company */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h4 className="font-bold text-white mb-5 text-base">Ressources</h4>
                <ul className="space-y-3">
                  {links.ressources.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-5 text-base">Entreprise</h4>
                <ul className="space-y-3">
                  {links.company.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
              <p>© {new Date().getFullYear()} Incuba-DZ. Tous droits réservés.</p>
              <div className="flex items-center gap-4">
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
                <span className="text-white/30">•</span>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
                <span className="text-white/30">•</span>
                <Link href="/cgv" className="hover:text-white transition-colors">
                  CGV
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1B1AFE] hover:to-[#CA9BFA] transition-all group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
