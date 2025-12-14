"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, GraduationCap, Send, CheckCircle, Clock, Users, Target } from "lucide-react"

const FORMATIONS = [
    "Stratégie & Positionnement",
    "Marketing Digital & Growth",
    "Vente & Négociation",
    "Finance & Levée de Fonds",
    "Product Management",
    "Leadership & Management",
    "Opérations & Scaling",
    "Legal & Compliance",
]

const AVAILABILITY_OPTIONS = [
    "Immédiatement",
    "Dans 2 semaines",
    "Dans 1 mois",
    "Dans 2-3 mois",
    "À définir",
]

export default function ReservationFormationPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        formation: "",
        experience: "",
        objectives: "",
        availability: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/formation-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to send booking request')
            }

            setIsSubmitting(false)
            setIsSubmitted(true)

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    formation: "",
                    experience: "",
                    objectives: "",
                    availability: "",
                })
            }, 5000)
        } catch (error) {
            console.error('Error submitting booking:', error)
            setIsSubmitting(false)
            alert('Une erreur est survenue. Veuillez réessayer.')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#CA9BFA]/10 via-[#E9D5FF]/5 to-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#CA9BFA]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1B1AFE]/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-sm font-semibold mb-6">
                            <GraduationCap className="w-4 h-4" />
                            Réservation Formation
                        </div>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0D1F1A] mb-6">
                            Réservez Votre Place en Formation
                        </h1>
                        <p className="text-xl text-[#47534E] mb-8">
                            Développez vos compétences entrepreneuriales avec nos formations pratiques et notre réseau de mentors expérimentés
                        </p>

                        {/* Quick Stats */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E7EBE9]">
                                <Clock className="w-8 h-8 text-[#CA9BFA] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#0D1F1A]">2-4 semaines</div>
                                <div className="text-sm text-[#47534E]">Durée moyenne</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E7EBE9]">
                                <Users className="w-8 h-8 text-[#1B1AFE] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#0D1F1A]">8-12 participants</div>
                                <div className="text-sm text-[#47534E]">Par session</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E7EBE9]">
                                <Target className="w-8 h-8 text-[#0284C7] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#0D1F1A]">100% pratique</div>
                                <div className="text-sm text-[#47534E]">Orienté résultats</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Form Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    {isSubmitted ? (
                        <div className="p-12 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 text-center">
                            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-green-900 mb-4">Demande Envoyée avec Succès !</h2>
                            <p className="text-lg text-green-700 mb-2">
                                Merci pour votre intérêt pour nos formations.
                            </p>
                            <p className="text-green-600">
                                Notre équipe examinera votre candidature et vous contactera dans les <strong>48 heures</strong>.
                            </p>
                            <div className="mt-8 p-6 bg-white/50 rounded-2xl">
                                <h3 className="font-bold text-green-900 mb-3">Prochaines étapes :</h3>
                                <ol className="text-left text-green-700 space-y-2 max-w-md mx-auto">
                                    <li>✓ Examen de votre profil</li>
                                    <li>✓ Entretien téléphonique (si nécessaire)</li>
                                    <li>✓ Confirmation de votre place</li>
                                    <li>✓ Envoi des détails de la formation</li>
                                </ol>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information */}
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                                <h2 className="text-2xl font-bold text-[#0D1F1A] mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                    Informations Personnelles
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Prénom *
                                        </label>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Votre prénom"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Nom *
                                        </label>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Email *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="votre@email.com"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Téléphone *
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+213 XX XX XX XX"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="company" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Entreprise / Projet (optionnel)
                                    </label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Nom de votre entreprise ou projet"
                                        className="h-12"
                                    />
                                </div>
                            </div>

                            {/* Formation Details */}
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#CA9BFA]/5 to-white border border-[#E7EBE9]">
                                <h2 className="text-2xl font-bold text-[#0D1F1A] mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                    Détails de la Formation
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="formation" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Formation souhaitée *
                                        </label>
                                        <select
                                            id="formation"
                                            name="formation"
                                            value={formData.formation}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-12 px-4 rounded-lg border border-[#E7EBE9] bg-white text-[#0D1F1A] focus:outline-none focus:ring-2 focus:ring-[#CA9BFA] focus:border-transparent"
                                        >
                                            <option value="">Sélectionnez une formation</option>
                                            {FORMATIONS.map((formation) => (
                                                <option key={formation} value={formation}>
                                                    {formation}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="availability" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Disponibilité *
                                        </label>
                                        <select
                                            id="availability"
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-12 px-4 rounded-lg border border-[#E7EBE9] bg-white text-[#0D1F1A] focus:outline-none focus:ring-2 focus:ring-[#CA9BFA] focus:border-transparent"
                                        >
                                            <option value="">Sélectionnez votre disponibilité</option>
                                            {AVAILABILITY_OPTIONS.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Experience & Objectives */}
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1B1AFE]/5 to-white border border-[#E7EBE9]">
                                <h2 className="text-2xl font-bold text-[#0D1F1A] mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                    Votre Profil
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="experience" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Expérience entrepreneuriale *
                                        </label>
                                        <Textarea
                                            id="experience"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            placeholder="Décrivez brièvement votre parcours entrepreneurial, vos projets actuels ou passés..."
                                            rows={4}
                                            required
                                            className="resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="objectives" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Objectifs de la formation *
                                        </label>
                                        <Textarea
                                            id="objectives"
                                            name="objectives"
                                            value={formData.objectives}
                                            onChange={handleChange}
                                            placeholder="Quels sont vos objectifs ? Que souhaitez-vous accomplir grâce à cette formation ?"
                                            rows={4}
                                            required
                                            className="resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full md:w-auto px-12 h-14 text-lg bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] hover:opacity-90 text-white shadow-xl shadow-[#CA9BFA]/30"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Envoyer ma Demande
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-[#47534E] mt-4">
                                    En soumettant ce formulaire, vous acceptez notre{" "}
                                    <a href="/confidentialite" className="text-[#CA9BFA] hover:underline">
                                        politique de confidentialité
                                    </a>
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* Info Section */}
            {!isSubmitted && (
                <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                                Pourquoi Choisir Nos Formations ?
                            </h2>
                            <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                                Des formations conçues par des entrepreneurs pour des entrepreneurs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-2xl bg-white border border-[#E7EBE9] hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center text-white mb-4">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Expertise Pratique</h3>
                                <p className="text-[#47534E]">
                                    Formateurs expérimentés qui ont réellement construit et développé des entreprises
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white border border-[#E7EBE9] hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center text-white mb-4">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Petits Groupes</h3>
                                <p className="text-[#47534E]">
                                    Sessions limitées à 8-12 participants pour un accompagnement personnalisé
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white border border-[#E7EBE9] hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center text-white mb-4">
                                    <Target className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Résultats Concrets</h3>
                                <p className="text-[#47534E]">
                                    Focus sur l'application immédiate et les résultats mesurables pour votre projet
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <Footer />
            <BackToTop />
        </main>
    )
}
