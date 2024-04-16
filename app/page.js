'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [theme, setTheme] = useState('dark');

  const handleClick = () => {
    router.push(`/welcome/${theme === 'light' ? 'light' : 'dark'}`);
  };

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={theme === 'light' ? 'screen-light' : 'screen-dark'}>
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
