import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section className="bg-surface/30">
      <SectionWrapper id="education">
        <SectionHeading title="Education" subtitle="Academic background" />
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-accent font-semibold text-sm mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-surface-2 border border-surface-3 rounded-full text-gray-400 text-xs font-medium mb-2">
                    {edu.duration}
                  </span>
                  <div className="mt-2">
                    <span className="text-2xl font-black text-accent">{edu.cgpa}</span>
                    <p className="text-gray-500 text-xs mt-0.5">CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Interests */}
          <div className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-accent/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-3">Interests & Activities</h3>
            <div className="flex flex-wrap gap-2">
              {['Trekking', 'Long-distance bike rides', 'Car enthusiast', 'Surfing'].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 bg-surface-2 border border-surface-3 text-gray-300 text-sm rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
