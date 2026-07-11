import { searchClient } from '../lib/algolia'
import fs from 'fs'
import path from 'path'

async function indexContentToAlgolia() {
  try {
    console.log('🔍 Indexation du contenu dans Algolia...')
    
    // Charger le contenu JSON existant
    const contentPath = path.join(__dirname, '../assets/data/content.json')
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'))
    
    const index = searchClient.initIndex('nexiom_content')
    
    // Préparer les objets à indexer
    const objectsToIndex = [
      ...content.blog.map((item: any) => ({
        objectID: `blog-${item.id}`,
        type: 'article',
        title: item.title,
        category: item.category,
        excerpt: item.excerpt,
        author: item.author,
        date: item.date,
      })),
      ...content.resources.map((item: any) => ({
        objectID: `resource-${item.id}`,
        type: 'resource',
        title: item.title,
        category: item.category,
        audience: item.audience,
        description: item.description,
      })),
      ...content.testimonials.map((item: any) => ({
        objectID: `testimonial-${item.id}`,
        type: 'testimonial',
        name: item.name,
        role: item.role,
        text: item.text,
      })),
      ...content.stats.map((item: any) => ({
        objectID: `stat-${item.id}`,
        type: 'stat',
        label: item.label,
        number: item.number,
      }))
    ]
    
    console.log(`📊 ${objectsToIndex.length} objets à indexer`)
    
    // Indexer les objets
    await index.saveObjects(objectsToIndex)
    
    console.log('✅ Contenu indexé avec succès dans Algolia!')
    console.log(`📝 Articles de blog: ${content.blog.length}`)
    console.log(`📚 Ressources: ${content.resources.length}`)
    console.log(`⭐ Témoignages: ${content.testimonials.length}`)
    console.log(`📊 Statistiques: ${content.stats.length}`)
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'indexation:', error)
    process.exit(1)
  }
}

indexContentToAlgolia()
