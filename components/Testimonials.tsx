'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  _id?: string
  id?: number
  name: string
  role: string
  text: string
  avatar?: string | { asset: { url: string } }
  rating: number
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Essayer de charger depuis Sanity CMS, fallback vers JSON
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => {
        console.error('Error loading testimonials from CMS, falling back to JSON:', err)
        fetch('/assets/data/content.json')
          .then(res => res.json())
          .then(data => setTestimonials(data.testimonials))
      })
  }, [])

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (testimonials.length === 0) {
    return (
      <section className="section section-alt">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>Chargement des témoignages...</p>
          </div>
        </div>
      </section>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Témoignages</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les expériences de nos partenaires et étudiants.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={typeof currentTestimonial.avatar === 'string' 
                      ? currentTestimonial.avatar 
                      : currentTestimonial.avatar?.asset?.url || '/assets/img/nexiom01.png'}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "{currentTestimonial.text}"
                  </p>
                  <div className="mb-3">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent inline fill-accent" />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
