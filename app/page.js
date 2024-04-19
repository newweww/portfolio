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
    <div>
      <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: ${theme === 'light' ? '#f3f4f6' : '#000814'};
                }
            `}</style>
      <div className={`flex justify-end right-0 absolute mt-20 mr-5 md:mr-52 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className={`border-${theme}`} style={{ fontSize: '24px' }}>{currentTime}</div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div
          className={`start-gif-${theme}`}
          onClick={handleClick}
        ></div>
      </div>
      <div className='ml-2'>
        <div className='flex justify-start items-end h-screen absolute bottom-0 left-0 mb-52'>
          <div className={`turn-on-${theme}`}>
          </div>
        </div>
        <div className="flex justify-start items-end h-screen absolute bottom-0 left-40">
          <div
            className={`lamp-gif-${theme}`}
            onClick={handleChangeTheme}
          ></div>
        </div>
      </div>
    </div>
  );
}
