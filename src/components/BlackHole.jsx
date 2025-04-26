import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// Black Hole component
const BlackHole = ({ farView }) => {
  const ref = useRef();
  const [intensity, setIntensity] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Use frame to rotate the black hole accretion disk slowly
  useFrame(() => {
    setRotation(rotation + 0.001); // Rotate slowly for dynamic feel
    if (ref.current) {
      ref.current.rotation.y = rotation;
    }
  });

  // Change intensity of the glow based on farView (distance of the camera)
  useEffect(() => {
    setIntensity(1 - farView * 0.002); // Darken the glow as farView increases
  }, [farView]);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      {/* Black hole - the center dark area */}
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        color="black"
        emissive="black"
        emissiveIntensity={intensity}
        opacity={1}
        transparent
      />
      {/* Accretion disk - glowing matter around the black hole */}
      <torusGeometry args={[7, 2, 16, 100]} />
      <meshStandardMaterial
        color="rgba(255, 165, 0, 0.8)" // Glowing orange-yellow
        emissive="rgba(255, 165, 0, 1)"
        emissiveIntensity={2}
        opacity={0.6}
        transparent
      />
    </mesh>
  );
};

export default BlackHole;
