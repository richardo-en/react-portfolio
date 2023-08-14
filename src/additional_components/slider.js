import React, { useEffect, useState } from "react";

const SliderDot = () => {
    const [Percentage, setPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            requestAnimationFrame(() => {
                var newPercentage = (0.5 * Math.round(scrollPosition / (document.body.offsetHeight / 100))) - 20;
                setPercentage(newPercentage);
            });
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <span className="bg-testcolor w-6 h-6 fixed rounded-full z-20" style={{ transform: `translate(0px, ${Percentage}vh)` }} />
    )
};

export default SliderDot;
