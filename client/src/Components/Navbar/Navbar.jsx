import React, { useState } from 'react'
import { SiIfood } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [nav, setNav] = useState(true);

    const HandleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='sm:h-[2rem] sticky top-0 z-50'>
            <span className='flex'>
                <SiIfood className='sm:mt-1 sm:ml-5 cursor-pointer text-blue-500 size-[1.5rem]' />
                <h1 className='sm:text-2xl sm:ml-2 md:ml-2 md:text-4xl cursor-pointer font-sedan font-bold text-blue-500'>Foody</h1>
            </span>
            <div onClick={HandleNav} className='sm:mt-1 sm:mr-3 md:invisible flex justify-end'>
                {!nav ? <IoMdClose className='sm:mt-[-2rem] flex text-white size-6 ' /> : <IoMdMenu className='sm:mt-[-2rem] flex text-white size-6 ' />}
            </div>
            <div className={!nav ? 'text-white fixed sm:left-0 sm:top-0 sm:w-[60%] sm:h-[15rem] sm:border-r border-r-gray-800 ease-in-out duration-200 sm:visible lg:invisible' : 'fixed left-[-100%]'}>
                <ul className='lg:mt-[-2rem] lg:gap-[5rem] font-bold font-serif text-white cursor-pointer '>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>Home</li>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>Menu</li>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>Service</li>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>About</li>
                </ul>
            </div>
            <ul className='sm:invisible md:visible md:mt-[-2rem] md:gap-[2rem] font-bold font-serif text-white cursor-pointer flex justify-center '>
                <li className='hover:text-blue-500'>Home</li>
                <li className='hover:text-blue-500'>Menu</li>
                <li className='hover:text-blue-500'>Service</li>
                <li className='hover:text-blue-500'>About</li>
            </ul>
            <ul className='sm:invisible md:visible md:mt-[-1.5rem] md:mr-[2rem] md:gap-[1rem] text-white flex justify-end'>
                <IoSearch className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
                <IoCartSharp className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
                <MdAccountCircle className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
            </ul>
        </div>
    )
}

export default Navbar