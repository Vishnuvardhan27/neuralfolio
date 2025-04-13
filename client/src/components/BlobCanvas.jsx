import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'

const BlobCanvas = () => {
  return (
    <Canvas className="z-0" style={{ height: '100vh', width: '100vw', position: 'absolute' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere visible args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.5}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default BlobCanvas
