'use client'

import { useState, useEffect } from 'react'
import { Search, Sun, Moon, Menu, X } from 'lucide-react'
import SearchComponent from './SearchComponent'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 text-decoration-none text-inherit">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
            <div>
              <span className="block font-bold text-lg text-gray-900 dark:text-white">Nexiom Group</span>
              <span className="block text-xs text-gray-600 dark:text-gray-400">Education • Technology • Africa</span>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Accueil</a>
          <a href="#resources" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Ressources</a>
          <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Produits</a>
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
          <a href="#academia" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Academia</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <SearchComponent />
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-gray-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary transition-all"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden px-6 py-4 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="flex flex-col gap-4">
            <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#resources" className="text-gray-700 dark:text-gray-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Ressources</a>
            <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Produits</a>
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#academia" className="text-gray-700 dark:text-gray-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Academia</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}
