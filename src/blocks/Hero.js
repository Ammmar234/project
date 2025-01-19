export const Hero = {
  slug: 'Hero',
  label: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name : 'heading',
      label : 'Heading',
      type :'text',
    },
    {
      name : 'text',
      label : 'Text',
      type :'text',
    }
    ,
    {
      name :'backgroundImage',
      label : 'Background Image',
      type :'upload',
      relationTo : 'media'
    }
  ],
};
