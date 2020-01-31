import React, { FC } from 'react';
import { Canvas } from 'react-three-fiber';
import { Color, Vector3, WebGLRenderer } from 'three';

import Box from '../box';

const gl: Partial<WebGLRenderer> = {
  // @ts-ignore
  premultipliedAlpha: false,
};

const Boxes: FC = () => {
  return (
    <div className="boxes">
      <Canvas gl={gl}>
        <ambientLight color={new Color('cyan')} intensity={0.5} />
        <directionalLight />
        <directionalLight
          position={new Vector3(0, -1, 0)}
          color={new Color('blue')}
          intensity={0.35}
        />
        {new Array(10).fill(null).map((_, i) => (
          <Box key={i} scale={1 + i / 2} />
        ))}
      </Canvas>
    </div>
  );
};

export default Boxes;
