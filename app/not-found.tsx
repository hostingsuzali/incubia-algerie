import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Home, Search, ArrowLeft, Rocket } from "lucide-react"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Header />

            <section className="flex-1 flex items-center justify-center py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    {/* 404 Illustration */}
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 mb-6">
                            <Search className="w-16 h-16 text-[#1B1AFE]" />
                        </div>
                        <h1 className="text-8xl lg:text-9xl font-bold text-[#0D1F1A] mb-4">
                            404
                        </h1>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4">
                        Page Non Trouvée
                    </h2>
                    <p className="text-lg text-[#47534E] mb-8">
                        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                    </p>

                    {/* Quick Links */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <Link
                            href="/"
                            className="p-4 rounded-xl border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all group text-left"
                        >
                            <Home className="w-6 h-6 text-[#1B1AFE] mb-2 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-[#0D1F1A] mb-1">Accueil</h3>
                            <p className="text-sm text-[#47534E]">Retour à la page d'accueil</p>
                        </Link>

                        <Link
                            href="/accompagnement"
                            className="p-4 rounded-xl border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all group text-left"
                        >
                            <Rocket className="w-6 h-6 text-[#1B1AFE] mb-2 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-[#0D1F1A] mb-1">Programmes</h3>
                            <p className="text-sm text-[#47534E]">Découvrir nos programmes</p>
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Retour à l'Accueil
                            </Link>
                        </Button>
                        <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                            <Link href="/contact">
                                Nous Contacter
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
