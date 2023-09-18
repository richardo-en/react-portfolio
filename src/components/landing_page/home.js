import React, { useEffect, useState } from 'react';
import LogoAnimation from '../../additional_components/logo';
import './../../static/App.css';

const HomeSection = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 0 && scrollPosition < 600) {
        requestAnimationFrame(() => {
          let newOpacity = scrollPosition / 1000;
          setBackgroundOpacity(newOpacity);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gray-800 flex justify-center">
      <span className='absolute' id='background_image' style={{ opacity: backgroundOpacity }}/>
      <div className="w-5/6 flex justify-center">
        <div className="relative z-10">
          <LogoAnimation />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
