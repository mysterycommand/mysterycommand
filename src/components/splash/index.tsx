import React, { FC, useRef } from 'react';
import { Canvas, useRender } from 'react-three-fiber';
import { Group, Color, Vector3 } from 'three';
import { animated, useSpring } from 'react-spring/three';
import { config } from 'react-spring';

import './style.css';

function useIntro(scale: number) {
  const box = useRef<Group>();

  useRender(() => {
    if (!(box && box.current)) {
      return;
    }

    box.current.rotation.x += scale / 1000;
    box.current.rotation.y += 2 * (scale / 1000);
  });

  const { currentScale, currentOpacity } = useSpring({
    from: {
      currentScale: [0, 0, 0],
      currentOpacity: 0,
    },
    currentScale: [scale, scale, scale],
    currentOpacity: 0.15,
    config: config.molasses,
    delay: 500 / scale,
  });

  return [box, currentScale, currentOpacity];
}

const Box: FC<{ scale?: number }> = ({ scale = 3 }) => {
  const [box, currentScale, currentOpacity] = useIntro(scale);

  return (
    <group ref={box}>
      <animated.mesh scale={currentScale}>
        <boxGeometry attach="geometry" />
        <animated.meshLambertMaterial
          attach="material"
          opacity={currentOpacity}
          transparent
        />
      </animated.mesh>
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
        {new Array(10).fill(null).map((_, i) => (
          <Box key={i} scale={1 + i / 2} />
        ))}
      </Canvas>
    </div>
  );
};

export default Splash;
