import React, { FC, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Group } from 'three';
import { animated, useSpring } from 'react-spring/three';
import { config } from 'react-spring';

function useIntro(scale: number) {
  const box = useRef<Group>();

  useFrame(() => {
    if (!(box && box.current)) {
      return;
    }

    box.current.rotation.x += scale / 1000;
    box.current.rotation.y += 2 * (scale / 1000);
  });

  const { currentScale, currentOpacity } = useSpring({
    from: {
      currentScale: [0.01, 0.01, 0.01],
      currentOpacity: 0,
    },
    currentScale: [scale, scale, scale],
    currentOpacity: 0.15,
    config: config.molasses,
    delay: 500 / (scale - 1),
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

export default Box;
