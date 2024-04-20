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
        <div>
            <div className="flex justify-center items-center h-10">
                <div className='flex flex-col justify-center' style={{ marginTop: 'auto' }}>
                    <div className={theme === 'light' ? 'border-light' : 'border-dark'} style={{ width: '50vw' }}>
                        <h5 className={`text-${theme}`} style={{ fontSize: '24px' }}>Project</h5>
                    </div>
                    <div >
                        <div className='flex flex-wrap'>
                            <div className={`flex flex-col w-1/2 border-${theme} hover-zoom`} onClick={() => router.push(`/pages/${theme}/projects/nova-bot`)}>
                                <div className='flex justify-center'>
                                    <Image
                                        src="/img/projects/project1/pj1.png"
                                        width={300}
                                        height={100}
                                        alt="Project 1"
                                    />
                                </div>
                                <div className='p-3' style={{ width: '300px'}}>
                                    <h1 className={`text-${theme} m-2`} style={{ fontSize: '30px' }}>Nova Bot</h1>
                                    <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Nova Bot เป็นบอทสำหรับใช้บนดิสคอร์ด ผมได้สร้างบอทตัวนี้ขึ้นเพื่อให้ง่ายต่อการจัดการเซิร์ฟเวอร์ โดยบอทตัวมีมีความสามารถในการจัดการเซิร์ฟเวอร์คอมมูนิตี้เบื้องต้น</p>
                                </div>
                            </div>
                            <div className={`flex flex-col w-1/2 border-${theme} hover-zoom`} onClick={() => router.push(`/pages/${theme}/projects/book-store`)}>
                                    <div className='flex justify-center'>
                                        <Image
                                            src="/img/projects/project2/home.png"
                                            width={300}
                                            height={100}
                                            alt="Project 2"
                                        />
                                    </div>
                                <div className='p-3' style={{ width: '300px'}}>
                                    <h1 className={`text-${theme} m-2`} style={{ fontSize: '30px' }}>Book Store</h1>
                                    <p className={`text-${theme}`} style={{ fontSize: '15px' }}>โปรเจคนี้เป็นเว็บร้านขายหนังสือแบบครบวงจรที่ผมได้มีโอกาศทำ โดยเว็บจะมีทั้งหน้าบ้านสำหรับลูกค้า และหลังบ้านสำหรับพนักงานเพื่อให้ง่ายต่อการใช้งานและจัดการร้านค้า</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='flex flex-wrap'>
                            <div className='w-1/2'>
                                <h1 className={`text-${theme}`} style={{ fontSize: '30px' }}>Project 3</h1>
                                <br />
                                <p className={`text-${theme}`} style={{ fontSize: '20px' }}>This is my third project</p>
                            </div>
                            <div className='w-1/2'>
                                <h1 className={`text-${theme}`} style={{ fontSize: '30px' }}>Project 4</h1>
                                <br />
                                <p className={`text-${theme}`} style={{ fontSize: '20px' }}>This is my fourth project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
