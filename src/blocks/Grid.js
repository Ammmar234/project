export const GridBlock = {
  slug: 'Grid',
  label: {
    singular: 'Grid Block',
    plural: 'Grid Blocks',
  },
  fields: [
    {
      name: 'columns',
      label: 'Number of Columns',
      type: 'number',
    },
    {
      name: 'gutter',
      label: 'Gutter Width',
      type: 'number',
    },
    {
      name: 'breakpoints',
      label: 'Breakpoints',
      type: 'array',
      list: true,
      fields: [
        {
          name: 'width',
          label: 'Width',
          type: 'number',
        },
        {
          name: 'columns',
          label: 'Columns',
          type: 'number',
        },
      ],
    },
    {
      name: 'items',
      label: 'Grid Items',
      type: 'array',
      list: true,
      fields: [
        {
          name: 'content',
          label: 'Content',
          type: 'text',
        },
        {
          name: 'columnSpan',
          label: 'Column Span',
          type: 'number',
        },
        {
          name: 'rowSpan',
          label: 'Row Span',
          type: 'number',
        },
      ],
    },
  ],
};
