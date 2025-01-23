import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import { Media } from './collections/Media'
import   { Pages } from './collections/Pages'
import Users from './collections/Users'
import { Orders } from './collections/Orders'
import { Products } from './collections/Products'
import { Categories } from './collections/Categories'

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Pages,
    Media,
    Orders,
    Products,
    Categories,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ['http://localhost:5000' , 'http://localhost:5173'], // السماح بالنطاق المحدد
  csrf: ['http://localhost:5000' , 'http://localhost:5173'], // السماح بالنطاق المحدد
})
