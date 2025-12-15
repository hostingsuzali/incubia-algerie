"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted, data:', formData)
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            console.log('Response status:', response.status)
            const data = await response.json()
            console.log('Response data:', data)

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            console.log('Setting isSubmitted to true')
            setIsSubmitting(false)
            setIsSubmitted(true)

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                })
            }, 3000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setIsSubmitting(false)
            alert('Une erreur est survenue. Veuillez réessayer.')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Mail className="w-4 h-4" />
                            Contact
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Parlons de Votre Projet
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Notre équipe vous répondra sous 24h pour discuter de vos ambitions entrepreneuriales
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Left: Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0D1F1A] mb-6">
                                Envoyez-nous un Message
                            </h2>

                            {isSubmitted ? (
                                <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-green-900 mb-2">Message Envoyé !</h3>
                                    <p className="text-green-700">
                                        Nous vous répondrons dans les plus brefs délais.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
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
                                            />
                                        </div>
                                    </div>

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
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Entreprise / Projet
                                        </label>
                                        <Input
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Nom de votre entreprise ou projet"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Message *
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Parlez-nous de votre projet, vos besoins, vos objectifs..."
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF] hover:opacity-90 text-white shadow-lg shadow-[#1B1AFE]/30"
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
                                                Envoyer le Message
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-[#47534E] text-center">
                                        En soumettant ce formulaire, vous acceptez notre{" "}
                                        <a href="/confidentialite" className="text-[#1B1AFE] hover:underline">
                                            politique de confidentialité
                                        </a>
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Right: Contact Info + Map */}
                        <div className="space-y-8">
                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-6">
                                    Coordonnées
                                </h3>

                                <a
                                    href="mailto:contact@incuba-dz.com"
                                    className="flex items-start gap-4 p-6 rounded-2xl border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D1F1A] mb-1">Email</h4>
                                        <p className="text-[#47534E]">contact@incuba-dz.com</p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+213XXXXXXXXX"
                                    className="flex items-start gap-4 p-6 rounded-2xl border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D1F1A] mb-1">Téléphone</h4>
                                        <p className="text-[#47534E]">+213 XX XX XX XX</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#E7EBE9]">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center text-white shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0D1F1A] mb-1">Adresse</h4>
                                        <p className="text-[#47534E]">Alger, Algérie</p>
                                    </div>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-6 h-6 text-[#1B1AFE]" />
                                    <h4 className="font-bold text-[#0D1F1A]">Horaires d'Ouverture</h4>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#47534E]">Lundi - Jeudi</span>
                                        <span className="font-semibold text-[#0D1F1A]">9h00 - 17h00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#47534E]">Vendredi</span>
                                        <span className="font-semibold text-[#0D1F1A]">9h00 - 12h00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#47534E]">Samedi - Dimanche</span>
                                        <span className="font-semibold text-red-500">Fermé</span>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden h-[400px] border border-[#E7EBE9]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.43143935326!2d2.9428788!3d36.7372827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977ea659f%3A0x128fb331e893c!2sAlger%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sdz!4v1702569600000!5m2!1sfr!2sdz"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Incubia Algérie - Localisation"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
