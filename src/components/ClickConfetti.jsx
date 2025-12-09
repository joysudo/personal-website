import React, { useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => { // clean up when unmounted bc i always forget
      document.removeEventListener('click', handleClick);
    }
  })
  
  return(
    <>
      {confettiInfo && <Confetti
        key={key}
        {...confettiInfo}
      />}
    </>
  ) 
}
export default ClickConfetti;