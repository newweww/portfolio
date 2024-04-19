'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Welcome({ params }) {
  const router = useRouter();
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(params.theme);
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(`/pages/${params.theme === 'light' ? 'light' : 'dark'}/home`);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);
   
  return (
    <div>
      <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: ${theme === 'light' ? '#f3f4f6' : '#000814'};
                }
            `}</style>
      <div className="flex justify-center items-center h-screen">
        <Image
          src={theme === 'light' ? '/img/welcome-text-wt.gif' : '/img/welcome-text.gif'}
          width={800}
          height={800}
          alt="Welcome Text"
        />
      </div>
    </div>
  );
}
