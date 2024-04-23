'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

export default function Project({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);

    return (
        <div className="flex flex-col justify-center items-start pb-20 mt-10">
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center' style={{ marginTop: 'auto' }}>
                    <Fade direction='down' triggerOnce>
                        <div className={theme === 'light' ? 'border-light' : 'border-dark'} style={{ width: '50vw' }}>
                            <h5 className={`text-${theme}`} style={{ fontSize: '24px' }}>Project</h5>
                        </div>
                    </Fade>
                    <br />
                    <div >
                        <div className='flex flex-wrap justify-center'>
                            <Fade className='mx-3' delay={200} triggerOnce >
                                <div className={`flex flex-col w-1/2 border-${theme} hover-zoom`} style={{ width: '100%', height: '470px' }} onClick={() => router.push(`/pages/${theme}/projects/nova-bot`)}>
                                    <div className='flex justify-center' >
                                        <Image
                                            src="/img/projects/project1/pj1.png"
                                            width={300}
                                            height={100}
                                            alt="Project 1"
                                        />
                                    </div>
                                    <div className='p-3' style={{ width: '300px' }}>
                                        <h1 className={`text-${theme} mx-2 mt-2`} style={{ fontSize: '30px' }}>Nova Bot</h1>
                                        <div className='flex flex-wrap'>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>NodeJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>ReactJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>Bootstrap</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>MongoDB</span>
                                        </div>
                                        <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Nova Bot เป็นบอทสำหรับใช้บนดิสคอร์ด ผมได้สร้างบอทตัวนี้ขึ้นเพื่อให้ง่ายต่อการจัดการเซิร์ฟเวอร์ โดยบอทตัวมีมีความสามารถในการจัดการเซิร์ฟเวอร์คอมมูนิตี้เบื้องต้น</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade className='mx-3' delay={400} triggerOnce>
                                <div className={`flex flex-col w-1/2 border-${theme} hover-zoom`} style={{ width: '100%',height: '470px'  }} onClick={() => router.push(`/pages/${theme}/projects/book-store`)}>
                                    <div className='flex justify-center mb-1'>
                                        <Image
                                            src="/img/projects/project2/home.png"
                                            width={300}
                                            height={100}
                                            alt="Project 2"
                                        />
                                    </div>
                                    <div className='p-3' style={{ width: '300px' }}>
                                        <h1 className={`text-${theme} mx-2 mt-2`} style={{ fontSize: '30px' }}>Book Store</h1>
                                        <div className='flex flex-wrap'>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>NodeJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>ReactJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>Bootstrap</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>MySQL</span>
                                        </div>
                                        <p className={`text-${theme}`} style={{ fontSize: '15px' }}>โปรเจคนี้เป็นเว็บร้านขายหนังสือแบบครบวงจรที่ผมได้มีโอกาศทำ โดยเว็บจะมีทั้งหน้าบ้านสำหรับลูกค้า และหลังบ้านสำหรับพนักงานเพื่อให้ง่ายต่อการใช้งานและจัดการร้านค้า</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <br />
                        <br />
                        <div className='flex flex-wrap justify-center'>
                            <Fade className='mx-3' delay={200} triggerOnce >
                                <div className={`flex flex-col w-1/2 border-${theme} hover-zoom`} style={{ width: '100%', height: '470px'  }} onClick={() => router.push(`/pages/${theme}/projects/disney-info`)}>
                                    <div className='flex justify-center' >
                                        <Image
                                            src="/img/projects/project3/home.png"
                                            width={300}
                                            height={100}
                                            alt="Project 1"
                                        />
                                    </div>
                                    <div className='p-3' style={{ width: '300px' }}>
                                        <h1 className={`text-${theme} mx-2 mt-2`} style={{ fontSize: '30px' }}>Disney Info</h1>
                                        <div className='flex flex-wrap'>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>ReactJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>Bootstrap</span>
                                        </div>
                                        <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Nova Bot เป็นบอทสำหรับใช้บนดิสคอร์ด ผมได้สร้างบอทตัวนี้ขึ้นเพื่อให้ง่ายต่อการจัดการเซิร์ฟเวอร์ โดยบอทตัวมีมีความสามารถในการจัดการเซิร์ฟเวอร์คอมมูนิตี้เบื้องต้น</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade className='mx-3' delay={400} triggerOnce>
                                <div className={`flex flex-col w-1/2 border-${theme} hover-zoom`} style={{ width: '100%',height: '470px'  }} onClick={() => router.push(`/pages/${theme}/projects/book-store`)}>
                                    <div className='flex justify-center mb-1'>
                                        <Image
                                            src="/img/projects/project2/home.png"
                                            width={300}
                                            height={100}
                                            alt="Project 2"
                                        />
                                    </div>
                                    <div className='p-3' style={{ width: '300px' }}>
                                        <h1 className={`text-${theme} mx-2 mt-2`} style={{ fontSize: '30px' }}>Book Store</h1>
                                        <div className='flex flex-wrap'>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>NodeJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>ReactJs</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>Bootstrap</span>
                                            <span class={`inline-block badge-${theme} text-xs font-semibold px-2 rounded-full uppercase mr-1 mb-1`}>MySQL</span>
                                        </div>
                                        <p className={`text-${theme}`} style={{ fontSize: '15px' }}>โปรเจคนี้เป็นเว็บร้านขายหนังสือแบบครบวงจรที่ผมได้มีโอกาศทำ โดยเว็บจะมีทั้งหน้าบ้านสำหรับลูกค้า และหลังบ้านสำหรับพนักงานเพื่อให้ง่ายต่อการใช้งานและจัดการร้านค้า</p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
