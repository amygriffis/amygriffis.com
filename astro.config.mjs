import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import {defineConfig} from 'astro/config'

// https://astro.build/config
export default defineConfig({
  build: {format: 'file'},
  trailingSlash: 'never',
  markdown: {shikiConfig: {theme: 'css-variables'}},
  integrations: [mdx(), react(), sitemap()],
  site: 'https://amygriffis.com',
})
