'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

export default function Contact({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);

    const handleSubmit = () => {
        console.log('submit');
    }

    return (
        <div className="flex flex-col h-screen justify-center items-start pb-20">
            <div className=' w-screen flex justify-center items-center'>
                <Fade triggerOnce>
                    <div className='flex flex-col' style={{ marginTop: 'auto' }}>
                        <div className={theme === 'light' ? 'border-light' : 'border-dark'}>
                            <div>
                                <h5 className={`text-${theme}`} style={{ fontSize: '24px' }}>Get in Touch</h5>
                                <br />
                            </div>
                            <form id="contactForm">
                                <div className={`border-${theme} hover-zoom`}>
                                    <input type="text" id="name" name="name" required aria-required="true" placeholder="Your Name*" className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                                </div>
                                <div className={`border-${theme} hover-zoom`}>
                                    <input type="email" id="email" name="email" required aria-required="true" placeholder="Email address*" className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                                </div>
                                <div className={`border-${theme} hover-zoom`}>
                                    <textarea id="content" name="content" rows="4" cols="50" required aria-required="true" placeholder="What can I help?*" className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}  ></textarea>
                                </div>
                                <div className={`flex justify-center border-${theme} hover-zoom`} onClick={handleSubmit}>
                                    <p className={`text-${theme}`} style={{ fontSize: '20px' }}>Send</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade >
            </div>
        </div>
    )
}
