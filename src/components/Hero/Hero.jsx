import ParticleField from './ParticleField'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy"
      style={{ touchAction: 'none' }}
    >
      {/* Gradient overlays for depth */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(26,86,219,0.12) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }}
      />

      {/* 3D Canvas */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  )
}
