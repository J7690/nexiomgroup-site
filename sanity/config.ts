import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'

export default defineConfig({
  name: 'nexiom-cms',
  title: 'Nexiom Group CMS',
  projectId: 'z5ucihvm',
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
