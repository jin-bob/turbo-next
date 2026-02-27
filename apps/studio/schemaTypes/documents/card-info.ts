import {defineField, defineType} from 'sanity'

export const cardInfo = defineType({
  name: 'cardInfo',
  title: 'Card Info',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'SLUG',
      type: 'slug',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
  ],
})
