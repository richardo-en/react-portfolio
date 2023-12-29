import React, { useEffect, useRef } from 'react';
import HomeSection from '../components/landing_page/home';
import AboutSection from '../components/landing_page/about.js';
import ContactSection from '../components/landing_page/contact.js';
import Navbar from '../components/landing_page/navbar.js';
import InterestSection from '../components/landing_page/interest';
import WorkExperience from '../components/landing_page/work_experience';
import Footer from '../additional_components/footer.js';

// import MobileNavigationSelector from '../additional_components/mobile_navigation.js';


const LandingPage = () => {
  const aboutRef = useRef();
  const workExperienceRef = useRef();
  const interestRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const sectionRefs = [aboutRef, workExperienceRef, interestRef, contactRef];

    const options = {
      root: null,
      rootMargin: '300px',
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.remove('hide');
        } else {
          if (entry.boundingClientRect.bottom > window.innerHeight) {
            entry.target.classList.add('hide');
          } else {
            entry.target.classList.remove('hide');
          }
        }
      });
    };
    

    const observer = new IntersectionObserver(handleIntersect, options);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [aboutRef, workExperienceRef, interestRef, contactRef]);

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection ref={aboutRef} />
      <WorkExperience ref={workExperienceRef} />
      <InterestSection ref={interestRef} />
      <ContactSection ref={contactRef} />
      <Footer />
    </>
  );
};

export default LandingPage;
