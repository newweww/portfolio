'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Free2Play({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);

    const modalRef = useRef(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setShowModal(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col m-auto project-content">
                <div className={`flex flex-col justify-around border-${theme}-btline md:flex-col lg:flex-row xl:flex-row 2xl:flex-row`}>
                    <div>
                        <h5 className={`text-${theme}`} style={{ fontSize: '40px' }}>Free2Play</h5>
                    </div>
                    <div className='flex flex-row'>
                        <a className='md:static lg:static xl:static 2xl:absolute max-w-28' href="https://github.com/newweww/free2play-website" target="_blank" rel="noopener noreferrer" >
                            <div className={`border-${theme} text-${theme}`}>
                                Github
                            </div>
                        </a>
                        <a className='md:static lg:static xl:static 2xl:absolute max-w-28' href="https://free2play-website.vercel.app/" target="_blank" rel="noopener noreferrer" >
                            <div className={`border-${theme} text-${theme}`}>
                                Website
                            </div>
                        </a>
                    </div>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project7/1.png"
                        width={500}
                        height={100}
                        alt="Project 2"
                        onClick={() => handleImageClick("/img/projects/project7/1.png")}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>Free2Play เป็นเว็บไซท์ที่รวบรวมเกมฟรีหลางหลายแนวเอาไว้เพื่อให้ผู้ใช้สามารถมาเลือกและค้นหาเกมที่สนใจได้ โดยภายในเว็บไซท์จะมีการแบ่งหมวดหมู่มากมายเช่น MOBA MMORPG etc. เพื่อให้งานต่อการค้นหา โดยแต่ละเกมจะมีรายละเอียดเช่น ผู้พัฒนา วันวางจำหน่าย ฯลฯ และยังสามารมากดลิ้งค์เพื่อเข้าไปยังเว็บทางการของตัวเกมได้</p>
                </div>
                <br />
                <div className='flex flex-col items-center'>
                    <Image
                        src="/img/projects/project7/2.png"
                        width={500}
                        height={100}
                        alt="Project 2"
                        onClick={() => handleImageClick("/img/projects/project7/2.png")}
                        style={{ cursor: 'pointer' }}
                    />
                    <br />
                </div>
                <br />
                <div className='flex flex-col items-center'>
                    <Image
                        src="/img/projects/project7/3.png"
                        width={500}
                        height={100}
                        alt="Project 2"
                        onClick={() => handleImageClick("/img/projects/project7/3.png")}
                        style={{ cursor: 'pointer' }}
                    />
                    <br />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>นอกจากนี้ยังมีระบบ Log-in เพื่อให้ผู้ใช้สามารถกดเพิ่มเกมที่สนใจไว้ในลิสต์ Favorite เพื่อประกอบการตัดสินใจได้อีกด้วย</p>
                </div>
                <br />

            </div>

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                    <div ref={modalRef} className="max-w-3xl">
                        <img src={selectedImage} alt="Popup" className="max-w-full h-auto" />
                    </div>
                </div>
            )}
        </div>
    );
}
