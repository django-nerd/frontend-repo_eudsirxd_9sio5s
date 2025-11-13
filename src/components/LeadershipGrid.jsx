export default function LeadershipGrid({ leaders = [] }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div key={leader.name} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
              {leader.photo && (
                <img src={leader.photo} alt={leader.name} className="h-36 w-full object-cover" />
              )}
              <div className="p-4">
                <p className="font-medium text-gray-900">{leader.name}</p>
                <p className="text-sm text-gray-600">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
