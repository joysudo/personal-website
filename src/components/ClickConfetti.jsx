import React, { useCallback, useState } from 'react';
import Confetti from 'react-confetti-boom';

function ClickConfetti() {
  const [confettiInfo, setConfettiInfo] = useState(null);
  const [key, setKey] = useState(0);
  const handleClick = useCallback((event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    setConfettiInfo({
      x: x,
      y: y,
      mode: 'boom',
      particleCount: 50,
      effectCount: 1
    });
    setKey(prevKey => prevKey + 1) // increment to force rerender
  }, []); // empty dependency array
  
  const confettiScreenStyle = {
    // i just don't want to put this in my css file
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 99999,
    pointerEvents: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }

  return(
    <div style={confettiScreenStyle} onClick={handleClick}>
      {confettiInfo && <Confetti
        key={key}
        {...confettiInfo}
      />}
    </div>
  ) 
}
export default ClickConfetti;