'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="section pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Écosystème Nexiom
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Courtage académique &{' '}
              <span className="text-primary">solutions numériques</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              Nexiom Group connecte étudiants, universités et institutions grâce à Academia et Nexiom AI Studio.
              Automatisez votre communication et pilotez vos campagnes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Découvrir Nexiom
              </a>
              <a href="#academia" className="btn btn-secondary">
                En savoir plus
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Étudiants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">45+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Partenaires</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/assets/img/nexiom01.png"
                alt="Illustration des interfaces d'Academia et de Nexiom AI Studio"
                className="rounded-2xl shadow-2xl"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl -z-10 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
