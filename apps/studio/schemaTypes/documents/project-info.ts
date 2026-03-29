import {defineField, defineType} from 'sanity'

export const projectInfo = defineType({
  name: 'projectInfo',
  title: 'Project Info',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
