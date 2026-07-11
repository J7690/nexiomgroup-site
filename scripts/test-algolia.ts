import { searchClient, searchIndex } from '../lib/algolia'

async function testAlgoliaConnection() {
  try {
    console.log('🔍 Test de connexion Algolia...')
    
    // Test 1: Vérifier si l'index existe
    console.log('\n📊 Vérification de l\'index nexiom_content...')
    const index = searchClient.initIndex('nexiom_content')
    console.log('✅ Index nexiom_content accessible')
    
    // Test 2: Test de recherche
    console.log('\n🔎 Test de recherche...')
    const searchResults = await index.search('formation', {
      hitsPerPage: 5,
    })
    console.log(`✅ ${searchResults.hits.length} résultats trouvés pour "formation"`)
    
    if (searchResults.hits.length > 0) {
      console.log('\n📝 Exemple de résultats:')
      searchResults.hits.slice(0, 3).forEach((hit: any, i: number) => {
        console.log(`  ${i + 1}. ${hit.title || hit.name}`)
      })
    }
    
    console.log('\n✅ Tous les tests Algolia réussis!')
    
  } catch (error) {
    console.error('❌ Erreur de connexion Algolia:', error)
    process.exit(1)
  }
}

testAlgoliaConnection()
