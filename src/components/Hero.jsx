import Spline from '@splinetool/react-spline'

export default function Hero({ title = 'Pastorate Hub', subtitle = 'One unified, trustworthy experience across every congregation.' }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="backdrop-blur-sm bg-white/60 rounded-xl p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">{title}</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
