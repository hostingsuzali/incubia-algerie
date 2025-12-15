// Formation queries
export const formationsQuery = `*[_type == "formation" && active == true] | order(order asc, _createdAt desc) {
  _id,
  title,
  slug,
  category,
  description,
  fullDescription,
  forWho,
  prerequisites,
  results,
  format,
  duration,
  rhythm,
  "instructor": instructor->{
    name,
    role,
    experience,
    image
  },
  "pricing": price->{
    name,
    price,
    currency,
    discount,
    paymentOptions
  },
  color,
  image,
  featured,
  order
}`

export const formationBySlugQuery = `*[_type == "formation" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  fullDescription,
  forWho,
  prerequisites,
  results,
  format,
  duration,
  rhythm,
  "instructor": instructor->{
    name,
    role,
    experience,
    bio,
    expertise,
    image,
    linkedin,
    twitter
  },
  "pricing": price->{
    name,
    price,
    priceEUR,
    priceUSD,
    currency,
    discount,
    discountEndDate,
    features,
    paymentOptions
  },
  color,
  image,
  featured
}`

// Pricing queries
export const pricingQuery = `*[_type == "pricing" && active == true] | order(_createdAt desc) {
  _id,
  name,
  slug,
  type,
  price,
  priceEUR,
  priceUSD,
  currency,
  discount,
  discountEndDate,
  features,
  paymentOptions
}`

// Instructor queries
export const instructorsQuery = `*[_type == "instructor" && active == true] | order(_createdAt desc) {
  _id,
  name,
  slug,
  role,
  experience,
  bio,
  expertise,
  image,
  linkedin,
  twitter,
  website
}`

// Mentor queries
export const mentorsQuery = `*[_type == "mentor" && available == true] | order(featured desc, _createdAt desc) {
  _id,
  name,
  slug,
  title,
  company,
  bio,
  specialties,
  achievements,
  image,
  linkedin,
  featured
}`

// Programme queries
export const programmesQuery = `*[_type == "programme" && active == true] | order(order asc, _createdAt desc) {
  _id,
  name,
  slug,
  type,
  tagline,
  description,
  fullDescription,
  forWho,
  duration,
  features,
  deliverables,
  "pricing": pricing->{
    name,
    price,
    currency,
    discount,
    paymentOptions
  },
  color,
  icon,
  image,
  order
}`

// Service queries
export const servicesQuery = `*[_type == "service" && active == true] | order(_createdAt desc) {
  _id,
  name,
  slug,
  category,
  description,
  fullDescription,
  features,
  "pricing": pricing->{
    name,
    price,
    currency
  },
  icon,
  color,
  image
}`

// Blog queries
export const blogPostsQuery = `*[_type == "blogPost" && published == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "author": author->{
    name,
    role,
    image
  },
  category,
  tags,
  featuredImage,
  publishedAt,
  featured
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  "author": author->{
    name,
    role,
    bio,
    image,
    linkedin,
    twitter
  },
  category,
  tags,
  featuredImage,
  publishedAt
}`

// Event queries
export const eventsQuery = `*[_type == "event" && published == true] | order(startDate desc) {
  _id,
  title,
  slug,
  description,
  eventType,
  startDate,
  endDate,
  location,
  format,
  capacity,
  registrationLink,
  image,
  featured
}`

// Partner queries
export const partnersQuery = `*[_type == "partner" && active == true] | order(order asc, _createdAt desc) {
  _id,
  name,
  slug,
  description,
  logo,
  website,
  category,
  featured,
  order
}`

// Team queries
export const teamMembersQuery = `*[_type == "teamMember" && active == true] | order(order asc, _createdAt desc) {
  _id,
  name,
  slug,
  role,
  bio,
  image,
  linkedin,
  twitter,
  email,
  order
}`

// FAQ queries
export const faqQuery = `*[_type == "faq" && active == true] | order(order asc, _createdAt desc) {
  _id,
  question,
  answer,
  category,
  order
}`

// Testimonial queries
export const testimonialsQuery = `*[_type == "testimonial" && active == true] | order(featured desc, _createdAt desc) {
  _id,
  name,
  role,
  company,
  content,
  image,
  rating,
  relatedTo,
  featured
}`

// Site settings query
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName,
  siteDescription,
  logo,
  favicon,
  contactEmail,
  contactPhone,
  address,
  socialLinks,
  seo,
  analytics
}`
