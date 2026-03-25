function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function ProjectCard({ number, title, badge, description, tech, github, live }) {
  return (
    <div className="bg-surface border border-surface-2 rounded-2xl p-6 flex flex-col hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-4xl font-black text-surface-2 group-hover:text-accent/20 transition-colors">
          {number}
        </span>
        {badge && (
          <span className="px-2.5 py-0.5 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold rounded-full">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

      {/* Tech stack */}
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

      {/* Links */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {github && github.map((gh) => (
          <a
            key={gh.url}
            href={gh.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-2 hover:bg-surface-3 border border-surface-3 hover:border-gray-500 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all"
          >
            <GitHubIcon />
            {gh.label}
          </a>
        ))}
        {live && live.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 text-accent text-xs font-medium rounded-lg transition-all"
          >
            <ExternalLinkIcon />
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}
