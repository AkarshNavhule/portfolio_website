import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'

const videos = [
  {
    src: '/Motion_graohics_assets/motion_graphics1.mp4',
    title: 'Motion Graphics — Project 1',
    description: 'AI-generated motion graphics created with Claude Code + Remotion pipeline',
  },
  {
    src: '/Motion_graohics_assets/motion_graphics2.mp4',
    title: 'Motion Graphics — Project 2',
    description: 'Prompt-driven video generation rendered to MP4 using custom Remotion templates',
  },
]

export default function MotionGallery() {
  return (
    <section className="bg-surface/30">
      <SectionWrapper id="motion">
        <SectionHeading
          title="Motion Graphics"
          subtitle="AI-generated videos using Claude Code + Remotion"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="bg-surface border border-surface-2 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="relative bg-black">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full max-h-72 object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                <p className="text-gray-500 text-sm">{video.description}</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2.5 py-0.5 bg-accent/10 border border-accent/20 text-accent text-xs rounded-full">Claude Code</span>
                  <span className="px-2.5 py-0.5 bg-accent/10 border border-accent/20 text-accent text-xs rounded-full">Remotion</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/AkarshNavhule/motion_graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-surface-3 hover:border-accent text-gray-400 hover:text-white rounded-xl transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </SectionWrapper>
    </section>
  )
}
