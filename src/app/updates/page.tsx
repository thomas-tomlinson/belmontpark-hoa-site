import { UpdatePosts } from '@/components/posts'

export const metadata = {
  title: 'Updates',
  description: 'Belmontpark HOA updates',
}

export default function Page() {
  return (
    <section className="p-5">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Updates</h1>
      <UpdatePosts />
    </section>
  )
}
