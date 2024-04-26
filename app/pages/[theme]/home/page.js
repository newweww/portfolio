'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';

export default function Home({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setTheme(params.theme);
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-start">
            <div className='h-screen w-screen flex justify-center items-center'> 
                <Fade className={`flex `}>
                    <div className={`flex home-main ${windowWidth < 950 ? '' : `border-${theme}`} flex-col lg:flex-row `}>
                        <div className={ `w-full lg:w-3/6 flex flex-col justify-center items-start`} >
                            <div className='flex justify-center'>
                                <h5 className={`text-${theme}`} style={{ fontSize: windowWidth < 950 ? '16px' : '20px' }}>
                                    Hello, I'm
                                </h5>
                            </div>
                            <br />
                            <div>
                                <h5 className={`text-${theme}`} style={{ fontSize: windowWidth < 950 ? '28px' : '35px' }}>Nattanan</h5>
                            </div>
                            <div className='flex justify-end'>
                                <h5 className={`text-${theme}`} style={{ fontSize: windowWidth < 950 ? '28px' : '35px' }}>Saingthong</h5>
                            </div>
                            <br />
                            <div className='flex justify-center mb-10 mt-3'>
                                <TypeAnimation
                                    sequence={[
                                        'Call me New <3',
                                        1500,
                                        'Welcome to my website :)',
                                        1500,
                                    ]}
                                    repeat={Infinity}
                                    speed={20}
                                    style={{ fontSize: windowWidth < 950 ? '16px' : '20px', color: params.theme === 'light' ? 'black' : 'white' }}
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
                    </div>
                </Fade>
            </div>

            <br />
            <div className={`h-96 w-screen second-bg-${theme} flex justify-center items-center`}>
                <Fade direction='up' triggerOnce>
                    <div>
                        <br />
                        <div className={`home-main ${windowWidth < 950 ? '' : `border-${theme}-tbline`} flex flex-col 2xl:flex-row`} >
                            <br />
                            <br />
                            <p className={`text-${theme}`} style={{ fontSize: windowWidth < 950 ? '20px' : '30px' }}>"Pull everything from the internet</p>
                            <br />
                            <p className={`text-${theme} flex justify-end`} style={{ fontSize: windowWidth < 950 ? '20px' : '30px' }}>and Paste it into my code"</p>
                            <br />
                            <p className={`text-${theme} flex justify-end`} style={{ fontSize: windowWidth < 950 ? '16px' : '20px' }}>-Someone on the internet</p>
                            <br />
                            <br />
                        </div>
                    </div>
                </Fade>
            </div>
            <div className='h-screen w-screen'>

            </div>
        </div>
    )

}
