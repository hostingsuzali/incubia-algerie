"use client"

import { FileText, Mail, Users, Compass, Briefcase, GraduationCap, ArrowRight, Wallet, Download, Star, Clock, Award, CheckCircle2, Package } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function BentoServices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const mentors = [
    {
      name: "Karim Benali",
      role: "Ex-CEO TechCorp Algeria",
      expertise: "SaaS & Scaling",
      image: "/professional-young-algerian-man-portrait.jpg",
      sessions: 45,
      rating: 4.9,
      bio: "15 ans d'expérience en tech, 3 exits réussies",
      specialties: ["Product-Market Fit", "Fundraising", "Team Building"],
    },
    {
      name: "Amira Hadj",
      role: "Founder EduTech DZ",
      expertise: "EdTech & Product",
      image: "/professional-algerian-woman-portrait.jpg",
      sessions: 38,
      rating: 4.8,
      bio: "Levée de 2M€, 50k+ utilisateurs",
      specialties: ["Go-to-Market", "User Growth", "Pitch"],
    },
  ]

  const courses = [
    {
      title: "Business Model Canvas Masterclass",
      duration: "2h 30min",
      level: "Débutant",
      students: 124,
      rating: 4.7,
      instructor: "Youcef M.",
      modules: 8,
      completion: 89,
    },
    {
      title: "Pitch Deck qui Convertit",
      duration: "3h 15min",
      level: "Intermédiaire",
      students: 98,
      rating: 4.9,
      instructor: "Sarah K.",
      modules: 12,
      completion: 76,
    },
    {
      title: "Levée de Fonds A-Z",
      duration: "4h 45min",
      level: "Avancé",
      students: 67,
      rating: 4.8,
      instructor: "Karim B.",
      modules: 15,
      completion: 82,
    },
  ]

  const creationSteps = [
    { icon: FileText, label: "Statuts", done: true },
    { icon: Briefcase, label: "RC", done: true },
    { icon: CheckCircle2, label: "NIF", done: false },
  ]

  // Additional services integrated into cards
  const additionalServices = [
    { icon: FileText, label: "Zéro Paperasse", color: "#1B1AFE" },
    { icon: Wallet, label: "Financement ANSEJ", color: "#EA580C" },
    { icon: Mail, label: "Domiciliation", color: "#0284C7" },
    { icon: Download, label: "Templates Gratuits", color: "#059669" },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#FAFBFC] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Header */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-[#1B1AFE]/10 text-[#1B1AFE] font-semibold text-sm mb-6 shadow-sm">
            <Package className="w-4 h-4" />
            Notre Écosystème
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6 text-balance">
            Tout ce dont vous avez besoin <br className="hidden md:block" />
            <span className="text-[#1B1AFE]">pour réussir</span>
          </h2>
          <p className="text-lg md:text-xl text-[#47534E] max-w-2xl mx-auto leading-relaxed">
            Mentors, formations, services juridiques et financiers. Un accompagnement 360° pour transformer votre idée en entreprise rentable.
          </p>
        </div>

        {/* Bento Grid - 2 Rows Only */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* ============================================
              ROW 1: MENTORS + FORMATIONS
              ============================================ */}

          {/* MENTORS - Hero Card (5 cols) */}
          <div
            className={`md:col-span-5 relative overflow-hidden rounded-[32px] bg-[#0D1F1A] transition-all duration-[600ms] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "0ms" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/professional-algerian-businessman-portrait.jpg"
                alt="Mentors background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F1A] via-[#0D1F1A]/90 to-[#0D1F1A]" />
            </div>

            <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[600px]">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B1AFE] text-white text-xs font-bold mb-4">
                  <Users className="w-3.5 h-3.5" />
                  50+ Experts
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  Mentors qui ont <br />
                  <span className="text-[#CA9BFA]">déjà réussi</span>
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Rencontrez des entrepreneurs qui ont levé des fonds, scalé leurs startups et navigué le marché algérien.
                </p>
              </div>

              {/* Mentor Cards */}
              <div className="space-y-4 flex-1">
                {mentors.map((mentor, i) => (
                  <div
                    key={i}
                    className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-[#CA9BFA]/50 transition-all cursor-pointer group/card"
                    onMouseEnter={() => setHoveredMentor(i)}
                    onMouseLeave={() => setHoveredMentor(null)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Photo */}
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-[#CA9BFA]/30 shrink-0 group-hover/card:ring-[#CA9BFA] transition-all">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full group-hover/card:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1AFE]/40 to-transparent" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-lg mb-1">{mentor.name}</h4>
                        <p className="text-white/60 text-sm mb-2">{mentor.role}</p>

                        {/* Stats */}
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-[#CA9BFA] fill-[#CA9BFA]" />
                            <span className="text-white/80 text-xs font-semibold">{mentor.rating}</span>
                          </div>
                          <span className="text-white/40 text-xs">•</span>
                          <span className="text-white/60 text-xs">{mentor.sessions} sessions</span>
                        </div>

                        {/* Expanded on Hover */}
                        {hoveredMentor === i && (
                          <div className="mt-3 pt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                            <p className="text-white/70 text-xs mb-2">{mentor.bio}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {mentor.specialties.map((spec, idx) => (
                                <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-[#1B1AFE]/30 text-[#CA9BFA] border border-[#CA9BFA]/20">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/equipe#mentors"
                className="mt-6 w-full bg-[#1B1AFE] hover:bg-[#4B4AFF] text-white py-4 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 group/btn"
              >
                Découvrir tous les mentors
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1B1AFE] rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#CA9BFA] rounded-full blur-3xl opacity-10" />
          </div>

          {/* FORMATIONS - Hero Card (7 cols) */}
          <div
            className={`md:col-span-7 relative overflow-hidden rounded-[32px] bg-white border-2 border-[#E7EBE9] transition-all duration-[600ms] group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[600px]">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CA9BFA]/20 text-[#1B1AFE] text-xs font-bold mb-4">
                  <GraduationCap className="w-3.5 h-3.5" />
                  30+ Formations
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0D1F1A] mb-3 tracking-tight">
                  Formations <span className="text-[#CA9BFA]">pratiques</span> <br />
                  par des experts
                </h3>
                <p className="text-[#47534E] text-base leading-relaxed max-w-xl">
                  Apprenez les compétences essentielles pour lancer et développer votre startup avec des cours animés par des entrepreneurs à succès.
                </p>
              </div>

              {/* Course Tabs */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {courses.map((course, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${activeTab === i
                        ? 'bg-[#1B1AFE] text-white shadow-lg shadow-[#1B1AFE]/20'
                        : 'bg-[#F9FAF9] text-[#47534E] hover:bg-[#F3E8FF]'
                      }`}
                  >
                    {course.title.split(' ')[0]} {course.title.split(' ')[1]}
                  </button>
                ))}
              </div>

              {/* Active Course Card */}
              <div className="flex-1 bg-gradient-to-br from-[#F9FAF9] to-[#F3E8FF] rounded-2xl p-6 border border-[#E7EBE9]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-[#0D1F1A] text-xl mb-2">{courses[activeTab].title}</h4>
                    <p className="text-[#47534E] text-sm mb-4">Par {courses[activeTab].instructor}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-sm text-[#47534E]">
                        <Clock className="w-4 h-4 text-[#1B1AFE]" />
                        {courses[activeTab].duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-[#47534E]">
                        <Users className="w-4 h-4 text-[#1B1AFE]" />
                        {courses[activeTab].students} étudiants
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-[#47534E]">
                        <GraduationCap className="w-4 h-4 text-[#1B1AFE]" />
                        {courses[activeTab].modules} modules
                      </span>
                    </div>

                    {/* Rating & Level */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(courses[activeTab].rating) ? 'text-[#CA9BFA] fill-[#CA9BFA]' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm font-semibold text-[#0D1F1A] ml-1">{courses[activeTab].rating}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-xs font-bold">
                        {courses[activeTab].level}
                      </span>
                    </div>
                  </div>

                  {/* Completion Circle */}
                  <div className="relative w-20 h-20 shrink-0">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="#E7EBE9" strokeWidth="6" fill="none" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#1B1AFE"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 32}`}
                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - courses[activeTab].completion / 100)}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#1B1AFE]">{courses[activeTab].completion}%</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-[#47534E] mb-2">
                    <span>Taux de complétion moyen</span>
                    <span className="font-semibold">{courses[activeTab].completion}%</span>
                  </div>
                  <div className="h-2 bg-[#E7EBE9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] rounded-full transition-all duration-1000"
                      style={{ width: `${courses[activeTab].completion}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/formations"
                className="mt-6 w-full bg-[#CA9BFA] hover:bg-[#CA9BFA]/90 text-[#0D1F1A] py-4 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 group/btn"
              >
                Voir toutes les formations
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#CA9BFA]/10 rounded-full blur-3xl" />
          </div>

          {/* ============================================
              ROW 2: BUSINESS CREATION + STRATEGY + TOOLS
              ============================================ */}

          {/* BUSINESS CREATION with integrated services (6 cols) */}
          <div
            className={`md:col-span-6 relative overflow-hidden rounded-[32px] bg-[#1B1AFE] transition-all duration-[600ms] hover:shadow-2xl hover:shadow-[#1B1AFE]/20 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative z-10 p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Créez votre entreprise <br />en 3 étapes
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  De la rédaction des statuts au registre de commerce, nous gérons toutes les démarches juridiques et administratives.
                </p>

                {/* Steps */}
                <div className="flex items-center gap-3 mb-6">
                  {creationSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${step.done ? 'bg-white/20 border border-white/30' : 'bg-white/5 border border-white/10'
                        }`}>
                        <step.icon className={`w-4 h-4 ${step.done ? 'text-[#CA9BFA]' : 'text-white/40'}`} />
                        <span className={`text-sm font-semibold ${step.done ? 'text-white' : 'text-white/40'}`}>
                          {step.label}
                        </span>
                      </div>
                      {i < creationSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-white/40" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Integrated Services Badges */}
                <div className="flex flex-wrap gap-2">
                  {additionalServices.slice(0, 2).map((service, i) => (
                    <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
                      <service.icon className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#4B4AFF] rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
          </div>

          {/* STRATEGY (3 cols) */}
          <div
            className={`md:col-span-3 relative overflow-hidden rounded-[32px] bg-[#F3E8FF] border-2 border-[#CA9BFA]/20 transition-all duration-[600ms] hover:border-[#CA9BFA] hover:-translate-y-1 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#CA9BFA] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">
                  Stratégie & Roadmap
                </h3>
                <p className="text-[#47534E] text-sm leading-relaxed mb-6">
                  Plan d'action personnalisé pour structurer votre croissance et valider votre modèle économique.
                </p>
              </div>

              {/* Integrated Service Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E7EBE9] mb-4">
                  <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span className="text-[#0D1F1A] text-xs font-medium">Domiciliation incluse</span>
                </div>
                <Link href="/services/accompagnement" className="inline-flex items-center text-[#1B1AFE] font-semibold text-sm group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* TOOLS & RESOURCES (3 cols) */}
          <div
            className={`md:col-span-3 relative overflow-hidden rounded-[32px] bg-white border-2 border-[#E7EBE9] transition-all duration-[600ms] hover:border-[#1B1AFE]/30 hover:-translate-y-1 hover:shadow-lg group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/ressources" className="p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6 text-[#0284C7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">
                  Boîte à Outils
                </h3>
                <p className="text-[#47534E] text-sm leading-relaxed mb-6">
                  Templates, guides et ressources téléchargeables gratuitement pour accélérer votre lancement.
                </p>
              </div>

              {/* Integrated Service Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFF4E5] border border-[#FFEDD5] mb-4">
                  <Wallet className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span className="text-[#9A3412] text-xs font-medium">Support financement</span>
                </div>
                <div className="inline-flex items-center text-[#0284C7] font-semibold text-sm group-hover:gap-2 transition-all">
                  Télécharger
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
