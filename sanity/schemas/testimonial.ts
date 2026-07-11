export default {
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Rôle',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Texte du témoignage',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'rating',
      title: 'Note',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
  ],
}
