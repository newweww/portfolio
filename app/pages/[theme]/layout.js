'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

// Define the SideMenu component
const SideMenu = ({ theme, router, isSideMenuOpen, toggleSideMenu }) => {

    const handleMenuItemClick = () => {
        toggleSideMenu(); // Close the side menu after clicking a menu item
    };

    return (
        <Fade className={`fixed z-10 mt-10 ${isSideMenuOpen ? 'block' : 'hidden'} sm:hidden md:hidden lg:hidden xl:hidden`} direction='down' triggerOnce>
            <div className={`side-menu text-${theme}`}>
                <ul className="menu-items items-center">
                    <li className={`border-${theme} mb-2`}>
                        <button onClick={() => { router.push(`/pages/${theme}/home`); handleMenuItemClick(); }}>Home</button>
                    </li>
                    <li className={`border-${theme} mb-2`}>
                        <button onClick={() => { router.push(`/pages/${theme}/about`); handleMenuItemClick(); }}>About</button>
                    </li>
                    <li className={`border-${theme} mb-2`}>
                        <button onClick={() => { router.push(`/pages/${theme}/project`); handleMenuItemClick(); }}>Projects</button>
                    </li>
                    <li className={`border-${theme} mb-2`}>
                        <button onClick={() => { router.push(`/pages/${theme}/contact`); handleMenuItemClick(); }}>Contact</button>
                    </li>
                </ul>
            </div>
        </Fade>
    );
};

export default function PagesLayout({ children, params }) {

    const [theme, setTheme] = useState();
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false); // State to control side menu visibility
    const router = useRouter();
    const pathname = usePathname();
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' }));
    const sideMenuRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTheme(params.theme);
    }, [params.theme]);

    const handleChangeTheme = (e) => {
        e.preventDefault()
        const newTheme = theme === 'light' ? 'dark' : 'light';
        const newPathname = pathname.replace(`/${theme}/`, `/${newTheme}/`);
        setTheme(newTheme);
        router.push(newPathname);
    };

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const handleClickOutside = (e) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
            setIsSideMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.style.overflow = 'hidden'; 
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto'; 
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSideMenuOpen]);

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: ${theme === 'light' ? '#f3f4f6' : '#000814'};
                    overflow: ${isSideMenuOpen ? 'hidden' : 'auto'}; // Prevent scrolling when menu is open
                }
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7); 
                    z-index: 9; 
                    display: ${isSideMenuOpen ? 'block' : 'none'}; 
                }
            `}</style>
            <div className="overlay" onClick={toggleSideMenu}></div> 

            <div ref={sideMenuRef}>
                <SideMenu theme={theme} router={router} isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
            </div>
            <Fade className={`flex absolute z-10`} direction='down' triggerOnce>
                <div className={`navbar text-${theme}`}>
                    <ul className="nav-items flex-col items-center">
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => { router.push(`/pages/${theme}/home`); handleMenuItemClick(); }}>Home</button>
                        </li>
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => { router.push(`/pages/${theme}/about`); handleMenuItemClick(); }}>About</button>
                        </li>
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => { router.push(`/pages/${theme}/project`); handleMenuItemClick(); }}>Projects</button>
                        </li>
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => { router.push(`/pages/${theme}/contact`); handleMenuItemClick(); }}>Contact</button>
                        </li>
                    </ul>
                </div>
            </Fade>
            <Fade className='flex floating-lamp' style={{ left: '8rem' }} direction='left' triggerOnce>
                <div className={`flex ${theme === 'dark' ? 'lamp-gif-dark' : 'lamp-gif-light'}`} onClick={handleChangeTheme}></div>
            </Fade>
            <Fade direction='right' triggerOnce>
                <div className={`time-display flex justify-end absolute mt-20 right-32 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    <div className={`border-${theme}`} style={{ fontSize: '24px' }}>{currentTime}</div>
                </div>
            </Fade>

            <button className={`absolute text-${theme} top-0 left-0 mt-4 ml-4 md:hidden lg:hidden xl:hidden`} onClick={toggleSideMenu}>
                {isSideMenuOpen ? '' : "Menu"}
            </button>
            <div className="flex justify-center items-start" >
                {children}
            </div>
        </div>
    );
}
