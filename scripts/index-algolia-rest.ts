import fs from 'fs'
import path from 'path'

async function indexContentToAlgolia() {
  try {
    console.log('🔍 Indexation du contenu dans Algolia via API REST...')
    
    // Charger le contenu JSON existant
    const contentPath = path.join(__dirname, '../assets/data/content.json')
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'))
    
    const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '81FZUPXAGN'
    const apiKey = process.env.ALGOLIA_ADMIN_KEY || 'ddc7b0de8c12584cbed8f990b53437a2'
    const indexName = 'nexiom_content'
    
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
    
    // Indexer via API REST
    const response = await fetch(`https://${appId}.algolia.net/1/indexes/${indexName}/batch`, {
      method: 'POST',
      headers: {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requests: objectsToIndex.map(obj => ({
          action: 'addObject',
          body: obj
        }))
      })
    })
    
    if (!response.ok) {
      throw new Error(`Erreur API Algolia: ${response.status} ${response.statusText}`)
    }
    
    const result = await response.json()
    
    console.log('✅ Contenu indexé avec succès dans Algolia!')
    console.log(`📝 Articles de blog: ${content.blog.length}`)
    console.log(`📚 Ressources: ${content.resources.length}`)
    console.log(`⭐ Témoignages: ${content.testimonials.length}`)
    console.log(`📊 Statistiques: ${content.stats.length}`)
    console.log(`🔗 Task ID: ${result.taskID}`)
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'indexation:', error)
    process.exit(1)
  }
}

indexContentToAlgolia()
