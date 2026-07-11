'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'Courtage académique',
      description: 'Accompagnement personnalisé des étudiants et familles dans le choix de formations adaptées à leur profil et leurs objectifs.',
      icon: '🎓'
    },
    {
      title: 'Automatisation marketing',
      description: 'Nexiom AI Studio planifie et pilote vos campagnes réseaux sociaux avec intelligence artificielle pour maximiser l\'impact.',
      icon: '🤖'
    },
    {
      title: 'Partenariats universités',
      description: 'Développement de partenariats stratégiques avec des universités et écoles pour diffuser vos programmes à large échelle.',
      icon: '🤝'
    },
    {
      title: 'Formation continue',
      description: 'Programmes de formation professionnelle et continue pour les entreprises et institutions souhaitant développer les compétences.',
      icon: '📚'
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner les étudiants, les universités et les entreprises dans leurs projets éducatifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
