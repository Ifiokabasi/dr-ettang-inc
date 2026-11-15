import { createClient } from 'next-sanity'

import { createImageUrlBuilder } from '@sanity/image-url'

// ✅ Values backed in directly
const projectId = 'sm57buf4'
const dataset = 'production'
const apiVersion = '2024-01-01' // or your preferred version

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}