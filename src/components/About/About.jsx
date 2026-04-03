import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'

const stats = [
  { label: 'Years Experience', value: '1.5+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'APIs Integrated', value: '150+' },
  { label: 'AI Pipelines', value: '6+' },
]

export default function About() {
  return (
    <section className="bg-surface/30">
      <SectionWrapper id="about">
        <SectionHeading title="About Me" subtitle="Who I am & what I do" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Results-driven <span className="text-white font-semibold">Full Stack Developer</span> with 1.5+ years
              of industry experience building and deploying production-grade AI-powered applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Skilled across the entire stack — React/Next.js frontends, FastAPI backends, cloud infrastructure
              on GCP, and AI/automation pipelines using RAG, LLMs, and n8n. Passionate about turning complex
              AI capabilities into practical, scalable tools.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I've built everything from facial-recognition attendance systems handling 500+ concurrent API calls,
              to AI digital twins using FLUX LoRA and voice cloning — always focusing on shipping production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="mailto:akarshnavhule@gmail.com"
                className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/akarsh-navhule"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-surface-3 hover:border-accent text-gray-300 hover:text-white font-semibold rounded-lg transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-surface-2 rounded-2xl p-6 text-center hover:border-accent/40 transition-colors"
              >
                <div className="text-4xl font-black text-accent mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
