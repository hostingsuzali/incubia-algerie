import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const upcomingEvents = [
    {
        id: 1,
        title: "Startup Weekend Alger 2025",
        date: "2025-12-20",
        time: "09:00 - 18:00",
        location: "Incubia HQ, Alger",
        attendees: 50,
        category: "Workshop",
        description: "54 heures pour transformer votre idée en prototype fonctionnel",
    },
    {
        id: 2,
        title: "Masterclass: Levée de Fonds",
        date: "2025-12-22",
        time: "14:00 - 17:00",
        location: "En ligne",
        attendees: 100,
        category: "Masterclass",
        description: "Les secrets pour réussir votre levée de fonds avec des investisseurs algériens",
    },
]

const pastEvents = [
    {
        id: 3,
        title: "Demo Day - Cohorte 5",
        date: "2025-11-15",
        attendees: 200,
        description: "Présentation des 10 startups de notre 5ème cohorte",
    },
    {
        id: 4,
        title: "Networking Entrepreneurs",
        date: "2025-10-28",
        attendees: 80,
        description: "Soirée networking avec entrepreneurs et investisseurs",
    },
]

export default function EvenementsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CA9BFA]/10 text-[#CA9BFA] text-sm font-semibold mb-6">
                            <Calendar className="w-4 h-4" />
                            Événements
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Événements Incubia
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Workshops, masterclasses et événements networking pour entrepreneurs
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <h2 className="text-3xl font-bold text-[#0D1F1A] mb-12">
                        Événements à Venir
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingEvents.map(event => (
                            <div
                                key={event.id}
                                className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <Badge variant="secondary">{event.category}</Badge>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-[#0D1F1A]">
                                            {new Date(event.date).getDate()}
                                        </div>
                                        <div className="text-sm text-[#47534E]">
                                            {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-4">
                                    {event.title}
                                </h3>
                                <p className="text-[#47534E] mb-6 leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-[#47534E]">
                                        <Clock className="w-5 h-5 text-[#CA9BFA]" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#47534E]">
                                        <MapPin className="w-5 h-5 text-[#CA9BFA]" />
                                        {event.location}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#47534E]">
                                        <Users className="w-5 h-5 text-[#CA9BFA]" />
                                        {event.attendees} participants max
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]">
                                    S'Inscrire
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <h2 className="text-3xl font-bold text-[#0D1F1A] mb-12">
                        Événements Passés
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastEvents.map(event => (
                            <div
                                key={event.id}
                                className="p-6 rounded-2xl border border-[#E7EBE9] hover:shadow-lg transition-all"
                            >
                                <div className="text-sm text-[#47534E] mb-2">
                                    {new Date(event.date).toLocaleDateString('fr-FR')}
                                </div>
                                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-[#47534E] mb-3">
                                    {event.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-[#47534E]">
                                    <Users className="w-4 h-4" />
                                    {event.attendees} participants
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Ne Manquez Aucun Événement
                        </h3>
                        <p className="text-lg text-[#47534E] mb-8">
                            Inscrivez-vous à notre newsletter pour être informé de nos prochains événements
                        </p>
                        <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                            <Link href="/ressources">S'Abonner</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
