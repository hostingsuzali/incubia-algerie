import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FileText } from "lucide-react"

export default function CGVPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            <section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#059669]/10 text-[#059669] text-sm font-semibold mb-6">
                            <FileText className="w-4 h-4" />
                            CGV
                        </div>
                        <h1 className="text-4xl font-bold text-[#0D1F1A] mb-6">
                            Conditions Générales de Vente
                        </h1>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">1. Objet</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Incubia Algérie et ses clients pour la fourniture de services d'accompagnement, de formation, et autres services proposés.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">2. Services Proposés</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Incubia Algérie propose les services suivants :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Programmes d'incubation et d'accélération de startups</li>
                                <li>Formations professionnelles et masterclasses</li>
                                <li>Services de domiciliation d'entreprise</li>
                                <li>Espaces de coworking</li>
                                <li>Accompagnement au financement</li>
                                <li>Assistance à la création d'entreprise</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">3. Tarifs et Paiement</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Les tarifs de nos services sont indiqués en Dinars Algériens (DA) et peuvent être consultés sur notre site web ou sur demande. Les prix sont susceptibles de modification sans préavis.
                            </p>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                <strong>Modalités de paiement :</strong>
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Paiement par virement bancaire</li>
                                <li>Paiement en espèces (pour montants inférieurs à 100 000 DA)</li>
                                <li>Paiement par chèque certifié</li>
                            </ul>
                            <p className="text-[#47534E] leading-relaxed mt-4">
                                Un acompte de 30% peut être demandé à la signature du contrat, le solde étant payable selon les modalités convenues.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">4. Inscription et Sélection</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                L'inscription à nos programmes d'incubation ou d'accélération ne garantit pas l'acceptation. Les candidatures sont évaluées selon des critères de sélection définis. Les décisions du comité de sélection sont finales et sans appel.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">5. Obligations du Client</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Le client s'engage à :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Fournir des informations exactes et complètes</li>
                                <li>Respecter les règles et le règlement intérieur d'Incubia</li>
                                <li>Participer activement aux programmes souscrits</li>
                                <li>Régler les montants dus dans les délais convenus</li>
                                <li>Respecter la confidentialité des informations partagées</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">6. Obligations d'Incubia</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                Incubia s'engage à :
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Fournir les services décrits dans le contrat</li>
                                <li>Mettre à disposition des mentors et formateurs qualifiés</li>
                                <li>Assurer un environnement propice au développement des startups</li>
                                <li>Respecter la confidentialité des projets</li>
                            </ul>
                            <p className="text-[#47534E] leading-relaxed mt-4">
                                Incubia ne garantit pas le succès commercial des projets accompagnés.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">7. Annulation et Remboursement</h2>
                            <p className="text-[#47534E] leading-relaxed mb-4">
                                <strong>Annulation par le client :</strong>
                            </p>
                            <ul className="list-disc pl-6 text-[#47534E] space-y-2">
                                <li>Plus de 30 jours avant le début : remboursement intégral moins frais administratifs (10%)</li>
                                <li>Entre 15 et 30 jours : remboursement de 50%</li>
                                <li>Moins de 15 jours : aucun remboursement</li>
                            </ul>
                            <p className="text-[#47534E] leading-relaxed mt-4">
                                <strong>Annulation par Incubia :</strong> En cas d'annulation de notre fait, remboursement intégral des sommes versées.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">8. Propriété Intellectuelle</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Les contenus de formation, documents et supports fournis par Incubia restent sa propriété exclusive. Le client s'interdit de les reproduire, diffuser ou commercialiser sans autorisation écrite préalable.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">9. Responsabilité</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Incubia ne peut être tenue responsable des dommages indirects résultant de l'utilisation de ses services. Sa responsabilité est limitée au montant des sommes effectivement payées par le client.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">10. Force Majeure</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Incubia ne pourra être tenue responsable en cas de force majeure (catastrophe naturelle, grève, guerre, pandémie, etc.) empêchant l'exécution normale de ses obligations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">11. Litiges</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux d'Alger seront seuls compétents, nonobstant pluralité de défendeurs ou appel en garantie.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">12. Droit Applicable</h2>
                            <p className="text-[#47534E] leading-relaxed">
                                Les présentes CGV sont régies par le droit algérien.
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
