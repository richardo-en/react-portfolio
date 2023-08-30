import React, { useEffect, useState } from "react";
import { calculateWebsiteHeight } from "./navigation_selector";

const SliderDot = () => {
    const [Percentage, setPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const websiteHeight = calculateWebsiteHeight()
            requestAnimationFrame(() => {
                var newPercentage = scrollPosition / websiteHeight;
                var sliderMove = ((window.innerHeight * 0.6) * newPercentage) - (window.innerHeight/4)
                setPercentage(sliderMove);
            });
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <span className="bg-testcolor w-6 h-6 fixed rounded-full z-20" style={{ transform: `translate(0px, ${Percentage}px)` }} />
    )
};

export default SliderDot;
