'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

export default function Contact({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        setTheme(params.theme);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, msg }),
            });
            
            if (response.ok) {
                setName('');
                setEmail('');
                setMsg('');
                console.log('Post submitted successfully!');
                window.location.reload();
            } else {
                console.error('Failed to submit post.');
            }
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'content':
                setMsg(value);
                break;
            default:
                break;
        }
    };
    return (
        <div className="flex flex-col h-screen justify-center items-start pt-24 pb-20">
            <div className='flex justify-center items-centerw-full max-w-sm mx-10 m-5'>
                <Fade triggerOnce>
                    <div className='flex flex-col'>
                        <div className={theme === 'light' ? 'border-light' : 'border-dark'}>
                            <div>
                                <h5 className={`text-${theme}`} style={{ fontSize: '24px' }}>Get in Touch</h5>
                                <br />
                            </div>
                            <form id="contactForm">
                                <div className={`border-${theme} hover-zoom mb-4`}>
                                    <input onChange={handleChange} type="text" id="name" name="name" required aria-required="true" placeholder="Your Name*" className={`${theme === 'dark' ? 'text-white' : 'text-black'} w-full`} />
                                </div>
                                <div className={`border-${theme} hover-zoom mb-4`}>
                                    <input onChange={handleChange} type="email" id="email" name="email" required aria-required="true" placeholder="Email address*" className={`${theme === 'dark' ? 'text-white' : 'text-black'} w-full`} />
                                </div>
                                <div className={`border-${theme} hover-zoom mb-4`}>
                                    <textarea onChange={handleChange} id="content" name="content" rows="4" cols="50" required aria-required="true" placeholder="What can I help?*" className={`${theme === 'dark' ? 'text-white' : 'text-black'} w-full`} ></textarea>
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
