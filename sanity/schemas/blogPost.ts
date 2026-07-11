export default {
  name: 'blogPost',
  title: 'Article de blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Actualités', value: 'news' },
          { title: 'Innovation', value: 'innovation' },
          { title: 'Partenariats', value: 'partnerships' },
          { title: 'Éducation', value: 'education' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
