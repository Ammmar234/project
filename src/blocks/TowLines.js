export const TwoLinesBlock = {
  slug: 'TwoLines',
  label: {
      singular: 'Two Lines Block',
      plural: 'Two Lines Blocks',
  },
  fields: [
      {
          name: 'heading',
          label: 'Heading',
          type: 'text',
      },
      {
          name: 'lineOne',
          label: 'Line One',
          type: 'text',
      },
      {
          name: 'lineTwo',
          label: 'Line Two',
          type: 'text',
      },
      {
          name: 'backgroundImage',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media'
      }
  ],
};
