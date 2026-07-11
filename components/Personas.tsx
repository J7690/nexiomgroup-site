'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Building2, Briefcase } from 'lucide-react'

export default function Personas() {
  const personas = [
    {
      icon: GraduationCap,
      title: 'Étudiants & Familles',
      description: 'Trouvez votre formation idéale et facilitez votre inscription',
      link: '#academia',
      linkText: 'Explorer les formations'
    },
    {
      icon: Building2,
      title: 'Universités & Écoles',
      description: 'Diffusez vos programmes et recevez des candidatures qualifiées',
      link: '#contact',
      linkText: 'Devenir partenaire'
    },
    {
      icon: Briefcase,
      title: 'Entreprises & Institutions',
      description: 'Automatisez votre communication et pilotez vos campagnes',
      link: '#contact',
      linkText: 'Découvrir Nexiom AI Studio'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Vous êtes ?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sélectionnez votre profil pour découvrir les solutions Nexiom adaptées à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:border-primary cursor-pointer group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <persona.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {persona.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                {persona.description}
              </p>
              <a href={persona.link} className="flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                {persona.linkText}
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
