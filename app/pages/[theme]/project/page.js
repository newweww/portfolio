'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Project({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);


    return (
        <div className={theme === 'light' ? 'screen-light' : 'screen-dark'}>
            <div>
                <div className="flex justify-center items-center h-10">
                    <div className={theme === 'light' ? 'border-light' : 'border-dark'}>
                        <h5 style={{ color: theme === 'light' ? 'black' : 'white', fontSize: '24px' }}>Project</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
