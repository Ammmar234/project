export const Orders = {
  slug: 'orders',
  labels: {
      singular: 'order',
      plural: 'orders',
  },
  access: {
      read: () => true,
  },
  fields: [
      {
          name: 'orderNumber',
          label: 'Order Number',
          type: 'text',
          required: true,
      },
      {
        name: 'customer',
        label: 'Customer',
        type: 'relationship',
        relationTo: 'users',
        required: true,
    },
      {
          name: 'items',
          label: 'Items',
          type: 'array',
          required: true,
          fields: [
              {
                  name: 'product',
                  label: 'Product',
                  type: 'text',
                  required: true,
              },
              {
                  name: 'quantity',
                  label: 'Quantity',
                  type: 'number',
                  required: true,
              },
              {
                  name: 'price',
                  label: 'Price',
                  type: 'number',
                  required: true,
              },
          ],
      },
      {
          name: 'status',
          label: 'Status',
          type: 'select',
          options: [
              { label: 'Pending', value: 'pending' },
              { label: 'Processing', value: 'processing' },
              { label: 'Shipped', value: 'shipped' },
              { label: 'Completed', value: 'completed' },
          ],
      },
      {
          name: 'createdAt',
          label: 'Created At',
          type: 'date',
          required: true,
      },
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo : 'media',
    },
  ],
};
