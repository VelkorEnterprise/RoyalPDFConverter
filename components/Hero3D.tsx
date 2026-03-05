
// @ts-nocheck
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function Blob({ color, position, speed, distort }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      // Simplified animation math for performance
      ref.current.position.y = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2 + position[1];
      ref.current.rotation.z += 0.002;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 24, 24]} position={position}> 
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.4}
        metalness={0.6}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  const blobs = useMemo(() => [
    { color: '#D4AF37', position: [-2, 1, -2], speed: 0.8, distort: 0.3 }, 
    { color: '#F8FAFC', position: [2, -1, -3], speed: 0.6, distort: 0.3 }, 
    { color: '#B59228', position: [0, -2, -1], speed: 0.7, distort: 0.2 }  
  ], []);

  return (
    <div 
      className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
      style={{ contain: 'strict', overflow: 'hidden' }}
    >
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 40 }} 
        dpr={[1, 1.5]} // Cap DPR to prevent GPU overload on high-res screens
        gl={{ 
            antialias: false, // Disable AA for performance
            powerPreference: "high-performance",
            preserveDrawingBuffer: false
        }}
        flat // No tone mapping required
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff" />
        {blobs.map((blob, index) => <Blob key={index} {...blob} />)}
      </Canvas>
    </div>
  );
}
