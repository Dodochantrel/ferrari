"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
  Html,
  ContactShadows,
} from "@react-three/drei";
import { JSX, Suspense, useRef, useState } from "react";
import * as THREE from "three";

function FerrariModel(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/models/ferrari_sf23.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// Caméra custom avec fly-in
function AnimatedCamera() {
  const camRef = useRef<THREE.PerspectiveCamera>(null!);
  const [t, setT] = useState(0);

  useFrame((_, delta) => {
    // t va de 0 -> 1 sur ~2 secondes
    const newT = Math.min(1, t + delta * 0.5);
    setT(newT);

    const startPos = new THREE.Vector3(0, 6, 18);
    const endPos = new THREE.Vector3(4, 2.2, 6);

    const currentPos = new THREE.Vector3().lerpVectors(startPos, endPos, easeOutCubic(newT));
    if (camRef.current) {
      camRef.current.position.copy(currentPos);
      camRef.current.lookAt(0, 1, 0);
    }
  });

  return (
    <perspectiveCamera
      ref={camRef}
      fov={40}
      near={0.1}
      far={100}
      position={[0, 6, 18]}
    />
  );
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#050608"]} />
      <fog attach="fog" args={["#050608", 15, 45]} />

      <AnimatedCamera />

      <hemisphereLight intensity={0.4} groundColor="#050608" />
      <directionalLight
        intensity={1.7}
        position={[5, 8, 3]}
        castShadow
      />
      <directionalLight
        intensity={0.6}
        position={[-6, 3, -4]}
      />

      {/* Sol type podium */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial
          color={"#111111"}
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Modèle Ferrari */}
      <FerrariModel position={[0, 0, 0]} scale={0.9} />

      {/* Ombres de contact pour ancrer la voiture */}
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.7}
        width={16}
        height={16}
        blur={2.8}
        far={12}
      />

      {/* Environment HDRI rapide */}
      <Environment preset="city" />

      {/* Orbit controls activés après le fly-in (mais simple ici) */}
      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={18}
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
        camera={{ position: [0, 6, 18], fov: 40 }}
      >
        <Suspense
          fallback={
            <Html center>
              <div className="text-xs tracking-[0.2em] uppercase text-zinc-400">
                Chargement de la SF23…
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
