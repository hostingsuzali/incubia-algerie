# 🎨 Design Specifications for Missing Pages
## Incubia Algérie - Page Templates & Components

---

## 📄 Page Template Structure

All new pages should follow this consistent structure:

```tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"

export default function PageName() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      {/* Page-specific sections here */}
      <Footer />
      <BackToTop />
    </main>
  )
}
```

---

## 1️⃣ Contact Page (`/contact`)

### Layout: Split Screen (Desktop) / Stacked (Mobile)

```tsx
// Left Side: Contact Form
// Right Side: Contact Information + Map
```

### Components Needed:

#### **Contact Form Component**
```tsx
<section className="py-20 bg-white">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
    <div className="grid lg:grid-cols-2 gap-12">
      
      {/* Left: Form */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-4">
          Parlons de Votre Projet
        </h1>
        <p className="text-lg text-[#47534E] mb-8">
          Notre équipe vous répondra sous 24h
        </p>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Prénom *" required />
            <Input placeholder="Nom *" required />
          </div>
          <Input type="email" placeholder="Email *" required />
          <Input type="tel" placeholder="Téléphone *" required />
          <Input placeholder="Entreprise / Projet" />
          <Textarea 
            placeholder="Parlez-nous de votre projet *" 
            rows={6} 
            required 
          />
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]"
          >
            Envoyer le Message
          </Button>
        </form>
      </div>
      
      {/* Right: Info + Map */}
      <div className="space-y-8">
        {/* Contact Cards */}
        <div className="space-y-4">
          <ContactCard 
            icon={Mail} 
            title="Email" 
            content="contact@incuba-dz.com" 
            href="mailto:contact@incuba-dz.com"
          />
          <ContactCard 
            icon={Phone} 
            title="Téléphone" 
            content="+213 XX XX XX XX" 
            href="tel:+213XXXXXXXXX"
          />
          <ContactCard 
            icon={MapPin} 
            title="Adresse" 
            content="Alger, Algérie" 
          />
        </div>
        
        {/* Map Embed */}
        <div className="rounded-2xl overflow-hidden h-[400px] border border-[#E7EBE9]">
          <iframe 
            src="https://www.google.com/maps/embed?..." 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        
        {/* Office Hours */}
        <div className="p-6 rounded-2xl bg-[#F9FAF9] border border-[#E7EBE9]">
          <h3 className="font-bold text-[#0D1F1A] mb-4">Horaires d'Ouverture</h3>
          <div className="space-y-2 text-sm text-[#47534E]">
            <div className="flex justify-between">
              <span>Lundi - Jeudi</span>
              <span className="font-semibold">9h00 - 17h00</span>
            </div>
            <div className="flex justify-between">
              <span>Vendredi</span>
              <span className="font-semibold">9h00 - 12h00</span>
            </div>
            <div className="flex justify-between">
              <span>Samedi - Dimanche</span>
              <span className="text-red-500">Fermé</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
```

