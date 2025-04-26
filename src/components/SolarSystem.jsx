import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Planet = ({ position, size, color, speed }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = position[0] * Math.cos(t);
    ref.current.position.z = position[0] * Math.sin(t);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} />
    </mesh>
  );
};

const SolarSystem = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        {/* Sun */}
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial emissive={"orange"} color="orange" />
        </mesh>

        {/* Planets */}
        <Planet position={[5, 0, 0]} size={0.5} color="lightblue" speed={0.5} />
        <Planet position={[8, 0, 0]} size={0.7} color="skyblue" speed={0.35} />
        <Planet position={[11, 0, 0]} size={1} color="green" speed={0.25} />
        <Planet position={[15, 0, 0]} size={1.3} color="gray" speed={0.2} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SolarSystem;
