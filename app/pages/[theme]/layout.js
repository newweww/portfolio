'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function PagesLayout({ children, params }) {

    const [theme, setTheme] = useState();
    const router = useRouter();
    const pathname = usePathname();
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' }));

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' }));
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    useEffect(() => {
        console.log(params.theme);
        setTheme(params.theme);
        console.log(pathname);
    }, [params.theme]);


    const handleChangeTheme = (e) => {
        e.preventDefault()
        const newTheme = theme === 'light' ? 'dark' : 'light';
        const newPathname = pathname.replace(`/${theme}/`, `/${newTheme}/`);
        setTheme(newTheme);
        router.push(newPathname);
    };

    return (
        <div
            className={theme === 'light' ? 'screen-light' : 'screen-dark'}
            style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className={`flex justify-center items-start`} style={{ height: '50vh' }}>
                <nav className="navbar">
                    <ul>
                        <li className={`border-${theme} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <button onClick={() => router.push(`/pages/${theme}/home`)}>Home</button>
                        </li>
                        <li className={`border-${theme} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <button onClick={() => router.push(`/pages/${theme}/about`)}>About</button>
                        </li>
                        <li className={`border-${theme} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <button onClick={() => router.push(`/pages/${theme}/project`)}>Projects</button>
                        </li>
                        <li className={`border-${theme} ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <button onClick={() => router.push(`/pages/${theme}/contact`)}>Contact</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`flex justify-end right-0 absolute mt-20 mr-52 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <div className={`border-${theme}`} style={{ fontSize: '24px' }}>{currentTime}</div>
            </div>
            <div className="flex justify-center items-center" style={{ height: '50vh' }}>
                {children}
            </div>
            <div className="flex justify-start items-end ml-40">
                <div
                    className={theme === 'light' ? 'lamp-gif-light' : 'lamp-gif-dark'}
                    onClick={handleChangeTheme}
                ></div>
            </div>
        </div>
    );
}