import {defineField, defineType} from 'sanity'

export const cardsPage = defineType({
  name: 'cardsPage',
  title: 'Cards Page',
  type: 'document',
  fields: [
    defineField({
      name: 'h1',
      type: 'string',
      title: 'h1 Text',
    }),
    defineField({
      name: 'subText',
      type: 'string',
      title: 'SubText',
    }),
    defineField({
      name: 'infoCards',
      title: 'Info Cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'cardInfo'}]}],
    }),
  ],
})
