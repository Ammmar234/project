export const Products = {
  slug: 'products',
  labels: {
      singular: 'product',
      plural: 'products',
  },
  access: {
      read: () => true,
  },
  fields: [
      {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
      },
      {
          name: 'description',
          label: 'Description',
          type: 'richText',
          required: true,
          
      },
      {
          name: 'image',
          label: 'ImageUrl',
          type: 'text',
          required: true,
      },
      {
        name: 'category',
        label: 'Category',
        type: 'relationship',
        relationTo: 'categories',
        required: true,
    },
      {
          name: 'tags',
          label: 'Tags',
          type: 'array',
          required: false,
          fields: [
              {
                  name: 'name',
                  label: 'Name',
                  type: 'text',
                  required: false,
              },
          ],
      },
  ],
};
