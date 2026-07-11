// @ts-ignore - Algolia types issue, will be resolved with proper version
import { algoliasearch } from 'algoliasearch'

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'your-app-id',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || 'your-search-key'
)

export const searchIndex = searchClient.initIndex('nexiom_content')

export async function indexContent(content: any[]) {
  try {
    await searchIndex.saveObjects(content)
    console.log('Content indexed successfully')
  } catch (error) {
    console.error('Error indexing content:', error)
  }
}

export async function searchContent(query: string) {
  try {
    const results = await searchIndex.search(query, {
      hitsPerPage: 6,
    })
    return results.hits
  } catch (error) {
    console.error('Error searching content:', error)
    return []
  }
}
