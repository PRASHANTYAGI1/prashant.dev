import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarGroup = ({ mouse }) => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += (mouse.y - starsRef.current.rotation.x) * 0.05;
      starsRef.current.rotation.y += (mouse.x - starsRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.5}
        fade
        speed={1}
      />
    </group>
  );
};

const InteractiveStars = () => {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = -(event.clientY / window.innerHeight - 0.5) * 2;
  };

  return (
    <div className="fixed inset-0 z-0" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <StarGroup mouse={mouse.current} />
      </Canvas>
    </div>
  );
};

export default InteractiveStars;
