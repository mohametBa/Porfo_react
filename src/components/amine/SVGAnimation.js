import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SVGAnimation = () => {
  const leftLineProps = useSpring({
    from: { transform: 'rotate(0 21 59)' },
    to: { transform: 'rotate(180 21 59)' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  const rightLineProps = useSpring({
    from: { transform: 'rotate(0 79 59)' },
    to: { transform: 'rotate(-180 79 59)' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  const topLineProps = useSpring({
    from: { d: 'M 50 21 V 40' },
    to: { d: 'M 50 59 V 40' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  const bottomLineProps = useSpring({
    from: { d: 'M 50 60 V 79' },
    to: { d: 'M 50 98 V 79' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  const topBoxProps = useSpring({
    from: { stroke: 'rgba(255,255,255,1)' },
    to: { stroke: 'rgba(100,100,100,0)' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  const bottomBoxProps = useSpring({
    from: { stroke: 'rgba(100,100,100,0)' },
    to: { stroke: 'rgba(255,255,255,1)' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  const translateProps = useSpring({
    from: { transform: 'translate(0, 0)' },
    to: { transform: 'translate(0, -19)' },
    config: { duration: 2000 },
    loop: { reverse: true },
  });

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 100 100" style={{ height: 150, width: 150 }}>
        <animated.g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" style={translateProps}>
          <animated.path d="M 21 40 V 59" style={leftLineProps} />
          <animated.path d="M 79 40 V 59" style={rightLineProps} />
          <animated.path d="M 50 21 V 40" db={topLineProps.d} />
          <animated.path d="M 50 60 V 79" dc={bottomLineProps.d} />
          <animated.path d="M 50 21 L 79 40 L 50 60 L 21 40 Z" style={topBoxProps} />
          <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
          <animated.path d="M 50 59 L 79 78 L 50 98 L 21 78 Z" style={bottomBoxProps} />
        </animated.g>
      </svg>
    </div>
  );
};

export default SVGAnimation;
