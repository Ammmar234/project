import { GridBlock } from "../blocks/Grid";
import { Hero } from '../blocks/Hero';
import { TwoLinesBlock } from '../blocks/TowLines';
export const Pages = {
  slug : 'pages',
  labels :{
    singular : 'page',
    plural : 'pages',
  },
  access: {
    read : () => true,
  },
  fields : [
    {
      name: 'title',
      label: 'Title',
      type : 'text',
      required : true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type : 'text',
      required : true,
    },
    // {
    //   name: 'layout',
    //   label: 'Layout',
    //   type : 'blocks',
    //   required : true,
    //   blocks : [GridBlock , Hero , TwoLinesBlock]

    // },


    ]


}
