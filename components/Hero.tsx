
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';

const ThreeContent = () => {
  return (
    <>
      {/* @ts-ignore */}
      <ambientLight intensity={1.5} />
      {/* @ts-ignore */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Central Sphere */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#f9a8d4"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>

      {/* Floating Decorative Cubes (like pixel flowers) */}
      <Float position={[3, 2, -2]} speed={3}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <MeshWobbleMaterial color="#86EFAC" factor={1} speed={2} />
        </mesh>
      </Float>
      
      <Float position={[-4, -2, -1]} speed={4}>
        <mesh>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <MeshWobbleMaterial color="#C084FC" factor={1} speed={2} />
        </mesh>
      </Float>

      <Text
        position={[0, 0, 2.5]}
        fontSize={0.4}
        color="#000"
        font="https://fonts.gstatic.com/s/pressstart2p/v15/e3t4veOBy7Ike3Hk7E3_R26ZJDJMD88.woff"
      >
        HI, I'M MAW!
      </Text>
      <OrbitControls enableZoom={false} />
    </>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 via-white to-blue-50">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <ThreeContent />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <div className="bg-white/60 backdrop-blur-md border-4 border-black p-10 shadow-[12px 12px 0px 0px rgba(0,0,0,1)] inline-block transform scale-90 md:scale-100">
          <div className="flex justify-center gap-2 mb-4">
             <div className="w-4 h-4 bg-pink-400"></div>
             <div className="w-4 h-4 bg-teal-400"></div>
             <div className="w-4 h-4 bg-purple-400"></div>
          </div>
          <h1 className="pixel-font text-2xl md:text-4xl lg:text-5xl mb-6 tracking-tighter leading-tight">
            MAULIDA DWI CAHYANI
          </h1>
          <p className="retro-font text-xl md:text-2xl text-pink-500 font-bold mb-8 tracking-widest">
            LINGUIST • AI SPECIALIST • CREATIVE
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-teal-400 text-white px-4 py-2 pixel-font text-[9px] border-2 border-black animate-pulse">
              LVL 10 EXP
            </span>
            <a 
              href="mailto:maulida.dc@gmail.com" 
              className="bg-black text-white px-6 py-2 pixel-font text-[9px] border-2 border-black hover:bg-pink-500 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              START QUEST
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="pixel-font text-[8px] text-gray-400">SCROLL</span>
          <div className="w-1 h-8 bg-black animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};