### Design Notes:
- Use existing `Input` component from `@/components/ui/input`
- Add `Textarea` component (create if doesn't exist)
- Form validation with react-hook-form + zod
- Success message after submission
- Loading state on button during submission

---

## 2️⃣ Postuler Page (`/postuler`)

### Layout: Multi-Step Form with Progress Indicator

```tsx
// Step 1: Informations Personnelles
// Step 2: Détails du Projet
// Step 3: Pitch & Vision
// Step 4: Programme Souhaité
// Step 5: Confirmation
```

### Components Needed:

#### **Stepper Component**
```tsx
<div className="flex items-center justify-center mb-12">
  {steps.map((step, index) => (
    <div key={index} className="flex items-center">
      <div className={`
        w-10 h-10 rounded-full flex items-center justify-center
        ${currentStep > index ? 'bg-[#1B1AFE] text-white' : 
          currentStep === index ? 'bg-[#1B1AFE] text-white' : 
          'bg-[#E7EBE9] text-[#47534E]'}
      `}>
        {currentStep > index ? <Check /> : index + 1}
      </div>
      {index < steps.length - 1 && (
        <div className={`w-20 h-1 ${
          currentStep > index ? 'bg-[#1B1AFE]' : 'bg-[#E7EBE9]'
        }`} />
      )}
    </div>
  ))}
</div>
```

#### **Form Steps**

**Step 1: Personal Info**
```tsx
<Input placeholder="Prénom *" />
<Input placeholder="Nom *" />
<Input type="email" placeholder="Email *" />
<Input type="tel" placeholder="Téléphone *" />
<Input placeholder="LinkedIn (optionnel)" />
```

**Step 2: Project Details**
```tsx
<Input placeholder="Nom du Projet *" />
<Select placeholder="Secteur d'Activité *">
  <option>Tech / SaaS</option>
  <option>E-commerce</option>
  <option>Fintech</option>
  <option>Healthtech</option>
  <option>Autre</option>
</Select>
<Select placeholder="Stade du Projet *">
  <option>Idée</option>
  <option>Prototype</option>
  <option>MVP</option>
  <option>Produit Lancé</option>
</Select>
<Input type="number" placeholder="Taille de l'Équipe *" />
```

**Step 3: Pitch**
```tsx
<Textarea placeholder="Quel problème résolvez-vous ? *" rows={4} />
<Textarea placeholder="Quelle est votre solution ? *" rows={4} />
<Textarea placeholder="Qui sont vos clients cibles ? *" rows={4} />
<Textarea placeholder="Qu'est-ce qui vous différencie ? *" rows={4} />
```

**Step 4: Program Selection**
```tsx
<div className="grid md:grid-cols-2 gap-6">
  <ProgramCard
    title="Incubation"
    description="De l'idée au lancement"
    duration="6 mois"
    selected={program === 'incubation'}
    onClick={() => setProgram('incubation')}
  />
  <ProgramCard
    title="Accélération"
    description="Scalez votre startup"
    duration="3 mois"
    selected={program === 'acceleration'}
    onClick={() => setProgram('acceleration')}
  />
</div>

{/* File Upload */}
<div className="border-2 border-dashed border-[#E7EBE9] rounded-2xl p-8 text-center">
  <Upload className="w-12 h-12 mx-auto mb-4 text-[#47534E]" />
  <p className="text-sm text-[#47534E] mb-2">
    Pitch Deck ou Business Plan (optionnel)
  </p>
  <Button variant="outline">Choisir un Fichier</Button>
</div>
```

**Step 5: Confirmation**
```tsx
<div className="text-center py-12">
  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
    <Check className="w-10 h-10 text-green-600" />
  </div>
  <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
    Candidature Envoyée !
  </h2>
  <p className="text-lg text-[#47534E] mb-8">
    Nous étudierons votre dossier et vous contacterons sous 5 jours ouvrés.
  </p>
  <div className="space-y-4">
    <p className="text-sm text-[#47534E]">
      Un email de confirmation a été envoyé à <strong>{email}</strong>
    </p>
    <Button asChild>
      <Link href="/">Retour à l'Accueil</Link>
    </Button>
  </div>
</div>
```

### Design Notes:
- Save form data to localStorage on each step (prevent data loss)
- Validate each step before allowing "Next"
- Show summary on final step before submission
- Email confirmation after submission
- File upload with size/type validation (PDF, PPTX, max 10MB)

---

## 3️⃣ Équipe Page (`/equipe`)

### Layout: Team Grid + Mentors Section

```tsx
<section className="py-20 bg-white">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
    
    {/* Hero */}
    <div className="text-center mb-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-4">
        L'Équipe Incubia
      </h1>
      <p className="text-xl text-[#47534E] max-w-3xl mx-auto">
        Des experts passionnés au service de votre réussite
      </p>
    </div>
    
    {/* Leadership Team */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0D1F1A] mb-8">Direction</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map(person => (
          <TeamCard key={person.id} {...person} />
        ))}
      </div>
    </div>
    
    {/* Mentors Section */}
    <div id="mentors" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
          Nos Mentors
        </h2>
        <p className="text-lg text-[#47534E] max-w-2xl mx-auto mb-8">
          100+ experts certifiés dans tous les domaines de l'entrepreneuriat
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.filter(m => filter === 'Tous' || m.category === filter)
          .map(mentor => (
            <MentorCard key={mentor.id} {...mentor} />
          ))}
      </div>
    </div>
    
    {/* Become a Mentor CTA */}
    <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] text-white text-center">
      <h3 className="text-3xl font-bold mb-4">Devenez Mentor</h3>
      <p className="text-lg mb-8 opacity-90">
        Partagez votre expertise et accompagnez la prochaine génération d'entrepreneurs
      </p>
      <Button size="lg" variant="secondary">
        Rejoindre le Réseau
      </Button>
    </div>
    
  </div>
</section>
```

#### **Team Card Component**
```tsx
function TeamCard({ name, role, photo, bio, linkedin }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#E7EBE9] hover:shadow-xl transition-all">
      <div className="aspect-square overflow-hidden">
        <Image 
          src={photo} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0D1F1A] mb-1">{name}</h3>
        <p className="text-sm text-[#1B1AFE] font-semibold mb-3">{role}</p>
        <p className="text-sm text-[#47534E] mb-4">{bio}</p>
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-[#1B1AFE] hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
```

#### **Mentor Card Component**
```tsx
function MentorCard({ name, expertise, photo, companies, linkedin }) {
  return (
    <div className="p-6 rounded-2xl border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all group">
      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#E7EBE9] group-hover:border-[#1B1AFE] transition-colors">
        <Image src={photo} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-lg font-bold text-[#0D1F1A] text-center mb-2">{name}</h4>
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {expertise.map(exp => (
          <span key={exp} className="px-3 py-1 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-xs font-semibold">
            {exp}
          </span>
        ))}
      </div>
      <p className="text-xs text-[#47534E] text-center mb-4">
        Ex: {companies.join(', ')}
      </p>
      {linkedin && (
        <a 
          href={linkedin} 
          target="_blank"
          className="flex items-center justify-center gap-2 text-sm text-[#47534E] hover:text-[#1B1AFE] transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          Profil
        </a>
      )}
    </div>
  )
}
```

---

## 4️⃣ Service Pages Template

### All service pages follow this structure:

```tsx
// /services/domiciliation
// /services/coworking
// /services/financement
// /services/creation
```

### Layout:

```tsx
<section className="py-20 bg-white">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
    
    {/* Hero */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
        <Sparkles className="w-4 h-4" />
        Service
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-4">
        {/* Service Name */}
      </h1>
      <p className="text-xl text-[#47534E] max-w-3xl mx-auto">
        {/* Service Description */}
      </p>
    </div>
    
    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {features.map(feature => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
    
    {/* How It Works */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-[#0D1F1A] text-center mb-12">
        Comment Ça Marche ?
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <StepCard key={index} number={index + 1} {...step} />
        ))}
      </div>
    </div>
    
    {/* Pricing (if applicable) */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-[#0D1F1A] text-center mb-12">
        Tarifs
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingTiers.map(tier => (
          <PricingCard key={tier.id} {...tier} />
        ))}
      </div>
    </div>
    
    {/* FAQ */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-[#0D1F1A] text-center mb-12">
        Questions Fréquentes
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    
    {/* CTA */}
    <div className="p-12 rounded-3xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] text-white text-center">
      <h3 className="text-3xl font-bold mb-4">Intéressé par ce Service ?</h3>
      <p className="text-lg mb-8 opacity-90">
        Contactez-nous pour en savoir plus
      </p>
      <div className="flex gap-4 justify-center">
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Nous Contacter</Link>
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
          <Link href="/postuler">Postuler Maintenant</Link>
        </Button>
      </div>
    </div>
    
  </div>
</section>
```

---

## 5️⃣ Ressources Page (`/ressources`)

### Layout: Tabbed Interface or Sections

```tsx
<section className="py-20 bg-white">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
    
    {/* Hero */}
    <div className="text-center mb-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-4">
        Hub Ressources
      </h1>
      <p className="text-xl text-[#47534E] max-w-3xl mx-auto">
        Guides, templates et outils gratuits pour entrepreneurs
      </p>
    </div>
    
    {/* Guides Section */}
    <div id="guides" className="mb-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-[#0D1F1A] mb-8">
        Guides Pratiques
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {guides.map(guide => (
          <ResourceCard 
            key={guide.id} 
            {...guide} 
            type="guide"
          />
        ))}
      </div>
    </div>
    
    {/* Templates Section */}
    <div id="templates" className="mb-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-[#0D1F1A] mb-8">
        Templates Gratuits
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {templates.map(template => (
          <ResourceCard 
            key={template.id} 
            {...template} 
            type="template"
          />
        ))}
      </div>
    </div>
    
    {/* Newsletter CTA */}
    <div className="p-12 rounded-3xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] text-white text-center">
      <h3 className="text-3xl font-bold mb-4">Recevez Plus de Ressources</h3>
      <p className="text-lg mb-8 opacity-90">
        Abonnez-vous à notre newsletter pour recevoir nos derniers guides et templates
      </p>
      <div className="flex gap-3 max-w-md mx-auto">
        <Input 
          type="email" 
          placeholder="Votre email" 
          className="bg-white/20 border-white/40 text-white placeholder:text-white/70"
        />
        <Button size="lg" variant="secondary">
          S'Abonner
        </Button>
      </div>
    </div>
    
  </div>
</section>
```

#### **Resource Card Component**
```tsx
function ResourceCard({ title, description, thumbnail, downloads, type, fileUrl }) {
  const [showEmailGate, setShowEmailGate] = useState(false)
  
  return (
    <div className="group rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-xl transition-all">
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10">
        {thumbnail ? (
          <Image src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="w-16 h-16 text-[#1B1AFE]" />
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-xs font-semibold">
            {type === 'guide' ? 'Guide' : 'Template'}
          </span>
          <span className="text-xs text-[#47534E]">
            {downloads} téléchargements
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">{title}</h3>
        <p className="text-sm text-[#47534E] mb-4">{description}</p>
        <Button 
          className="w-full" 
          onClick={() => setShowEmailGate(true)}
        >
          <Download className="w-4 h-4 mr-2" />
          Télécharger Gratuitement
        </Button>
      </div>
      
      {/* Email Gate Modal */}
      {showEmailGate && (
        <EmailGateModal 
          resourceTitle={title}
          onClose={() => setShowEmailGate(false)}
          onSubmit={(email) => {
            // Send email to backend
            // Trigger download
            window.open(fileUrl, '_blank')
            setShowEmailGate(false)
          }}
        />
      )}
    </div>
  )
}
```

---

## 6️⃣ Blog Page (`/blog`)

### Layout: Featured Post + Grid

```tsx
<section className="py-20 bg-white">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
    
    {/* Hero */}
    <div className="text-center mb-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-4">
        Blog Incubia
      </h1>
      <p className="text-xl text-[#47534E] max-w-3xl mx-auto">
        Conseils, insights et actualités de l'écosystème startup algérien
      </p>
    </div>
    
    {/* Featured Post */}
    <div className="mb-16">
      <FeaturedBlogCard {...featuredPost} />
    </div>
    
    {/* Category Filter */}
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map(cat => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "default" : "outline"}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
    
    {/* Blog Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts
        .filter(p => selectedCategory === 'Tous' || p.category === selectedCategory)
        .map(post => (
          <BlogCard key={post.id} {...post} />
        ))}
    </div>
    
    {/* Pagination */}
    <div className="flex justify-center gap-2 mt-12">
      <Button variant="outline" disabled={currentPage === 1}>
        Précédent
      </Button>
      {[1, 2, 3, 4].map(page => (
        <Button 
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Button>
      ))}
      <Button variant="outline">
        Suivant
      </Button>
    </div>
    
  </div>
</section>
```

#### **Blog Card Component**
```tsx
function BlogCard({ title, excerpt, author, date, category, thumbnail, slug, readTime }) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-xl transition-all">
        <div className="aspect-video overflow-hidden">
          <Image 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-xs font-semibold">
              {category}
            </span>
            <span className="text-xs text-[#47534E]">{readTime} min</span>
          </div>
          <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#47534E] mb-4 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-[#47534E]">
            <span>{author}</span>
            <span>•</span>
            <span>{new Date(date).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
```

---

## 🎨 Reusable Component Library

### Components to Create (if not existing):

1. **Textarea** (`@/components/ui/textarea`)
2. **Select** (`@/components/ui/select`)
3. **Modal/Dialog** (`@/components/ui/dialog`)
4. **Tabs** (`@/components/ui/tabs`)
5. **Badge** (`@/components/ui/badge`)
6. **Avatar** (`@/components/ui/avatar`)

### Utility Components:

```tsx
// EmailGateModal.tsx
export function EmailGateModal({ resourceTitle, onClose, onSubmit }) {
  const [email, setEmail] = useState('')
  
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Télécharger: {resourceTitle}</DialogTitle>
          <DialogDescription>
            Entrez votre email pour recevoir le lien de téléchargement
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input 
            type="email" 
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button 
            className="w-full" 
            onClick={() => onSubmit(email)}
            disabled={!email}
          >
            Télécharger
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

---

## 🎯 Design System Checklist

### Before Building Each Page:

- [ ] Use existing color palette (no new colors)
- [ ] Follow spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- [ ] Use existing typography scale
- [ ] Maintain border-radius consistency (8px, 12px, 16px, 24px)
- [ ] Reuse existing components where possible
- [ ] Add hover states to all interactive elements
- [ ] Ensure mobile responsiveness
- [ ] Add loading states to forms/buttons
- [ ] Include error states for forms
- [ ] Add empty states where applicable

---

## 📱 Responsive Breakpoints

```css
/* Mobile: 0-639px (default) */
/* Tablet: 640px-1023px */
sm: '640px'

/* Desktop: 1024px-1279px */
lg: '1024px'

/* Large Desktop: 1280px+ */
xl: '1280px'

/* Extra Large: 1600px+ */
2xl: '1600px'
```

---

## 🚀 Implementation Priority

1. **Contact Page** - Highest priority (main CTA destination)
2. **Postuler Page** - Critical for conversions
3. **Équipe Page** - Builds credibility
4. **Service Pages** - Complete navigation
5. **Ressources Page** - Lead generation
6. **Blog Page** - SEO & content marketing
7. **Legal Pages** - Compliance

---

*Use these specifications as templates. Adjust content and features based on actual business requirements.*
