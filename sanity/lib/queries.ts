import { groq } from 'next-sanity'

export const journalPostsQuery = groq`
  *[_type == "journalPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }
`