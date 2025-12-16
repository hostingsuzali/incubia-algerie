"use client"
import { Quote, TrendingUp, Users, Banknote, Star } from "lucide-react"
import { motion } from "framer-motion"

export function SuccessStories() {
  const story = {
    quote:
      "Incubia a transformé notre vision en une entreprise structurée. Grâce à leur accompagnement, nous avons validé notre marché, signé nos premiers clients B2B et sécurisé un financement en seulement 4 mois.",
    author: "Riad B.",
    role: "CEO, SuzaLink",
    metrics: { ca: "+200% Croissance", levee: "Financement Sécurisé", impact: "4 Grands Comptes" },
  }

  return (
    <section id="success" className="relative py-32 bg-gradient-to-b from-[#0D1F1A] to-[#1a1a2e] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#1B1AFE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CA9BFA]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-sm mb-6"
          >
            Success Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6 tracking-tight"
          >
            Ils ont réussi avec Incubia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Exemple concret d'une startup accompagnée qui performe sur le marché
          </motion.p>
        </div>

        {/* Single Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 text-center">
              <Quote className="w-16 h-16 text-[#CA9BFA]/40 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-4xl text-white leading-relaxed font-medium mb-12 max-w-4xl mx-auto">
                "{story.quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-2 mb-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center text-2xl font-bold text-white mb-2">
                  {story.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-xl">{story.author}</p>
                  <p className="text-white/60">{story.role}</p>
                </div>
              </div>

              {/* Metrics badges */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-[#1B1AFE]/20 backdrop-blur-sm border border-[#1B1AFE]/30 text-white font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {story.metrics.ca}
                </div>
                <div className="px-6 py-3 rounded-full bg-[#CA9BFA]/20 backdrop-blur-sm border border-[#CA9BFA]/30 text-white font-semibold flex items-center gap-2">
                  <Banknote className="w-4 h-4" />
                  {story.metrics.levee}
                </div>
                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {story.metrics.impact}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: Users, value: "16+", label: "Startups accompagnées" },
            { icon: Banknote, value: "85M", label: "DZD Levés (Total)" },
            { icon: TrendingUp, value: "90%", label: "Taux de Survie" },
            { icon: Star, value: "4.9/5", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#CA9BFA] mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
