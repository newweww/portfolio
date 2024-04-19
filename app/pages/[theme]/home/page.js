'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Typewriter from 'typewriter-effect';
import { TypeAnimation } from 'react-type-animation';

export default function Home({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);

    return (
        <div className="flex justify-center items-start">
            <div className={`${theme === 'light' ? 'border-light' : 'border-dark'} flex flex-col lg:flex-row`} style={{ width: '45vw', padding: "20px", marginTop: 'auto' }}>
                <div className='w-full lg:w-3/6 flex flex-col justify-center items-start' >
                    <div className='flex justify-center'>
                        <h5 className={`text-${theme}`} style={{ fontSize: '20px' }}>
                            Hello, I'm
                        </h5>
                    </div>
                    <br />
                    <div>
                        <h5 className={`text-${theme}`} style={{ fontSize: '35px' }}>Nattanan</h5>
                    </div>
                    <div className='flex justify-end'>
                        <h5 className={`text-${theme}`} style={{ fontSize: '35px' }}>Saingthong</h5>
                    </div>
                    <br />
                    <div className='flex justify-center mb-10 mt-3'>
                        <TypeAnimation 
                            sequence={[
                                'Call me New <3' , 
                                1500,
                                'Welcome to my website :)',
                                1500 ,
                            ]}
                            repeat={Infinity}
                            speed={20}
                            style={{ fontSize: '20px', color: params.theme === 'light' ? 'black' : 'white' }}
                        />
                    </div>
                </div>
                <div className='w-full lg:w-3/6 flex justify-center'>
                    <Image
                        src="/img/profile.jpg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                </div>
                {/* <br />
                <div>
                    <p className={`text-${theme}`} style={{ fontSize: '20px' }}>Pull everything on the internet and put it into my code</p>
                </div> */}
            </div>
        </div>
    )

}
