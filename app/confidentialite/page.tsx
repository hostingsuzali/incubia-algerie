import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Shield } from "lucide-react"

export default function ConfidentialitePage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            <section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Shield className="w-4 h-4" />
                            Confidentialité
                        </div>
                        <h1 className="text-4xl font-bold text-[#0D1F1A] mb-6">
                            Politique de Confidentialité
                        </h1>
                        <p className="text-lg text-[#47534E]">
                            Votre vie privée est importante pour nous
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">1. Collecte des Données</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Nous collectons les informations suivantes lorsque vous utilisez notre site :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Informations d'identification (nom, prénom, email, téléphone)</li>
                                <li>Informations sur votre projet ou entreprise</li>
                                <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
                                <li>Informations fournies dans les formulaires de contact ou candidature</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">2. Utilisation des Données</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Vos données personnelles sont utilisées pour :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Traiter vos demandes de contact ou candidature</li>
                                <li>Vous envoyer des informations sur nos programmes et services</li>
                                <li>Améliorer notre site et nos services</li>
                                <li>Respecter nos obligations légales</li>
                                <li>Analyser l'utilisation de notre site (statistiques anonymisées)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">3. Partage des Données</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent être partagées avec :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Nos prestataires de services (hébergement, email, analytics)</li>
                                <li>Nos partenaires dans le cadre de nos programmes (avec votre consentement)</li>
                                <li>Les autorités légales si requis par la loi</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">4. Sécurité des Données</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Cependant, aucune transmission sur Internet n'est totalement sécurisée.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">5. Conservation des Données</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités décrites dans cette politique, sauf si une période de conservation plus longue est requise ou permise par la loi.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">6. Vos Droits</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Conformément à la législation algérienne, vous disposez des droits suivants :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                                <li><strong>Droit de suppression :</strong> Demander la suppression de vos données</li>
                                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                            </ul>
                            <p className="text-[#47534E] leading-relaxed mt-4">
                                Pour exercer ces droits, contactez-nous à : contact@incuba-dz.com
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">7. Cookies</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Nous utilisons des cookies pour :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Améliorer votre expérience de navigation</li>
                                <li>Analyser le trafic du site (Google Analytics)</li>
                                <li>Mémoriser vos préférences</li>
                            </ul>
                            <p className="text-[#47534E] leading-relaxed mt-4">
                                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">8. Modifications</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">9. Contact</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Pour toute question concernant cette politique de confidentialité :<br />
                                <strong>Email :</strong> contact@incuba-dz.com<br />
                                <strong>Adresse :</strong> Incubia Algérie, Alger, Algérie
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
