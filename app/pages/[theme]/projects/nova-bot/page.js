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
        <div className="flex justify-center items-center h-10">
            <div className="flex flex-col m-auto" style={{ width: '50vw' }}>
                <div className={`border-${theme}-btline`}>
                    <h5 className={`text-${theme}`} style={{ fontSize: '40px' }}>Nova bot</h5>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project1/pj1.png"
                        width={300}
                        height={100}
                        alt="Project 1" />
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
                        alt="Project 1" />
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
                        alt="Project 1" />
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
                        alt="Project 1" />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>และยังสามารถใช้คำสั่ง "/qna [question]" เพื่อส่งคำถามมาให้อ่านโดยตรง โดยคำถามที่ถูกส่งมาจะมาแสดงอยู่บนเว็บไซท์ซึ่งจะระบุผู้ถาม เวลาที่ส่ง และคำถามที่ถามเพื่อให้ง่ายและมีความเป็นระเบียบในการถามตอบคำถามต่าง ๆ ที่สงสัย</p>
                </div>
                <br />
            </div>
        </div>
    )
}
