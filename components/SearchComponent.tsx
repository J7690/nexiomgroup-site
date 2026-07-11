'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

interface SearchResult {
  objectID?: string
  type: 'article' | 'resource' | 'testimonial' | 'stat'
  title?: string
  name?: string
  excerpt?: string
  description?: string
  text?: string
  category?: string
  audience?: string
}

export default function SearchComponent() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length < 2) {
        setResults([])
        setShowResults(false)
        return
      }

      setLoading(true)
      try {
        // Utiliser Algolia pour la recherche
        const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '81FZUPXAGN'
        const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || 'f5e4deaae33a9807e19e2d3b398a9225'
        
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/nexiom_content/query`, {
          method: 'POST',
          headers: {
            'X-Algolia-API-Key': searchKey,
            'X-Algolia-Application-Id': appId,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            hitsPerPage: 6,
          })
        })

        const data = await response.json()
        setResults(data.hits || [])
        setShowResults(true)
      } catch (error) {
        console.error('Algolia search error:', error)
        // Fallback vers JSON si Algolia échoue
        try {
          const response = await fetch('/assets/data/content.json')
          const jsonData = await response.json()
          
          const allItems: SearchResult[] = [
            ...jsonData.blog.map((item: any) => ({ ...item, type: 'article' as const })),
            ...jsonData.resources.map((item: any) => ({ ...item, type: 'resource' as const })),
            ...jsonData.testimonials.map((item: any) => ({ ...item, type: 'testimonial' as const }))
          ]

          const filteredItems = allItems.filter((item: SearchResult) => {
            const searchFields = [
              item.title,
              item.description || item.text,
              item.name
            ].join(' ').toLowerCase()
            
            return searchFields.includes(query.toLowerCase())
          })

          setResults(filteredItems.slice(0, 6))
          setShowResults(true)
        } catch (jsonError) {
          console.error('Fallback JSON error:', jsonError)
          setResults([])
        }
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [query])

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setShowResults(false)
  }

  return (
    <div className="relative">
      <div className="flex items-center bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-full px-4 py-2 gap-2 w-64 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
        <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-500"
          aria-label="Rechercher sur le site"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Effacer la recherche"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
        )}
      </div>

      {loading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg p-4 text-center text-gray-600 dark:text-gray-400">
          Recherche en cours...
        </div>
      )}

      {showResults && !loading && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((item) => (
            <div
              key={item.objectID}
              className="p-4 border-b border-gray-100 dark:border-slate-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer transition-colors"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                {item.type === 'article' ? 'Article' : item.type === 'resource' ? 'Ressource' : item.type === 'testimonial' ? 'Témoignage' : 'Statistique'}
              </span>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {item.title || item.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {item.excerpt || item.description || item.text?.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}

      {showResults && !loading && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg p-4 text-center text-gray-600 dark:text-gray-400">
          Aucun résultat pour "{query}"
        </div>
      )}
    </div>
  )
}
