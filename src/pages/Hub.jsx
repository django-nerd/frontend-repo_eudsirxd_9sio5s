import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LocationsGrid from '../components/LocationsGrid'
import LeadershipGrid from '../components/LeadershipGrid'
import NewsEvents from '../components/NewsEvents'
import Gallery from '../components/Gallery'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Hub() {
  const [locations, setLocations] = useState([])
  const [leaders, setLeaders] = useState([])
  const [news, setNews] = useState([])
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    fetch(`${api}/api/locations`).then(r => r.json()).then(setLocations).catch(()=>{})
    // For hub page, pull demo leadership/news/gallery from a shared source
    fetch(`${api}/api/location/central-campus`).then(r=>r.json()).then((data)=>{
      setLeaders(data.leadership)
      setNews(data.news)
      setGallery(data.gallery)
    }).catch(()=>{})
  }, [])

  return (
    <Layout>
      <Hero title="Pastorate Hub" subtitle="Find your local congregation in one unified experience." />
      <LocationsGrid locations={locations} />
      <LeadershipGrid leaders={leaders} />
      <NewsEvents items={news} />
      <Gallery images={gallery} />
    </Layout>
  )
}
