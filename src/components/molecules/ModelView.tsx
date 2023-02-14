import { Html, OrbitControls } from '@react-three/drei';
import { useProgress } from '@react-three/drei/core/useProgress';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import GltfModel from './GltfModel';

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html>{progress} % loaded</Html>;
};

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }: any) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={<Loader />}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
