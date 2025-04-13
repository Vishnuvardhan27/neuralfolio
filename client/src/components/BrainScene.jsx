// Inside BrainScene.jsx

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import vertexShader from '../shaders/brain.vert';
import fragmentShader from '../shaders/brain.frag';
import { scrollToSection } from '../utils/scrollUtils'; // optional helper


const BrainMaterial = shaderMaterial(
  {
    time: 0,
    mouse: new THREE.Vector2(0, 0),
  },
  vertexShader,
  fragmentShader
);

extend({ BrainMaterial });

const handleClick = () => {
    const section = document.getElementById(label.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const Hotspot = ({ position, label }) => (
    <mesh position={position} onClick={handleClick}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial emissive="#00ffff" emissiveIntensity={1.5} color="#222" />
      <Html distanceFactor={10}>
        <div className="text-xs sm:text-sm px-2 py-1 bg-cyan-500/80 text-white rounded shadow-md animate-pulse font-semibold">
          {label}
        </div>
      </Html>
    </mesh>
  );
  
  const hotspots = [
    { label: 'About', position: [0.6, 0.6, 1], target: '#about' },
    { label: 'Skills', position: [-0.8, 0.3, 1], target: '#skills' },
    { label: 'Projects', position: [0.5, -0.4, 1], target: '#projects' },
    { label: 'Contact', position: [-0.4, -0.8, 1], target: '#contact' },
  ];
  
  const BrainMesh = () => {
    const ref = useRef();
  
    useFrame((state) => {
      if (ref.current) {
        ref.current.material.uniforms.time.value = state.clock.elapsedTime;
        ref.current.rotation.y += 0.003;
      }
    });
  
    return (
      <group>
        <mesh ref={ref} scale={0.8}>
          <sphereGeometry args={[1, 128, 128]} />
          <brainMaterial key={BrainMaterial.key} />
        </mesh>
  
        {/* Interactive Hotspots */}
        {hotspots.map(({ label, position, target }, idx) => (
          <Html
            key={idx}
            position={position}
            center
            distanceFactor={10}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '10px',
              fontSize: '12px',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            onClick={() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {label}
          </Html>
        ))}
      </group>
    );
  };

const BrainScene = () => {
  const handleHotspotClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[800px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <BrainMesh />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default BrainScene;
