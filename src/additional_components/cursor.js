import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setIsVisible(false);
      }else{
        setIsVisible((prevVisible) => !prevVisible);
      }
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return <span >{isVisible ? '|' : ''}</span>;
};

export default Cursor;
