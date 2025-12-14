"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Check, ChevronLeft, ChevronRight, Rocket, Zap, Upload, CheckCircle, Sparkles } from "lucide-react"

const steps = [
    { id: 1, name: "Informations Personnelles" },
    { id: 2, name: "Détails du Projet" },
    { id: 3, name: "Pitch & Vision" },
    { id: 4, name: "Programme & Finalisation" },
]

export default function PostulerPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        // Step 1
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedin: "",
        // Step 2
        projectName: "",
        sector: "",
        stage: "",
        teamSize: "",
        // Step 3
        problem: "",
        solution: "",
        target: "",
        differentiation: "",
        // Step 4
        program: "incubation",
        fileName: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFormData(prev => ({
                ...prev,
                fileName: file.name
            }))
        }
    }

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitted(true)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-white">
                <ScrollProgress />
                <Header />

                <section className="py-32">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-8">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Candidature Envoyée !
                        </h1>
                        <p className="text-xl text-[#47534E] mb-8">
                            Merci pour votre candidature. Nous étudierons votre dossier et vous contacterons sous <strong>5 jours ouvrés</strong>.
                        </p>
                        <div className="p-6 rounded-2xl bg-[#F9FAF9] border border-[#E7EBE9] mb-8">
                            <p className="text-sm text-[#47534E] mb-2">
                                Un email de confirmation a été envoyé à
                            </p>
                            <p className="text-lg font-bold text-[#1B1AFE]">{formData.email}</p>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/">Retour à l'Accueil</Link>
                            </Button>
                            <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                                <Link href="/formations">Découvrir nos Formations</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Footer />
                <BackToTop />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Candidature
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Lancez Votre Projet avec Incubia
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Rejoignez notre écosystème et transformez votre vision en réalité
                        </p>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center justify-center mb-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${currentStep > step.id
                                                ? "bg-green-500 text-white"
                                                : currentStep === step.id
                                                    ? "bg-[#1B1AFE] text-white scale-110"
                                                    : "bg-[#E7EBE9] text-[#47534E]"
                                            }`}
                                    >
                                        {currentStep > step.id ? <Check className="w-6 h-6" /> : step.id}
                                    </div>
                                    <span className={`text-xs mt-2 text-center max-w-[100px] hidden md:block ${currentStep === step.id ? "font-bold text-[#1B1AFE]" : "text-[#47534E]"
                                        }`}>
                                        {step.name}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`w-16 md:w-24 h-1 mx-2 transition-all ${currentStep > step.id ? "bg-green-500" : "bg-[#E7EBE9]"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="py-12 pb-20">
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-12">
                    <form onSubmit={handleSubmit}>

                        {/* Step 1: Personal Info */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-[#0D1F1A] mb-6">
                                    Informations Personnelles
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Prénom *
                                        </label>
                                        <Input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Votre prénom"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                            Nom *
                                        </label>
                                        <Input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Email *
                                    </label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Téléphone *
                                    </label>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+213 XX XX XX XX"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        LinkedIn (optionnel)
                                    </label>
                                    <Input
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/votre-profil"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Project Details */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-[#0D1F1A] mb-6">
                                    Détails du Projet
                                </h2>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Nom du Projet *
                                    </label>
                                    <Input
                                        name="projectName"
                                        value={formData.projectName}
                                        onChange={handleChange}
                                        placeholder="Le nom de votre startup ou projet"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Secteur d'Activité *
                                    </label>
                                    <Select
                                        name="sector"
                                        value={formData.sector}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Sélectionnez un secteur</option>
                                        <option value="tech">Tech / SaaS</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="fintech">Fintech</option>
                                        <option value="healthtech">Healthtech</option>
                                        <option value="edtech">Edtech</option>
                                        <option value="agritech">Agritech</option>
                                        <option value="greentech">Greentech</option>
                                        <option value="other">Autre</option>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Stade du Projet *
                                    </label>
                                    <Select
                                        name="stage"
                                        value={formData.stage}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Sélectionnez un stade</option>
                                        <option value="idea">Idée</option>
                                        <option value="prototype">Prototype</option>
                                        <option value="mvp">MVP (Produit Minimum Viable)</option>
                                        <option value="launched">Produit Lancé</option>
                                        <option value="revenue">Génération de Revenus</option>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Taille de l'Équipe *
                                    </label>
                                    <Select
                                        name="teamSize"
                                        value={formData.teamSize}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Sélectionnez</option>
                                        <option value="1">Solo (1 personne)</option>
                                        <option value="2-3">2-3 personnes</option>
                                        <option value="4-5">4-5 personnes</option>
                                        <option value="6+">6+ personnes</option>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Pitch */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-[#0D1F1A] mb-6">
                                    Pitch & Vision
                                </h2>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Quel problème résolvez-vous ? *
                                    </label>
                                    <Textarea
                                        name="problem"
                                        value={formData.problem}
                                        onChange={handleChange}
                                        placeholder="Décrivez le problème que vous adressez..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Quelle est votre solution ? *
                                    </label>
                                    <Textarea
                                        name="solution"
                                        value={formData.solution}
                                        onChange={handleChange}
                                        placeholder="Expliquez votre solution et comment elle fonctionne..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Qui sont vos clients cibles ? *
                                    </label>
                                    <Textarea
                                        name="target"
                                        value={formData.target}
                                        onChange={handleChange}
                                        placeholder="Décrivez votre marché cible et vos personas..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Qu'est-ce qui vous différencie ? *
                                    </label>
                                    <Textarea
                                        name="differentiation"
                                        value={formData.differentiation}
                                        onChange={handleChange}
                                        placeholder="Votre avantage concurrentiel, votre proposition de valeur unique..."
                                        rows={4}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Program Selection */}
                        {currentStep === 4 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-[#0D1F1A] mb-6">
                                    Programme Souhaité
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, program: "incubation" }))}
                                        className={`p-6 rounded-2xl border-2 transition-all text-left ${formData.program === "incubation"
                                                ? "border-[#1B1AFE] bg-[#1B1AFE]/5 shadow-lg"
                                                : "border-[#E7EBE9] hover:border-[#1B1AFE]/50"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center text-white">
                                                <Rocket className="w-6 h-6" />
                                            </div>
                                            {formData.program === "incubation" && (
                                                <CheckCircle className="w-6 h-6 text-[#1B1AFE]" />
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">Incubation</h3>
                                        <p className="text-sm text-[#47534E] mb-3">
                                            De l'idée au lancement. Méthodologie Lean Startup et mentoring intensif.
                                        </p>
                                        <div className="text-xs text-[#47534E]">
                                            <strong>Durée:</strong> 6 mois
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, program: "acceleration" }))}
                                        className={`p-6 rounded-2xl border-2 transition-all text-left ${formData.program === "acceleration"
                                                ? "border-[#CA9BFA] bg-[#CA9BFA]/5 shadow-lg"
                                                : "border-[#E7EBE9] hover:border-[#CA9BFA]/50"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center text-white">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            {formData.program === "acceleration" && (
                                                <CheckCircle className="w-6 h-6 text-[#CA9BFA]" />
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">Accélération</h3>
                                        <p className="text-sm text-[#47534E] mb-3">
                                            Scalez votre startup et préparez votre levée de fonds.
                                        </p>
                                        <div className="text-xs text-[#47534E]">
                                            <strong>Durée:</strong> 3 mois
                                        </div>
                                    </button>
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-semibold text-[#0D1F1A] mb-2">
                                        Pitch Deck ou Business Plan (optionnel)
                                    </label>
                                    <div className="border-2 border-dashed border-[#E7EBE9] rounded-2xl p-8 text-center hover:border-[#1B1AFE] transition-all">
                                        <Upload className="w-12 h-12 mx-auto mb-4 text-[#47534E]" />
                                        <p className="text-sm text-[#47534E] mb-4">
                                            {formData.fileName || "Glissez-déposez votre fichier ou cliquez pour parcourir"}
                                        </p>
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            accept=".pdf,.ppt,.pptx"
                                            onChange={handleFileChange}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => document.getElementById("file-upload")?.click()}
                                        >
                                            Choisir un Fichier
                                        </Button>
                                        <p className="text-xs text-[#47534E] mt-3">
                                            PDF ou PowerPoint, max 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12 pt-8 border-t border-[#E7EBE9]">
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                            >
                                <ChevronLeft className="w-5 h-5 mr-2" />
                                Précédent
                            </Button>

                            {currentStep < 4 ? (
                                <Button
                                    type="button"
                                    size="lg"
                                    onClick={nextStep}
                                    className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]"
                                >
                                    Suivant
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-gradient-to-r from-green-600 to-green-500"
                                >
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Soumettre la Candidature
                                </Button>
                            )}
                        </div>

                    </form>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
