import React, { useEffect, useRef } from 'react';
import HomeSection from '../components/landing_page/home';
import AboutSection from '../components/landing_page/about.js';
import ContactSection from '../components/landing_page/contact.js';
import Navbar from '../additional_components/navbar.js';
import InterestSection from '../components/landing_page/interest';
import WorkExperience from '../components/landing_page/work_experience';
import Footer from '../additional_components/footer.js';
import MobileNavigation from '../additional_components/mobile_navigation.js';

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
        if (entry.isIntersecting && entry.target !== interestRef.current) {
          entry.target.classList.add('show');
          entry.target.classList.remove('hide');

          // Check if the current entry is for workExperienceRef
          if (entry.target === workExperienceRef.current) {
            // If it is, make interestRef visible too
            interestRef.current.classList.add('show');
            interestRef.current.classList.remove('hide');
          }
        } else if (entry.boundingClientRect.bottom > window.innerHeight && entry.target !== interestRef.current) {
          if (entry.target === workExperienceRef.current) {
            interestRef.current.classList.add('hide');
            interestRef.current.classList.remove('show');
          }
          entry.target.classList.add('hide');
          entry.target.classList.remove('show');

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

  const NavigationPicker = window.innerWidth < 768 ? true : false;
  const links = ["home", "about", "work_experience", "interest", "contact"];
  const names = [["Domov" , "Home"], ["O mne" , "About me"], ["Pracovné skúsenosti","Work Experience"], ["Prečo ja","Why me"], ["Kontakt","Contact"]];

  return (
    <>
      {NavigationPicker?
        (<MobileNavigation links={links} names={names} />):
        (<Navbar links={links} names={names}/>)
      }
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
