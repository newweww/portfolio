'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [theme, setTheme] = useState('dark');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('th-TH', { timeZone: 'Asia/Bangkok' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/welcome/${theme === 'light' ? 'light' : 'dark'}`);
  };

  const handleChangeTheme = (e) => {
    e.preventDefault()
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={theme === 'light' ? 'screen-light' : 'screen-dark'}>
      <div className={`flex justify-end right-0 absolute mt-20 mr-52 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className={`border-${theme}`} style={{ fontSize: '24px' }}>{currentTime}</div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div
          className={theme === 'light' ? 'start-gif-light' : 'start-gif-dark'}
          onClick={handleClick}
        ></div>
      </div>
      <div className="flex justify-start items-end h-screen absolute bottom-0 left-0 ml-40">
        <div
          className={theme === 'light' ? 'lamp-gif-light' : 'lamp-gif-dark'}
          onClick={handleChangeTheme}
        ></div>
      </div>
    </div>
  );
}
