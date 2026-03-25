export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg">{subtitle}</p>
      )}
      <div className="mt-4 w-16 h-1 bg-accent rounded-full" />
    </div>
  )
}
