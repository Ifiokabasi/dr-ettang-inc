import { client } from '../../../sanity/lib/sanity'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

const postQuery = groq`
  *[_type == "journalPost" && slug.current == $slug][0] {
    title,
    body,
    mainImage { asset->{url}, alt }
  }
`

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl font-bold">{post.title}</h1>
      <div className="prose mt-8">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}