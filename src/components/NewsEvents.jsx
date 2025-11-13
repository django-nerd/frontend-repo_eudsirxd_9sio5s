export default function NewsEvents({ items = [] }) {
  return (
    <section id="news" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((post) => (
            <a key={post.id} href={post.url} target="_blank" className="block rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
              <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              <h3 className="font-semibold text-gray-900 mt-1">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
