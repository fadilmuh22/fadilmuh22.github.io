import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0] }: any) => {
  const ref = useRef<Mesh>();
  const gltf = useLoader(GLTFLoader, modelPath);

  return (
    <>
      <primitive
        ref={ref}
        object={(gltf as any).scene}
        position={position}
        scale={scale}
      />
    </>
  );
};

export default GltfModel;
