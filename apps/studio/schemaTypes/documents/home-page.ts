import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'infoSection',
      title: 'Info Section',
      type: 'object',
      fields: [
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        }),
        defineField({
          name: 'linkedinLink',
          title: 'LinkedIn',
          type: 'string',
        }),
        defineField({
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
        }),
        defineField({
          name: 'bgImage',
          title: 'Background Image',
          type: 'image',
        }),
        defineField({
          name: 'username',
          title: 'Username',
          type: 'string',
        }),
        defineField({
          name: 'jobTitle',
          title: 'Job Title',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'status',
          title: 'Status',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'experience',
          title: 'Experience',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'job',
              title: 'Job',
              fields: [
                defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                }),
                defineField({
                  name: 'logo',
                  title: 'Logo',
                  type: 'image',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        }),
        defineField({
          name: 'descriptionLeft',
          title: 'Description Left',
          type: 'array',
          of: [{type: 'block'}],
        }),

        defineField({
          name: 'descriptionRight',
          title: 'Description Right',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'technologies',
          title: 'Technologies',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'experienceSection',
      title: 'Experience Section',
      type: 'object',
      fields: [
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        }),
        defineField({
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [{type: 'reference', to: {type: 'projectInfo'}}],
        }),
        defineField({
          name: 'companies',
          title: 'Companies',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ],
    }),
    defineField({
      name: 'educationSection',
      title: 'Education Section',
      type: 'object',
      fields: [
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'url',
        }),
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
        }),
        defineField({
          name: 'h3',
          title: 'H3',
          type: 'string',
        }),
        defineField({
          name: 'details',
          title: 'Details',
          type: 'string',
        }),
        defineField({
          name: 'summary',
          title: 'Summary',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
        }),
        defineField({
          name: 'mainText',
          title: 'Main Text',
          type: 'text',
        }),
        defineField({
          name: 'additionalText',
          title: 'Additional Text',
          type: 'text',
        }),
        defineField({
          name: 'locationText',
          title: 'Location Text',
          type: 'string',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'email',
          type: 'email',
          validation: (Rule: any) => Rule.email(),
        }),
        defineField({
          name: 'linkedinLink',
          title: 'Linkedin',
          type: 'url',
        }),
        defineField({
          name: 'githubLink',
          title: 'Github',
          type: 'url',
        }),
        defineField({
          name: 'telegramLink',
          title: 'Telegram',
          type: 'url',
        }),
      ],
    }),
  ],
})
