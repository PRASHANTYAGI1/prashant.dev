import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  const texture = useLoader(THREE.TextureLoader, 'earth2.jpeg');

  useFrame(() => {
    if (earthRef.current) {
      // Continuous slow auto-rotation
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const EarthScene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Scene Background */}
        <color attach="background" args={['#000']} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {/* Earth */}
        <Earth />

        {/* OrbitControls for mouse rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}   // we'll handle auto-rotate manually
          rotateSpeed={0.7}    // feel of dragging
        />
      </Canvas>
    </div>
  );
};

export default EarthScene;
