import {defineField, defineType} from 'sanity'

export const galleryPage = defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title Text',
    }),
    defineField({
      name: 'catImages',
      title: 'Cat Images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'catImage'}]}],
    }),
  ],
})
