import React, { useState, useContext, useEffect } from 'react';
import slovakText from '../content/slovak.json';
import englishText from '../content/english.json';
import LanguageContext from './language_context';
import { Link } from 'react-router-dom';
//Logos
import GmailLogo from '../static/images/gmail.svg'
import GithubLogo from '../static/images/github.svg'
import LinkeInLogo from '../static/images/linkedin.svg'
import CopyrightLogo from '../static/images/copyright.svg'

const Footer = () => {

    const { language } = useContext(LanguageContext);
    const [textContent, setTextContent] = useState({ contact: [] });
    const logos = [[LinkeInLogo, 'https://www.linkedin.com/in/richard-nemeth-40b144241/'], [GmailLogo, 'mailto:richard3.nemeth@gmail.com'], [GithubLogo, 'https://github.com/richardo-en']]

    useEffect(() => {
        const content = language === 'Slovak' ? slovakText : englishText;
        setTextContent(content)
    }, [language]);

    return (


        <div className="w-full relative text-center bottom-0 z-50 flex flex-col bg-gray-200 items-center py-20">
            <span className='w-11/12 bg-black' style={{height : "2px"}}/>
            <h1 id='footer_logo' className='font-bigshoulder' >Rine</h1>
            <div className='w-full flex flex-col lg:flex-row text-xl'>
                {textContent.footer && textContent.footer.map((link, index) => (
                    <Link to={link.redirect} key={index} className="p-2 w-3/4 mx-auto border-b-2 border-black mb-5 lg:text-2xl lg:mx-10 lg:mb-14" onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <div className='self-center lg:mx-10 flex flex-col lg:grid grid-rows-2 w-full'>
                <div className='text-center px-5 relative z-10 mb-5'>
                    <h2 className='text-3xl lg:text-5xl xl:text-6xl font-gloock'>Social media</h2>
                </div>
                <div className='flex justify-around items-center'>
                    {logos.map((logo, index) => (
                        <a href={logo[1]}><img alt='logo of socials' className='mx-2 mx-auto h-16 lg:h-28' src={logo[0]} /></a>
                    ))}
                </div>
            </div>
            <div className='mt-10 flex p-2 text-center'>
                <h3 className='footer_copyright'>Copyright</h3>
                <img className='h-4 mt-1 ml-1' src={CopyrightLogo} alt='copyright sign'/>
                <h3 className='ml-1 footer_copyright'>2023. Designed & Developed by</h3>               
            </div>
            <h3 className='footer_copyright'>Richard Németh</h3>
        </div>
    )
};

export default Footer;
