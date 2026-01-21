import { getUpdateBySlug } from '@/lib/updates';
import { notFound } from 'next/navigation';

export default async function UpdatePage({
    params,
}: {
    params: Promise<{ slug: string}>
}) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (!update) {
    notFound();
  }
  return (
    <article className="prose lg:prose-xl p-5">
      <h1 className="text-4xl font-bold">{update.title}</h1>
      <p >{new Date(update.publishedAt).toLocaleDateString("en-US", dateOptions)}</p>
      <hr />
      <div dangerouslySetInnerHTML={{__html: update.html}} />
    </article>
  );
}