import { useInView } from 'react-intersection-observer'

export default function YouTubeCard({ id, title }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className="bg-surface border border-surface-2 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Aspect ratio wrapper */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {inView ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 bg-surface-2 flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-gray-300 text-sm font-medium">{title}</h3>
      </div>
    </div>
  )
}
