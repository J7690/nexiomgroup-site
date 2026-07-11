import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'z5ucihvm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skbz32VCapsGtNrx202EKsCDlxYdoqBy0TBZYotIEyEm8LeHiExjirmbJPGEm5mKuKB8dsrOSf2dJ9MJeYTBMx7gPFgylGyLGqm5WOsd4HUgqVPjL6oHTABBSGL3OjULyxufLaRUCYJlxBuyCpk3b5Ershz0dj3WbvOC2SsAz9bj8IRixzfC',
})

export async function getTestimonials() {
  return await client.fetch(`
    *[_type == "testimonial"] | order(_createdAt desc)
  `)
}

export async function getStats() {
  return await client.fetch(`
    *[_type == "stat"]
  `)
}

export async function getBlogPosts() {
  return await client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc)
  `)
}

export async function getResources() {
  return await client.fetch(`
    *[_type == "resource"]
  `)
}
