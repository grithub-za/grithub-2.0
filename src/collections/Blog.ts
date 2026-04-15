import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'select',
      name: 'Author',
      options: [],
    },
    {
      type: 'group',
      fields: [
        {
          type: 'upload',
          name: 'Main Image',
          relationTo: 'media',
        },
        {
          type: 'text',
          name: 'Alternative Text',
        },
        {
          type: 'text',
          name: 'Image Caption',
        },
      ],
    },
    {
      type: 'relationship',
      name: 'Category',
      relationTo: 'category',
      hasMany: true,
    },
    {
      type: 'date',
      name: 'Published Date',
    },
    {
      type: 'richText',
      name: 'Body',
      required: true,
    },
  ],
}
