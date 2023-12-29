import React, { useEffect, useState } from 'react'
import LogoAnimation from '../../additional_components/logo'

const HomeSection = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.05);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 0 && scrollPosition < 600) {
        requestAnimationFrame(() => {
          let newOpacity = scrollPosition / 2000 + backgroundOpacity;
          setBackgroundOpacity(newOpacity);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backgroundOpacity]);

  return (
    <section id="home" className="min-h-screen max-w-screen bg-gray-800 p-0 flex flex-col items-center">
      <div className='w-full relative'>
        <span id='background_image' className='absolute inset-0' style={{ opacity: backgroundOpacity }}/>
      </div>
      <div className='sticky top-1/4'>
        <LogoAnimation />
      </div>
    </section>
  );
};

export default HomeSection;
