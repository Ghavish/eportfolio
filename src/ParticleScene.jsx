import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

// `active` pauses rendering while the hero is off screen, so the GPU is idle
// while the rest of the page scrolls.
export default function ParticleScene({ active = true }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={active ? 'always' : 'never'}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      >
        {/* Layer 1: Bright, fast-moving foreground particles */}
        <Sparkles
          count={220}
          scale={20}
          size={6}
          speed={0.4}
          opacity={0.8}
          color="#7B2CBF"
        />

        {/* Layer 2: Larger, slower background particles for depth */}
        <Sparkles
          count={140}
          scale={25}
          size={11}
          speed={0.1}
          opacity={0.3}
          color="#3C096C"
        />
      </Canvas>
    </div>
  );
}
