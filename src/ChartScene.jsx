// ChartScene.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import ChartModel from "./ChartModel";

const ChartScene = () => {
  return (
    <Canvas camera={{ position: [0, 6, 7], fov: 50, near: 0.1, far: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />

      <gridHelper args={[10, 10, "#444", "#888"]} position={[0, 0, 0]} />

      <ChartModel />

      <OrbitControls
        target={[0, 1, 0]}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default ChartScene;
