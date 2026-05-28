import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function ParticleScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        
        {/* Layer 1: Bright, fast-moving foreground particles */}
        <Sparkles 
          count={300}       // Number of particles
          scale={20}        // How far they spread out
          size={6}          // Size of each particle
          speed={0.4}       // Speed of their floating animation
          opacity={0.8} 
          color="#7B2CBF"   // Your accent light purple
        />
        
        {/* Layer 2: Larger, slower background particles for depth */}
        <Sparkles 
          count={200} 
          scale={25} 
          size={11} 
          speed={0.1} 
          opacity={0.3} 
          color="#3C096C"   // Your mid purple
        />

      </Canvas>
    </div>
  );
}