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
          name: 'price',
          label: 'Price',
          type: 'number',
          required: true,
      },
      {
          name: 'quantity',
          label: 'Quantity',
          type: 'number',
          required: true,
      },
      {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo : 'media',
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
                  required: true,
              },
          ],
      },
  ],
};
