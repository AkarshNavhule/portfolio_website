export default function SkillCategory({ category, icon, skills }) {
  return (
    <div className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-white font-semibold text-sm">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-surface-2 hover:bg-accent/20 hover:text-accent border border-surface-3 hover:border-accent/40 text-gray-300 text-xs font-medium rounded-full transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
