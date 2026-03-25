import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
import YouTubeCard from './YouTubeCard'
import { youtubeVideos } from '../../data/projects'

export default function YouTube() {
  return (
    <section className="bg-navy">
      <SectionWrapper id="videos">
        <SectionHeading
          title="YouTube Videos"
          subtitle="Demos, tutorials & project walkthroughs"
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {youtubeVideos.map((video) => (
            <YouTubeCard key={video.id} id={video.id} title={video.title} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@akarshnavhule111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit My YouTube Channel
          </a>
        </div>
      </SectionWrapper>
    </section>
  )
}
