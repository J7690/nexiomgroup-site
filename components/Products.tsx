'use client'

import { motion } from 'framer-motion'

export default function Products() {
  const products = [
    {
      title: 'Academia – Vitrine centrale des offres & inscriptions',
      tag: 'Academia',
      description: 'Academia concentre l\'ensemble des programmes universitaires, formations professionnelles, cours d\'appui, préparations de concours et opportunités d\'emploi proposés via Nexiom Group.',
      features: [
        'Publier des offres structurées et facilement compréhensibles',
        'Transformer les demandes en dossiers suivis et structurés',
        'Suivre l\'avancement des candidatures et inscriptions'
      ],
      image: '/assets/img/academia04.png',
      link: '#academia',
      linkText: 'Comprendre le rôle d\'Academia'
    },
    {
      title: 'Nexiom AI Studio – Studio d\'IA marketing pour vos campagnes',
      tag: 'Nexiom AI Studio',
      description: 'Nexiom AI Studio agit comme un assistant marketing qui planifie, coordonne et automatise vos publications sur les réseaux sociaux.',
      features: [
        'Programmer et coordonner les publications sur les réseaux sociaux',
        'Aligner les messages de campagne avec les offres publiées',
        'Suivre l\'impact des actions de communication'
      ],
      image: '/assets/img/nexiom04.png',
      link: '#contact',
      linkText: 'Parler avec un expert Nexiom AI'
    }
  ]

  return (
    <section id="products" className="section section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Produits numériques Nexiom</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deux plateformes complémentaires pour présenter vos offres de formation et piloter votre communication sur les réseaux sociaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                {product.tag}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {product.description}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={product.link} className="text-primary font-semibold hover:underline">
                {product.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
