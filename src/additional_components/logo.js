import React, { useState, useEffect } from 'react';
import Cursor from './cursor';

const LogoAnimation = () => {
    const [displayText, setDisplayText] = useState('');
    const [Typing, setTyping] = useState('');
    const [Transition, setTransition] = useState('hidden');
    const [Transform, setTransform] = useState(0);
    const [TextOpacity, setTextOpacity] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 0 && scrollPosition < 100) {
                requestAnimationFrame(() => {
                    setDisplayText('');
                });
            } else if (scrollPosition >= 100 && scrollPosition < 200) {
                requestAnimationFrame(() => {
                    setDisplayText('R');
                });
            } else if (scrollPosition >= 200 && scrollPosition < 300) {
                requestAnimationFrame(() => {
                    setDisplayText('RI');
                });
            } else if (scrollPosition >= 300 && scrollPosition < 400) {
                requestAnimationFrame(() => {
                    setDisplayText('RIN');
                });
            } else if (scrollPosition >= 400 && scrollPosition < 500) {
                requestAnimationFrame(() => {
                    setDisplayText('RINE');
                    setTyping('')
                    setTransition('hidden');
                });
            }
            if (scrollPosition >= 500 && scrollPosition < 600) {
                requestAnimationFrame(() => {
                    setTyping('hidden')
                    setTransition('');
                    setTransform(Math.round(scrollPosition - 450));
                });
            }

            if (scrollPosition >= 600 && scrollPosition < 700) {
                requestAnimationFrame(() => {
                    setTextOpacity((scrollPosition - 600) / 100);
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='sticky top-12'>
                <span className={`flex text-9xl text-extrawhite ${Typing}`}>
                    {displayText}
                    <Cursor className="text-9xl"/>
                </span>
                <div className={`flex ${Transition}`}>
                    <h1 className='text-9xl text-extrawhite' >RI
                        <span className='absolute' style={{ opacity: TextOpacity }}>CHARD</span>
                    </h1>
                    <h1 className='text-9xl text-extrawhite' style={{ transform: 'translate(-' + Transform + 'px, ' + Transform + 'px)' }}>NE
                        <span className='absolute' style={{ opacity: TextOpacity }}>METH</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default LogoAnimation;
