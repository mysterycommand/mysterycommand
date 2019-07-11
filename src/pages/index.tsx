import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Color, Vector3 } from 'three';

const Index = () => (
  <Canvas>
    <group>
      <line>
        <geometry
          attach="geometry"
          vertices={[
            [-1, 0, 0],
            [0, 1, 0],
            [1, 0, 0],
            [0, -1, 0],
            [-1, 0, 0],
          ].map(v => new Vector3(...v))}
        />
        <lineBasicMaterial attach="material" color={new Color('black')} />
      </line>
      <mesh
        onClick={e => console.log('click')}
        onPointerOver={e => console.log('hover')}
        onPointerOut={e => console.log('unhover')}
      >
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color={new Color('peachpuff')}
          opacity={0.5}
          transparent
        />
      </mesh>
    </group>
  </Canvas>
);

export default Index;
