'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Project1({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);


    return (
            <div>
                <div className="flex justify-center items-center h-10">
                    <div className={theme === 'light' ? 'border-light' : 'border-dark'}>
                        <h5 className={`text-${theme}`}  style={{ fontSize: '24px' }}>Project1</h5>
                    </div>
                </div>
            </div>
    )
}
