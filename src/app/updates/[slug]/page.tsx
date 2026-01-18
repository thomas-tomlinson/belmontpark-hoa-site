import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { formatDate, getUpdatePosts } from '@/app/updates/utils'
//import { baseUrl } from 'app/sitemap'

export function generateStaticParams() {
  const posts = getUpdatePosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async  function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getUpdatePosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `/blog/${post.slug}`,
    },
  }
}

export default async function Update({ params }) {
  const { slug } = await params
  const post = await getUpdatePosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            url: `/blog/${post.slug}`,
          }),
        }}
      />
      <div className="p-5">
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      </div>
    </section>
  )
}
