export default function Gallery({ images = [] }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <img key={idx} src={img.src} alt={img.alt} className="rounded-lg object-cover w-full h-40" />
          ))}
        </div>
      </div>
    </section>
  )
}
