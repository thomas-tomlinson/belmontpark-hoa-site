import { getAllUpdates, type Update } from '@/lib/updates';
import Link from 'next/link';

export default function UpdatePage() {
  const updates = getAllUpdates();
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <div className="p-5">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">Updates</h1>
      <div className="space-y-8">
        {updates.map((update) => (
          <article key={update._meta.path}>
            <h2 className="text-2xl font-bold">
              <Link href={`/updates/${update._meta.path}`}>{update.title}</Link>
            </h2>
            <p className="text-gray-600">{new Date(update.publishedAt).toLocaleString("en-US", dateOptions)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
