'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Tesla_clone({ params }) {
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
            <div className="flex flex-col m-auto" style={{ width: '50vw' }}>
                <div className={`border-${theme}-btline`}>
                    <h5 className={`text-${theme}`} style={{ fontSize: '40px' }}>Tesla Clone</h5>
                </div>
                <a className='absolute' href="https://github.com/newweww/tesla-clone" target="_blank" rel="noopener noreferrer" style={{ width: '7vw', right: '25vw' }}>
                    <div className={`border-${theme} text-${theme}`}>
                        Github
                    </div>
                </a>
                <a className='absolute' href="https://teslaclone-b300c.web.app/" target="_blank" rel="noopener noreferrer" style={{ width: '7vw', right: '33vw' }}>
                    <div className={`border-${theme} text-${theme}`}>
                        Website
                    </div>
                </a>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project4/home.png"
                        width={500}
                        height={100}
                        alt="Project 2"
                        onClick={() => handleImageClick("/img/projects/project4/home.png")}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>paragarph 1</p>
                </div>
                <br />
                <div className='flex flex-col items-center'>
                    <Image
                        src="/img/projects/project4/all_page.jpeg"
                        width={500}
                        height={100}
                        alt="Project 2"
                        onClick={() => handleImageClick("/img/projects/project4/all_page.jpeg")}
                        style={{ cursor: 'pointer' }}
                    />
                    <br />
                </div>


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
