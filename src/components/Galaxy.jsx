import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Star field with circular rotation effect
const GalaxyStars = ({ farView, blackHolePosition }) => {
  const ref = useRef();
  const starCount = 5000;
  const positions = new Float32Array(starCount * 3);
  const velocities = new Float32Array(starCount * 3);
  const rotationSpeed = 0.0008; // Speed of rotation

  // Generate star positions in a spiral pattern
  for (let i = 0; i < starCount; i++) {
    let angle = Math.random() * Math.PI * 10;
    let radius = Math.random() * farView;
    positions[i * 3] = radius * Math.cos(angle);
    positions[i * 3 + 1] = Math.random() * 200 - 100; // vertical variation
    positions[i * 3 + 2] = radius * Math.sin(angle);

    // Initialize velocities for movement (though we'll override them for rotation)
    velocities[i * 3] = Math.random() * 0.0001 - 0.0005; // Slow random velocity for movement
    velocities[i * 3 + 1] = Math.random() * 0.001 - 0.0005;
    velocities[i * 3 + 2] = Math.random() * 0.001 - 0.0005;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  // Rotate the entire galaxy slowly in a circular motion
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();

      // Apply circular rotation to the entire galaxy (rotate around the Y-axis)
      ref.current.rotation.y -= rotationSpeed;

      // Apply gravitational pull effect to the stars near the black hole
      for (let i = 0; i < starCount; i++) {
        const dx = positions[i * 3] - blackHolePosition.x;
        const dy = positions[i * 3 + 1] - blackHolePosition.y;
        const dz = positions[i * 3 + 2] - blackHolePosition.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // Apply gravitational pull for stars close to the black hole
        if (distance < 100) {
          const force = 0.00001 / (distance * distance); // Gravitational force
          positions[i * 3] -= force * dx;
          positions[i * 3 + 1] -= force * dy;
          positions[i * 3 + 2] -= force * dz;
        }

        // Optional: Reset stars when they move out of view (loop effect)
        if (positions[i * 3] > farView || positions[i * 3] < -farView) {
          positions[i * 3] = Math.random() * farView - farView / 2;
        }
        if (positions[i * 3 + 1] > 200 || positions[i * 3 + 1] < -200) {
          positions[i * 3 + 1] = Math.random() * 400 - 200;
        }
        if (positions[i * 3 + 2] > farView || positions[i * 3 + 2] < -farView) {
          positions[i * 3 + 2] = Math.random() * farView - farView / 2;
        }
      }
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      {/* Change to circle shape for stars */}
      <pointsMaterial color="#ffffff" size={0.2} sizeAttenuation={true} />
    </points>
  );
};

// Black Hole (center of the galaxy) - Now made visible
const BlackHole = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[10, 32, 32]} />
      <meshStandardMaterial
        color="black"
        emissive="black"
        emissiveIntensity={10} // Increased emissive intensity
        opacity={1} // Set opacity to 1 for better visibility
        transparent={false} // Make it solid, no transparency
      />
    </mesh>
  );
};

// Glowing Nebula effect with continuous movement
const Nebula = ({ farView }) => {
  const ref = useRef();
  const [intensity, setIntensity] = useState(0.4);

  useFrame(({ clock }) => {
    if (ref.current) {
      // Dynamic glow based on time (automated movement)
      const distance = Math.sin(clock.getElapsedTime() * 0.5) * 0.2 + 0.5;
      setIntensity(distance); // Update glow intensity based on time
      ref.current.material.emissiveIntensity = intensity;
      ref.current.scale.set(farView / 100, farView / 100, farView / 100); // Scale nebula for far view
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[50, 64, 64]} />
      <meshStandardMaterial
        emissive={"rgba(0, 0, 255, 0.5)"}
        emissiveIntensity={intensity}
        opacity={0.5}
        transparent={true}
      />
    </mesh>
  );
};

const Galaxy = () => {
  const [farView, setFarView] = useState(200);
  const [blackHolePosition] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    // Handle scroll event to adjust far view (optional)
    const handleScroll = () => {
      setFarView(200 + window.scrollY * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, farView], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <GalaxyStars farView={farView} blackHolePosition={blackHolePosition} />
        {/* <BlackHole /> Render the black hole */}
        {/* <Nebula farView={farView} /> */}
      </Canvas>
    </div>
  );
};

export default Galaxy;
