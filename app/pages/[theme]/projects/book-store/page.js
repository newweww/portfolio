'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Project2({ params }) {
    const router = useRouter();
    const [theme, setTheme] = useState();

    useEffect(() => {
        setTheme(params.theme);
    }, []);


    return (
        <div className="flex justify-center items-center h-10">
            <div className="flex flex-col m-auto" style={{ width: '50vw' }}>
                <div className={`border-${theme}-btline`}>
                    <h5 className={`text-${theme}`} style={{ fontSize: '40px' }}>Book store</h5>
                </div>
                <br />
                <div className='flex justify-center'>
                    <Image
                        src="/img/projects/project2/home.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>paragarph 1</p>
                </div>
                <br />  
                <div className='flex flex-col items-center'>
                    <Image
                        src="/img/projects/project2/product-cus.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                    <br />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>paragarph 2</p>
                </div>
                <br />
                <div className='flex flex-col items-center'>
                    <Image
                        src="/img/projects/project2/cart.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                    <br />
                    <Image
                        src="/img/projects/project2/order.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>paragarph 3</p>
                </div>
                <br />
                <div className='flex flex-col items-center'>
                    <Image
                        src="/img/projects/project2/dashboard.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                    <br />
                    <Image
                        src="/img/projects/project2/orders.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                    <br />
                    <Image
                        src="/img/projects/project2/product.png"
                        width={500}
                        height={100}
                        alt="Project 2" />
                </div>
                <br />
                <div className='flex justify-center p-5'>
                    <p className={`text-${theme}`}>paragarph 4</p>
                </div>
                <br />
            </div>
        </div>
    )
}
