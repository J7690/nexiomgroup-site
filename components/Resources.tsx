'use client'

import { motion } from 'framer-motion'

export default function Resources() {
  const resources = [
    {
      title: 'Lancement d\'Academia',
      category: 'Academia',
      audience: 'Étudiants & familles',
      description: 'Une plateforme unique pour retrouver les offres de formations, cours de soutien, préparations de concours et opportunités d\'emploi.',
      image: '/assets/img/academia04.png',
      ctaLabel: 'Être informé du lancement',
      ctaHref: '#contact'
    },
    {
      title: 'Programme partenariats universités privées',
      category: 'Partenariats',
      audience: 'Universités & centres de formation',
      description: 'Nexiom Group structure la diffusion de vos programmes via Academia et accompagne la qualification des candidatures.',
      image: '/assets/img/Coserfa.jpg',
      ctaLabel: 'Devenir partenaire',
      ctaHref: '#contact'
    },
    {
      title: 'Automatisation de vos réseaux sociaux',
      category: 'Nexiom AI Studio',
      audience: 'Entreprises & institutions',
      description: 'Nexiom AI Studio assiste vos équipes en planifiant les publications et en pilotant vos réseaux sociaux.',
      image: '/assets/img/nexiom02.png',
      ctaLabel: 'Discuter avec Nexiom',
      ctaHref: '#contact'
    },
    {
      title: 'Opportunités pour étudiants et jeunes diplômés',
      category: 'Opportunités',
      audience: 'Étudiants & jeunes diplômés',
      description: 'Sélection d\'offres de stages, d\'emplois et de programmes d\'appui, relayées via nos canaux de communication.',
      image: '/assets/img/nexiom03.png',
      ctaLabel: 'Recevoir des informations',
      ctaHref: '#contact'
    }
  ]

  return (
    <section id="resources" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ressources & actualités Nexiom</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de ressources, annonces et points d'actualité pour les étudiants, les universités, les partenaires et les acteurs de l'éducation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="resources-grid">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              {resource.image && (
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 -mx-7 -mt-7"
                  loading="lazy"
                />
              )}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                {resource.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {resource.audience}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {resource.description}
              </p>
              <a href={resource.ctaHref} className="text-primary font-semibold hover:underline">
                {resource.ctaLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
