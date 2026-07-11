'use client'

import { motion } from 'framer-motion'

export default function Academia() {
  return (
    <section id="academia" className="section section-alt">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              Academia
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              La plateforme centrale des offres de formation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Academia concentre l'ensemble des programmes universitaires, formations professionnelles, cours d'appui, préparations de concours et opportunités d'emploi proposés via Nexiom Group.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary mt-1">✓</span>
                Catalogue centralisé des formations
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary mt-1">✓</span>
                Tunnel d'inscription structuré
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary mt-1">✓</span>
                Suivi des candidatures en temps réel
              </li>
              <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary mt-1">✓</span>
                Matching intelligent étudiant-formation
              </li>
            </ul>
            <a href="#contact" className="btn btn-primary">
              Découvrir Academia
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/img/academia04.png"
              alt="Interface de la plateforme Academia"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
