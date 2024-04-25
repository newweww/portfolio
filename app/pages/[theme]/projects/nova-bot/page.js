'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Project1({ params }) {
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
        <div className="flex justify-center items-center h-10">
            <div className="flex flex-col m-auto" style={{ width: '50vw' }}>
                <div className={`border-${theme}-btline`}>
                    <h5 className={`text-${theme}`} style={{ fontSize: '40px' }}>Nova bot</h5>
                </div>
                <a className='absolute' href="https://github.com/newweww/nova-bot" target="_blank" rel="noopener noreferrer" style={{ width: '7vw', right: '25vw' }}>
                    <div className={`border-${theme} text-${theme}`}>
                        Github
                    </div>
                </a>
                <a className='absolute' href="https://masternova.web.app/" target="_blank" rel="noopener noreferrer" style={{ width: '7vw', right: '33vw' }}>
                    <div className={`border-${theme} text-${theme}`}>
                        Website
                    </div>
                </a>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project1/pj1.png"
                        width={300}
                        height={100}
                        alt="Project 1"
                        onClick={() => handleImageClick("/img/projects/project1/pj1.png")}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>เนื่องจากผมใช้ดิสคอร์ดเป็นกิจวัตรอยู่แล้ว จึงมีความคิดที่อยากจะมีบอทเป็นของตัวเองที่สามารถใช้งานเพื่ออำนวยความสะดวกในการใช้ดิสคอร์ต ผมเคยได้เริ่มทำบอทครั้งแรกตอนอยู่ปี 2 โดยใช้ discord.py ซึ่งเป็นภาษา python แต่ตอนนั้นด้วยความที่ยังมีความรู้และประสบการณ์มากพอจึงทำให้ทำไม่สำเร็จ จนผมได้มีโอกาศมาทำอีกครั้งตอนช่วงปี 3 แต่ครั้งนี้ผมได้เปลี่ยนมาใช้ discord.js ซึ่งจะเป็นภาษา javascript ซึ่งเป็นภาษาที่ผมชำนาญมากกว่าจึงทำให้สามารถสร้างบอทตัวนี้ขึ้นมาได้</p>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project1/noti.png"
                        width={300}
                        height={100}
                        alt="Project 1"
                        onClick={() => handleImageClick("/img/projects/project1/noti.png")}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>โดยบอทตัวนี้จะมีความสามารถในการแจ้งเตือนวิดีโอจากยูทูปโดยใช้คำสั่ง "/notification-configure [youtube-id] [channel] [custom-message]" เพื่อให้บอทเริ่มทำงาน และใช้คำสั่ง "/notification-remove [youtube-id] [channel]" เพื่อยกเลิก</p>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project1/welcome.png"
                        width={300}
                        height={100}
                        alt="Project 1"
                        onClick={() => handleImageClick("/img/projects/project1/welcome.png")}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>ต่อมาบอทสามารถใช้คำสั่ง "/setup-welcome-channel [channel] [custom-message]" เพื่อให้บอทส่งข้อความต้อนรับสมาชิกใหญ่ที่เข้ามาในเซิร์ฟเวอร์ และยังสามารถใช้คำสั่ง "/auto-role [role]" เพื่อในยศกับคนที่เข้ามาใหม่ได้ด้วย เพื่อยกเลิกการตั้งค่าใช้คำสั่ง "/remove-welcome-channel [channel]" เพื่อยกเลิกข้อความต้อนรับและ "/autorole-disable" เพื่อยกเลิกหารให้ยศ</p>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project1/website.png"
                        width={300}
                        height={100}
                        alt="Project 1"
                        onClick={() => handleImageClick("/img/projects/project1/website.png")}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>และยังสามารถใช้คำสั่ง "/qna [question]" เพื่อส่งคำถามมาให้อ่านโดยตรง โดยคำถามที่ถูกส่งมาจะมาแสดงอยู่บนเว็บไซท์ซึ่งจะระบุผู้ถาม เวลาที่ส่ง และคำถามที่ถามเพื่อให้ง่ายและมีความเป็นระเบียบในการถามตอบคำถามต่าง ๆ ที่สงสัย</p>
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
