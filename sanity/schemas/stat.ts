export default {
  name: 'stat',
  title: 'Statistique',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Nombre',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
