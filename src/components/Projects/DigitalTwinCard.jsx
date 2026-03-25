import { useState } from 'react'

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function DigitalTwinCard({ number, title, description, tech, github, images, video }) {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="bg-surface border border-surface-2 rounded-2xl p-6 col-span-full hover:border-accent/40 transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Info */}
        <div className="flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <span className="font-mono text-4xl font-black text-surface-2">{number}</span>
            <span className="px-2.5 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
              AI Generated
            </span>
          </div>

          <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 bg-surface-2 border border-surface-3 text-gray-400 text-xs rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {github && github.map((gh) => (
            <a
              key={gh.url}
              href={gh.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-2 hover:bg-surface-3 border border-surface-3 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all w-fit"
            >
              <GitHubIcon />
              {gh.label}
            </a>
          ))}

          {/* Video — Instagram reel 9:16 */}
          {video && (
            <div className="mt-6">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Talking Video</p>
              <div className="relative rounded-xl overflow-hidden border border-surface-3 mx-auto" style={{ aspectRatio: '9/16', maxWidth: '220px' }}>
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right: Image gallery */}
        <div>
          {/* Main image */}
          <div className="relative mb-3 rounded-xl overflow-hidden bg-surface-2 border border-surface-3" style={{ aspectRatio: '1/1' }}>
            <img
              src={images[activeImg]}
              alt={`AI Digital Twin ${activeImg + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs">
              {activeImg + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  activeImg === i ? 'border-accent' : 'border-surface-3 hover:border-accent/40'
                }`}
                style={{ aspectRatio: '1/1' }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
