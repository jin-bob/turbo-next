import {defineField, defineType} from 'sanity'

export const cat = defineType({
  name: 'catImage',
  title: 'Cat Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Cat Image',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
