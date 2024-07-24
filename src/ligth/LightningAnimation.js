import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './LightningAnimation.css';

const LightningAnimation = ({ showLightning }) => {
  const lightningProps = useSpring({
    opacity: showLightning ? 1 : 0,
    config: { duration: 500 },
  });

  const generateBolts = () => {
    const bolts = [];
    for (let i = 0; i < 10; i++) {
      const top = `${Math.random() * 80 + 10}%`; // Position aléatoire sur l'axe Y
      const left = `${Math.random() * 80 + 10}%`; // Position aléatoire sur l'axe X
      bolts.push(<div key={i} className="bolt" style={{ top, left }}></div>);
    }
    return bolts;
  };

  return (
    <div className="lightning-container">
      {showLightning && (
        <animated.div style={lightningProps} className="lightning">
          {generateBolts()}
        </animated.div>
      )}
    </div>
  );
};

export default LightningAnimation;
