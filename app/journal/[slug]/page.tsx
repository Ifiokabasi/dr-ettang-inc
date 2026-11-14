import { client, urlFor } from '../../../sanity/lib/sanity';
import { groq } from 'next-sanity';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';

const postQuery = groq`
  *[_type == "journalPost" && slug.current == $slug][0] {
    title,
    excerpt,
    publishedAt,
    body,
    mainImage { asset->{_id, url}, alt }
  }
`;

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    groq`*[_type == "journalPost" && defined(slug.current)]{ "slug": slug.current }`
  );
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });
  if (!post) return {};
  return {
    title: `${post.title} | Dr. Ettang`,
    description: post.excerpt ?? undefined,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <a
        href="/journal"
        className="mb-8 inline-flex text-[11px] font-semibold uppercase tracking-[0.2em] text-black/50 hover:text-black"
      >
        ← Back to journal
      </a>

      {post.publishedAt && (
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      )}

      <h1 className="font-display text-4xl font-bold">{post.title}</h1>

      {post.mainImage?.asset?.url && (
        <img
          src={urlFor(post.mainImage).width(1600).url()}
          alt={post.mainImage.alt || post.title}
          className="mt-8 w-full rounded-[24px] object-cover"
        />
      )}

      <div className="prose mt-8">
        <PortableText value={post.body} />
      </div>
    </article>
  );
} 