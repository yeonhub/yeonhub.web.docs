import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Map = () => {
  return (
    <div style={{ width: '800px', height: '800px', border: '1px solid black' }}>
      <Character />
    </div>
  );
};

const Character = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (key === 'ArrowUp') {
        setDirection((prevDirection) => ({ ...prevDirection, y: -1 }));
      } else if (key === 'ArrowDown') {
        setDirection((prevDirection) => ({ ...prevDirection, y: 1 }));
      } else if (key === 'ArrowLeft') {
        setDirection((prevDirection) => ({ ...prevDirection, x: -1 }));
      } else if (key === 'ArrowRight') {
        setDirection((prevDirection) => ({ ...prevDirection, x: 1 }));
      }
    };

    const handleKeyUp = (event) => {
      const { key } = event;

      if (key === 'ArrowUp' || key === 'ArrowDown') {
        setDirection((prevDirection) => ({ ...prevDirection, y: 0 }));
      } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
        setDirection((prevDirection) => ({ ...prevDirection, x: 0 }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const handleMove = () => {
      setPosition((prevPosition) => ({
        x: Math.max(Math.min(prevPosition.x + direction.x * 30, 770), 0),
        y: Math.max(Math.min(prevPosition.y + direction.y * 30, 770), 0),
      }));
    };

    const intervalId = setInterval(handleMove, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [direction]);

  const animatedStyle = useSpring({
    top: `${position.y}px`,
    left: `${position.x}px`,
    config: {
      tension: 120,
      friction: 14,
    },
  });

  return (
    <animated.div
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'black',
        position: 'absolute',
        ...animatedStyle,
      }}
      tabIndex={0}
    />
  );
};

const App = () => {
  return (
    <div>
      <h1>Character Movement</h1>
      <Map />
    </div>
  );
};

export default App;
