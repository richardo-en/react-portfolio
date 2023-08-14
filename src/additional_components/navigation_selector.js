import React, { useState, useEffect } from 'react';

const NavigationSelector = () => {
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const elements = ["home", "about", "project", "future", "contact"];

            for (let i = 0; i < elements.length; i++) {
                let section = document.getElementById(elements[i]);
                if (section) {
                    if (
                        scrollPosition >= section.offsetTop &&
                        scrollPosition < section.offsetTop + section.offsetHeight
                    ) {
                        setSelectedElement(i);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getButtonClass = (index) => {
        return selectedElement === index ? 'bg-gray-700' : 'bg-gray-800';
    };

    return (
        <>
            <button className={`p-5 border-2 border-testcolor rounded-md text-white hover:bg-gray-700 text-sm ${getButtonClass(0)}`} href="http://localhost:3000#home" id="home_nav">Home</button>
            <button className={`p-5 border-2 border-testcolor rounded-md text-white hover:bg-gray-700 text-sm ${getButtonClass(1)}`} href="http://localhost:3000#about" id="about_nav">About me</button>
            <button className={`p-5 border-2 border-testcolor rounded-md text-white hover:bg-gray-700 text-sm ${getButtonClass(2)}`} href="http://localhost:3000#project" id="project_nav">My projects</button>
            <button className={`p-5 border-2 border-testcolor rounded-md text-white hover:bg-gray-700 text-sm ${getButtonClass(3)}`} href="http://localhost:3000#future" id="future_nav">Future</button>
            <button className={`p-5 border-2 border-testcolor rounded-md text-white hover:bg-gray-700 text-sm ${getButtonClass(4)}`} href="http://localhost:3000#contact" id="contact_nav">Contact</button>
        </>
    );
};

export default NavigationSelector;
