// src/components/Blob.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const DistortedBlob = () => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={mesh} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#9333ea"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </mesh>
  );
};

const Blob = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <DistortedBlob />
    </Canvas>
  );
};

export default Blob;
