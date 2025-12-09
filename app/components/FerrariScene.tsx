"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
  Html,
} from "@react-three/drei";
import { JSX, Suspense } from "react";

function FerrariModel(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/models/ferrari_sf23.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

function SceneContent() {
  return (
    <>

      {/* Modèle Ferrari */}
      <FerrariModel position={[0, 0, 0]} scale={0.9} />

      {/* Environment HDRI rapide */}
      <Environment preset="city" />

      {/* Orbit controls activés après le fly-in (mais simple ici) */}
      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={16}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
}

export default function FerrariScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 5, 12], fov: 35 }}
      >
        <Suspense
          fallback={
            <Html center>
              <div className="text-xs tracking-[0.2em] uppercase text-zinc-400">
                Chargement du model 3D
              </div>
            </Html>
          }
        >
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
