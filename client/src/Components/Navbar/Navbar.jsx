import React from 'react'
import { SiIfood } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

function Navbar() {
    return (
        <div className='sticky top-0 z-50'>
            <span className='flex mt-2'>
            <SiIfood className='mt-1 ml-5 cursor-pointer text-blue-500 size-[1.5rem]'/>
            <h1 className=' ml-2 cursor-pointer text-4xl font-sedan font-bold text-blue-500'>Foody</h1>
            </span>
            <ul className='mt-[-2rem] font-bold font-serif text-white cursor-pointer flex justify-center gap-[5rem] '>
                <li className='hover:text-blue-500'>Home</li>
                <li className='hover:text-blue-500'>Menu</li>
                <li className='hover:text-blue-500'>Service</li>
                <li className='hover:text-blue-500'>About</li>
            </ul>
            <ul className='mt-[-1.5rem] mr-[2rem] text-white flex justify-end gap-[3rem]'>
                <IoSearch className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
                <IoCartSharp className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
                <MdAccountCircle className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
            </ul>
        </div>
    )
}

export default Navbar