import {defineField, defineType} from 'sanity'

export const customEvent = defineType({
  name: 'customEvent',
  title: 'Custom Event',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {
            title: 'InProgress',
            value: 'inProgress',
          },
          {
            title: 'Approved',
            value: 'approved',
          },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule) =>
        Rule.required().custom((endDate, context) => {
          const {startDate} = context.document as {startDate?: string}

          if (!endDate || !startDate) return true

          if (new Date(endDate) < new Date(startDate)) {
            return 'End date cannot be earlier than start date'
          }

          return true
        }),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Internal',
            value: 'internal',
          },
          {
            title: 'External',
            value: 'external',
          },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {
                title: 'Marketing',
                value: 'Marketing',
              },
              {
                title: 'Development',
                value: 'Development',
              },
            ],
            layout: 'radio',
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
