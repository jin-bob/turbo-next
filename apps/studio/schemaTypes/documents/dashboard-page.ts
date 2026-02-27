import {defineField, defineType} from 'sanity'

export const dashboardPage = defineType({
  name: 'dashboardPage',
  title: 'Dashboard Page',
  type: 'document',
  fields: [
    defineField({
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
    }),
    defineField({
      name: 'h1',
      type: 'text',
      title: 'h1 Text',
    }),
    defineField({
      name: 'subText',
      type: 'text',
      title: 'SubText',
    }),
    defineField({
      name: 'detailInfo',
      type: 'array',
      title: 'Detail Info',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'cardsTitle',
      type: 'text',
      title: 'Cards Title',
    }),
    defineField({
      name: 'cards',
      title: 'Project Cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projectInfo'}}],
    }),
  ],
})
