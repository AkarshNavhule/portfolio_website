import DotGrid from './DotGrid'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy"
    >
      {/* DotGrid background — full viewport */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#2998ff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Subtle vignette overlay so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,15,30,0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content on top */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HeroContent />
      </div>
    </section>
  )
}
