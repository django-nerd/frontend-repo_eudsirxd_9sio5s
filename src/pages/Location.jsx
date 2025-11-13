import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadershipGrid from '../components/LeadershipGrid'
import NewsEvents from '../components/NewsEvents'
import Gallery from '../components/Gallery'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function LocationPage() {
  const { slug } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!slug) return
    fetch(`${api}/api/location/${slug}`).then(r=>r.json()).then(setData).catch(()=>{})
  }, [slug])

  const title = data?.location?.name || 'Location'
  const subtitle = data?.location?.hero_tagline || 'Local congregation in our unified network.'

  return (
    <Layout>
      <Hero title={title} subtitle={subtitle} />
      {data && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="font-semibold text-gray-900">Address</h2>
              <p className="text-sm text-gray-700 mt-1">{data.location.address}</p>
              <h3 className="font-semibold text-gray-900 mt-4">Service Times</h3>
              <ul className="text-sm text-gray-700 list-disc pl-5 mt-1">
                {data.location.service_times.map((t)=> <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="font-semibold text-gray-900">Contact</h2>
              {data.location.phone && <p className="text-sm text-gray-700 mt-1">{data.location.phone}</p>}
              {data.location.email && <p className="text-sm text-gray-700">{data.location.email}</p>}
            </div>
          </div>
        </div>
      )}
      <LeadershipGrid leaders={data?.leadership || []} />
      <NewsEvents items={data?.news || []} />
      <Gallery images={data?.gallery || []} />
    </Layout>
  )
}
