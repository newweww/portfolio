'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DiJsBadge } from "react-icons/di";
import { Fade } from 'react-awesome-reveal';

export default function About({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);

    return (
        <div className="flex flex-col justify-center items-start pb-20 mt-10">
            <div className='w-screen flex justify-center items-center'>
                <Fade triggerOnce>
                    <div className={`border-${theme}`} style={{ width: '45vw', padding: "20px" }}>
                        <div className='flex flex-col'>
                            <div className='flex items-center justify-between h-full'>
                                <div className="flex justify-center w-3/6">
                                    <Image
                                        src="/img/profile.jpg"
                                        width={200}
                                        height={200}
                                        alt="Profile"
                                    />
                                </div>
                                <div className="flex flex-col justify-center w-3/6" >
                                    <h1 className=' flex justify-center' style={{ fontSize: '40px', color: theme === 'light' ? 'black' : 'white' }}>About me</h1>

                                    <br />
                                    <p style={{ color: theme === 'light' ? 'black' : 'white', fontSize: '15px', textIndent: '50px' }}>I am an energetic fresh graduate ready to do the task assigned to the best of my ability, and I also have a quick learning ability and a desire to constantly learn new things. I am ready to take on any kind of challenge and work experience and am willing to adapt to the work as efficiently as possible
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='flex flex-row'>
                                <div className='w-3/6'>
                                    <h1 className={`text-${theme}`} style={{ fontSize: '30px' }}>Profile</h1>
                                    <br />
                                    <p className={`text-${theme}`} style={{ fontSize: '20px' }}>Name : Nattanan Saingthong</p>
                                    <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Date of Birth : 10/10/2002</p>
                                    <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Tel. : 098-268-8244</p>
                                    <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Email : nattanan2545@hotmail.com</p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='flex flex-col items-end '>
                                <h1 className={`text-${theme}`} style={{ fontSize: '30px' }}>Education</h1>
                                <br />
                                <p className={`text-${theme}`} style={{ fontSize: '16px', fontWeight: 'bold' }}>Satit Kaset Kamphaengsean School</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>2009 - 2020</p>
                                <br />
                                <p className={`text-${theme}`} style={{ fontSize: '16px', fontWeight: 'bold' }}>Kasetsart University Kamphaengsean</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Information Teachnology</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>2021 - Present</p>
                            </div>
                            <br />
                            <br />
                            <div className='flex flex-col'>
                                <div className='flex flex-col items-center'>
                                    <h1 className={`text-${theme}`} style={{ fontSize: '30px' }}>Skill</h1>
                                </div>
                                <br />
                                <div className='flex flex-row'>
                                    <div className={`border-${theme}-rline flex flex-col items-center w-3/6`}>
                                        <p className={`text-${theme} mb-2`} style={{ fontSize: '30px' }}>Frontend</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>ReactJs</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>NextJs</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>Bootstrap</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>Tailwind</p>
                                    </div>
                                    <div className="flex flex-col items-center w-3/6 mt-3">
                                        <p className={`text-${theme} mb-2`} style={{ fontSize: '30px' }}>Backend</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>NodeJs</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>MySQL</p>
                                        <p className={`text-${theme} mt-2`} style={{ fontSize: '20px' }}>MongoDB</p>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className='flex justify-center items-center'>
                                    <div className='flex justify-center items-center' style={{ width: '50%', height: 'auto' }}>
                                        <Image src="/img/react.png" width={75} height={67} alt="ReactJs" style={{ marginRight: '10px' }} />
                                        <Image src="/img/nextjs.png" width={60} height={60} alt="NextJs" style={{ marginRight: '10px', filter: theme === 'dark' ? 'invert(100%)' : 'none' }} />
                                        <Image src="/img/tailwind.png" width={70} height={75} alt="Tailwind" style={{ marginRight: '10px' }} />
                                        <Image src="/img/bootstrap.png" width={50} height={75} alt="Bootstrap" style={{ marginRight: '10px' }} />
                                        <Image src="/img/node.png" width={75} height={46} alt="NodeJs" style={{ marginRight: '10px' }} />
                                        <Image src="/img/npm.png" width={75} height={26} alt="NPM" style={{ marginRight: '10px' }} />
                                        <Image src="/img/mysql.png" width={75} height={39} alt="MySQL" style={{ marginRight: '10px' }} />
                                        <Image src="/img/mongodb.png" width={34} height={75} alt="MongoDB" style={{ marginRight: '10px' }} />
                                    </div>

                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='flex flex-col items-center'>
                                <h1 className={`text-${theme}`} style={{ fontSize: '30px' }}>Certificate</h1>
                                <br />
                                <Image
                                    className='mb-5'
                                    src="/img/sql-hackerrank.png"
                                    width={400}
                                    height={200}
                                    alt="Certificate" />
                                <p className={`text-${theme}`} style={{ fontSize: '20px', fontWeight: 'bold' }}>SQL (Advanced) Certificate</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>HackerRank</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>03/2023</p>
                                <br />
                                <Image
                                    className='mb-5'
                                    src="/img/power-bi-cert.png"
                                    width={400}
                                    height={200}
                                    alt="Certificate" />
                                <p className={`text-${theme}`} style={{ fontSize: '20px', fontWeight: 'bold' }}>Power BI Data Analyst</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>Microsoft</p>
                                <p className={`text-${theme}`} style={{ fontSize: '15px' }}>12/2022</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
