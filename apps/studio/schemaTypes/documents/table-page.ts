import {defineField, defineType} from 'sanity'

export const tablePage = defineType({
  name: 'tablePage',
  title: 'Table Page',
  type: 'document',
  fields: [
    defineField({
      name: 'h1',
      title: 'h1 Text',
      type: 'string',
    }),
    defineField({
      name: 'tableData',
      title: 'Table Data',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'customEvent'}]}],
    }),
  ],
})
