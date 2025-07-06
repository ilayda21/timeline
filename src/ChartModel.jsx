import React from "react";
import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";

const bars = [
  { positionX: -1, height: 2, color: "#6c5ce7", positionZ: 1 },
  { positionX: 0, height: 3, color: "#a29bfe", positionZ: 2 },
  { positionX: 1, height: 4, color: "#00cec9", positionZ: 3 },
];

const AnimatedMesh = animated.mesh;
const AnimatedText = animated(Text);

const ChartModel = () => {
  const springs = bars.map(({ height }) =>
    useSpring({
      from: { scaleY: 0, posY: 0, textY: 0 },
      to: { scaleY: 1, posY: height / 2, textY: height + 0.2 },
      config: { mass: 1, tension: 170, friction: 26 },
    })
  );

  return (
    <group>
      {bars.map(({ positionX, height, color, positionZ }, i) => (
        <React.Fragment key={i}>
          <AnimatedMesh
            position-x={positionX}
            position-y={springs[i].posY}
            position-z={positionZ}
            scale-x={1}
            scale-y={springs[i].scaleY}
            scale-z={1}
          >
            <boxGeometry args={[0.3, height, 0.3]} />
            <meshStandardMaterial color={color} />
          </AnimatedMesh>

          <AnimatedText
            position-x={positionX}
            position-y={springs[i].textY}
            position-z={positionZ}
            fontSize={0.3}
            color="#fff"
            anchorX="center"
            anchorY="bottom"
          >
            {height}
          </AnimatedText>
        </React.Fragment>
      ))}
    </group>
  );
};

export default ChartModel;
