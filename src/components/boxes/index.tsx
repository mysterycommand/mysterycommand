import React, { FC } from 'react';
import { Canvas } from 'react-three-fiber';
import { Color, Vector3 } from 'three';

import Box from '../box';

const Boxes: FC = () => {
  return (
    <div className="splash">
      <Canvas>
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
