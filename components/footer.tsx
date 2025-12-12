import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  const links = {
    programmes: [
      { label: "Programme d'incubation", href: "#" },
      { label: "Accélération", href: "#" },
      { label: "Mentorat", href: "#" },
      { label: "Postuler", href: "#" },
    ],
    services: [
      { label: "Création d'entreprise", href: "#" },
      { label: "Domiciliation", href: "#" },
      { label: "Financement", href: "#" },
      { label: "Formation", href: "#" },
    ],
    ressources: [
      { label: "Guides", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Événements", href: "#" },
    ],
    about: [
      { label: "À propos", href: "#" },
      { label: "Équipe", href: "#" },
      { label: "Partenaires", href: "#" },
      { label: "Contact", href: "#" },
    ],
  }

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-background flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-bold">Incubia</span>
            </Link>
            <p className="text-background/70 mb-8 leading-relaxed">
              L'incubateur de référence pour lancer et développer votre startup en Algérie.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold">Newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-full"
                />
                <Button size="icon" className="bg-secondary hover:bg-secondary/90 shrink-0 rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5">Programmes</h4>
            <ul className="space-y-3">
              {links.programmes.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">Ressources</h4>
            <ul className="space-y-3">
              {links.ressources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">À propos</h4>
            <ul className="space-y-3">
              {links.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} Incubia. Tous droits réservés.</p>
          <div className="flex items-center gap-3">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
