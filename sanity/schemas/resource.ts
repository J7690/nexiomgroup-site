export default {
  name: 'resource',
  title: 'Ressource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Academia', value: 'academia' },
          { title: 'Partenariats', value: 'partnerships' },
          { title: 'Nexiom AI Studio', value: 'nexiom-ai-studio' },
          { title: 'Opportunités', value: 'opportunities' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'audience',
      title: 'Public cible',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ctaLabel',
      title: 'Label du bouton',
      type: 'string',
    },
    {
      name: 'ctaHref',
      title: 'Lien du bouton',
      type: 'string',
    },
  ],
}
