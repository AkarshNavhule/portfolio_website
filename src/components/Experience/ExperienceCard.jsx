export default function ExperienceCard({ role, company, location, duration, bullets, tech, isLast }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0 ring-4 ring-accent/20" />
        {!isLast && <div className="w-px flex-1 bg-surface-2 mt-2" />}
      </div>

      {/* Card */}
      <div className="pb-10 flex-1">
        <div className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
          <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
            <div>
              <h3 className="text-white font-bold text-lg">{role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-accent font-semibold text-sm">{company}</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-500 text-sm">{location}</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-surface-2 border border-surface-3 rounded-full text-gray-400 text-xs font-medium whitespace-nowrap">
              {duration}
            </span>
          </div>

          <ul className="space-y-2 mb-5">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                <span className="text-accent mt-1 shrink-0">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 bg-accent/10 border border-accent/20 text-accent text-xs font-medium rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
