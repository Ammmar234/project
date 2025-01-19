export const Media = {
  slug : 'media',
  // label : {
  //   singular : 'Media',
  //   plural :'Medias',
  // },
  access: {
    read : () => true,
  },
  upload :true ,
  fields: [
    {
      name : 'alt',
      label : 'Alt',
      type :'text',
      required: true,
    }
  ]
}
