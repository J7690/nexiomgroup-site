'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  excerpt: string
  image: string
  author: string
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch('/assets/data/content.json')
      .then(res => res.json())
      .then(data => setBlogPosts(data.blog))
      .catch(err => console.error('Error loading blog posts:', err))
  }, [])

  if (blogPosts.length === 0) {
    return null
  }

  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Actualités & Blog</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Restez informé des dernières nouvelles de Nexiom Group et de l'éducation en Afrique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <a href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                Lire l'article <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
