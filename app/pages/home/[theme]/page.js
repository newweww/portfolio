'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
      }, []);

    return (
        <div className={theme === 'light' ? 'screen-light' : 'screen-dark'}>
            <div className="flex justify-center items-center h-screen">
                <h5 style={{ color: theme === 'light' ? 'black' : 'white', fontSize: '24px' }}>Home</h5>
            </div>
        </div>
    )
}
