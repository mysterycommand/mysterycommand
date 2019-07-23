import React, { FC, useMemo, useRef } from 'react';
import { Canvas, useRender } from 'react-three-fiber';
import { Group, Color, Vector3 } from 'three';

import './style.css';

const Box: FC<{ scale?: number }> = ({ scale = 3 }) => {
  const box = useRef<Group>();
  const meshScale = useMemo(() => new Vector3(scale, scale, scale), [scale]);

  useRender(() => {
    if (!(box && box.current)) {
      return;
    }

    box.current.rotation.x += scale / 1000;
    box.current.rotation.y += 2 * (scale / 1000);
  });

  return (
    <group ref={box}>
      <mesh scale={meshScale}>
        <boxGeometry attach="geometry" />
        <meshLambertMaterial attach="material" opacity={0.15} transparent />
      </mesh>
    </group>
  );
};

const Splash: FC = () => {
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
        <Box scale={1} />
        <Box scale={1.5} />
        <Box scale={2} />
        <Box scale={2.5} />
        <Box scale={3} />
      </Canvas>
    </div>
  );
};

export default Splash;
