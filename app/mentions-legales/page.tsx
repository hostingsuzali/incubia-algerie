import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Scale } from "lucide-react"

export default function MentionsLegalesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            <section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#47534E]/10 text-[#47534E] text-sm font-semibold mb-6">
                            <Scale className="w-4 h-4" />
                            Mentions Légales
                        </div>
                        <h1 className="text-4xl font-bold text-[#0D1F1A] mb-6">
                            Mentions Légales
                        </h1>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">1. Informations Légales</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                <strong>Raison sociale :</strong> Incubia Algérie<br />
                                <strong>Forme juridique :</strong> SARL<br />
                                <strong>Capital social :</strong> 1 000 000 DA<br />
                                <strong>Siège social :</strong> Alger, Algérie<br />
                                <strong>Registre de Commerce :</strong> [À compléter]<br />
                                <strong>NIF :</strong> [À compléter]
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">2. Directeur de Publication</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Le directeur de la publication est le représentant légal de la société Incubia Algérie.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">3. Hébergement</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Ce site est hébergé par Vercel Inc.<br />
                                340 S Lemon Ave #4133, Walnut, CA 91789, USA
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">4. Propriété Intellectuelle</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                L'ensemble de ce site relève de la législation algérienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                            <p className="text-[#47534E] leading-relaxed">
                                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">5. Liens Hypertextes</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité d'Incubia Algérie.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">6. Protection des Données</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Conformément à la loi algérienne relative à la protection des données personnelles, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse : contact@incuba-dz.com
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">7. Cookies</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies. Pour plus d'informations, consultez notre politique de confidentialité.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">8. Contact</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Pour toute question concernant les mentions légales, vous pouvez nous contacter :<br />
                                <strong>Email :</strong> contact@incuba-dz.com<br />
                                <strong>Téléphone :</strong> +213 XX XX XX XX<br />
                                <strong>Adresse :</strong> Alger, Algérie
                            </p>
                        </section>

                        <p className="text-sm text-[#47534E] mt-12 pt-8 border-t border-[#E7EBE9]">
                            Dernière mise à jour : Décembre 2025
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
