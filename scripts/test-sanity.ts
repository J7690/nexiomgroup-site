import { client } from '../lib/sanity'

async function testSanityConnection() {
  try {
    console.log('🔍 Test de connexion Sanity...')
    
    // Test 1: Récupérer les témoignages
    console.log('\n📝 Récupération des témoignages...')
    const testimonials = await client.fetch(`*[_type == "testimonial"]`)
    console.log(`✅ ${testimonials.length} témoignages trouvés`)
    
    // Test 2: Récupérer les statistiques
    console.log('\n📊 Récupération des statistiques...')
    const stats = await client.fetch(`*[_type == "stat"]`)
    console.log(`✅ ${stats.length} statistiques trouvées`)
    
    // Test 3: Récupérer les articles de blog
    console.log('\n📰 Récupération des articles de blog...')
    const blogPosts = await client.fetch(`*[_type == "blogPost"]`)
    console.log(`✅ ${blogPosts.length} articles de blog trouvés`)
    
    // Test 4: Récupérer les ressources
    console.log('\n📚 Récupération des ressources...')
    const resources = await client.fetch(`*[_type == "resource"]`)
    console.log(`✅ ${resources.length} ressources trouvées`)
    
    console.log('\n✅ Tous les tests Sanity réussis!')
    
  } catch (error) {
    console.error('❌ Erreur de connexion Sanity:', error)
    process.exit(1)
  }
}

testSanityConnection()
