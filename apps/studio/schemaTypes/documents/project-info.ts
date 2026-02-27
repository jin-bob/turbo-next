import {defineField, defineType} from 'sanity'

export const projectInfo = defineType({
  name: 'projectInfo',
  title: 'Project Info',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Project Link',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
    }),
    defineField({
      name: 'projectLogo',
      title: 'Project Logo',
      type: 'image',
    }),
    defineField({
      name: 'techs',
      title: 'Technologies used',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
