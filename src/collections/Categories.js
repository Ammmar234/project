export const Categories = {
  slug: 'categories',
  labels: {
      singular: 'category',
      plural: 'categories',
  },
  access: {
      read: () => true,
  },
  fields: [
      {
          name: 'name',
          label: 'Category Name',
          type: 'text',
          required: true,
      },
      {
          name: 'description',
          label: 'Category Description',
          type: 'richText',
          required: false,
      },
      {
          name: 'products',
          label: 'Products',
          type: 'array',
          required: false,
          fields: [
              {
                  name: 'product',
                  label: 'Product',
                  type: 'relationship',
                  relationTo: 'products',
                  required: true,
              },
          ],
      },
  ],
};
