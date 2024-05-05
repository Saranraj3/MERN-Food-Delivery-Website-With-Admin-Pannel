import React from 'react'
import { SiIfood } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";


function Footer() {
    return (
        <div className='mt-[10rem]'>
            <div>
                <div>
                    <span className='flex'>
                        <SiIfood className='mt-1 ml-5 cursor-pointer text-blue-500 size-[1.5rem]' />
                        <h1 className=' ml-2 cursor-pointer text-4xl font-sedan font-bold text-blue-500'>Foody</h1>
                    </span>
                    <div className='text-white mt-[2rem] ml-5 font-bold'>
                        <h1 className='cursor-pointer text-xl font-sedan'>Company</h1>
                        <ul className='mt-5'>
                            <li className='mt-1 cursor-pointer font-Arimo'>Future of The Company</li>
                            <li className='mt-1 cursor-pointer font-Arimo'>Food Delivery</li>
                            <li className='mt-1 cursor-pointer font-Arimo'>About Us</li>
                            <li className='mt-1 cursor-pointer font-Arimo'>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-[-9rem] mr-[35rem] text-center font-bold text-white '>
                    <h1 className=' cursor-pointer font-sedan'>Social Media</h1>
                    <ul className='mt-5 gap-2 flex justify-center'>
                        <FaFacebook className='mt-1 cursor-pointer hover:opacity-30 size-[2rem]' />
                        <PiInstagramLogoFill className='mt-1 cursor-pointer hover:opacity-30 size-[2rem]' />
                        <FaXTwitter className='mt-1 cursor-pointer hover:opacity-30 size-[2rem]' />
                        <RiWhatsappFill className='mt-1 cursor-pointer hover:opacity-30 size-[2rem]' />
                    </ul>
                </div>
                <div className='mt-[-5rem] font-bold text-center text-white '>
                    <h1 className='font-sedan  cursor-pointer'>Contact</h1>
                    <ul className='mt-2'>
                        <li className='font-Arimo  cursor-pointer'>Mobile: 8939293904</li>
                        <li className='font-Arimo  cursor-pointer'>Email: www.foody@gmail.com</li>
                    </ul>
                </div>
                <div className='mt-[6rem] text-white text-sm font-Arimo font-bold text-center'>
                    <p className=' cursor-pointer'>What is online delivery? Online food ordering is the process of placing a meal order through a website or app from a nearby restaurant or food cooperative. Many of them allow clients to maintain accounts with them in order to make regular ordering easier, much like ordering consumer products online.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer