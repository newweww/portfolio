'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

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
            style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: ${theme === 'light' ? '#f3f4f6' : '#000814'};
                }
                @media screen and (max-width: 950px) {
                    .floating-lamp, .time-display {
                        display: none;
                    }
                }
            `}</style>
            <Fade className='fixed flex justify-start items-start w-full h-full' direction='down' triggerOnce>
                <div className={`navbar text-${theme}`}>
                    <ul className="flex flex-col items-center">
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => router.push(`/pages/${theme}/home`)}>Home</button>
                        </li>
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => router.push(`/pages/${theme}/about`)}>About</button>
                        </li>
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => router.push(`/pages/${theme}/project`)}>Projects</button>
                        </li>
                        <li className={`border-${theme} mb-2`}>
                            <button onClick={() => router.push(`/pages/${theme}/contact`)}>Contact</button>
                        </li>
                    </ul>
                </div>
            </Fade>
            <Fade className='flex floating-lamp' style={{ left: '8rem'}}  direction='left' triggerOnce>
                <div className={`flex ${theme === 'dark' ? 'lamp-gif-dark' : 'lamp-gif-light'}`}onClick={handleChangeTheme}></div>
            </Fade>
            <Fade direction='right' triggerOnce>
                <div className={`time-display flex justify-end absolute mt-20 right-32 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    <div className={`border-${theme}`} style={{ fontSize: '24px' }}>{currentTime}</div>
                </div>
            </Fade>
            <div className="flex justify-center items-start" >
                {children}
            </div>
        </div>
    );
}
