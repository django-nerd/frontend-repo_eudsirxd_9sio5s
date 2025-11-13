import { Link } from 'react-router-dom'

const DEFAULT_LOCATIONS = [
  { slug: 'central-campus', name: 'Central Congregation' },
  { slug: 'north-campus', name: 'North Congregation' },
  { slug: 'south-campus', name: 'South Congregation' },
  { slug: 'east-campus', name: 'East Congregation' },
  { slug: 'west-campus', name: 'West Congregation' },
  { slug: 'riverside-campus', name: 'Riverside Congregation' },
  { slug: 'hillside-campus', name: 'Hillside Congregation' },
]

export default function LocationsGrid({ locations = DEFAULT_LOCATIONS }) {
  return (
    <section id="locations" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Locations</h2>
          <p className="text-sm text-gray-600">Find your local congregation</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link key={loc.slug} to={`/locations/${loc.slug}`} className="group rounded-xl border border-gray-200 bg-white hover:shadow-md transition overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-rose-50 group-hover:to-rose-100 transition" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition">{loc.name}</h3>
                <p className="text-sm text-gray-600">Tap to view details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
