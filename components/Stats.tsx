'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  id: number
  number: number
  label: string
}

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>([])
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<number, number>>({})

  useEffect(() => {
    fetch('/assets/data/content.json')
      .then(res => res.json())
      .then(data => setStats(data.stats))
      .catch(err => console.error('Error loading stats:', err))
  }, [])

  useEffect(() => {
    stats.forEach(stat => {
      const duration = 2000
      const increment = stat.number / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          setAnimatedNumbers(prev => ({ ...prev, [stat.id]: stat.number }))
          clearInterval(timer)
        } else {
          setAnimatedNumbers(prev => ({ ...prev, [stat.id]: Math.floor(current) }))
        }
      }, 16)

      return () => clearInterval(timer)
    })
  }, [stats])

  if (stats.length === 0) {
    return null
  }

  return (
    <section className="section bg-gradient-to-br from-primary to-green-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                {animatedNumbers[stat.id] || 0}
                {stat.id === 3 && '%'}
              </div>
              <div className="text-sm md:text-base font-medium opacity-95">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
