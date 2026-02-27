import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeText',
      type: 'string',
      title: 'Welcome Text',
    }),
  ],
})
