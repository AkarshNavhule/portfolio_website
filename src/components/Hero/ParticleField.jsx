import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'

function FloatingIcosahedron() {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.12
      meshRef.current.rotation.y = clock.elapsedTime * 0.18
    }
  })
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[3.2, 0.2, 0]} scale={1.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1a56db"
          wireframe
          transparent
          opacity={0.4}
          emissive="#1a56db"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function SmallOrb({ position, speed, size }) {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * speed
      meshRef.current.rotation.z = clock.elapsedTime * speed * 0.7
    }
  })
  return (
    <mesh ref={meshRef} position={position} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.25}
        emissive="#3b82f6"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

export default function ParticleField() {
  return (
    <div
      style={{ position: 'absolute', inset: 0, touchAction: 'none' }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#1a56db" intensity={2} />
          <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={0.5} />

          <Stars
            radius={90}
            depth={60}
            count={4000}
            factor={3}
            saturation={0.15}
            fade
            speed={0.5}
          />

          <FloatingIcosahedron />
          <SmallOrb position={[-4, 1.5, -1]} speed={0.3} size={0.6} />
          <SmallOrb position={[1.5, -2.5, -2]} speed={0.2} size={0.4} />
        </Suspense>
      </Canvas>
    </div>
  )
}
