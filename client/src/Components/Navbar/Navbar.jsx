import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

function Navbar() {
    return (
        <div>
            <h1 className='mt-3 ml-5 cursor-pointer text-4xl font-mono font-bold text-blue-500'>Foody</h1>
            <ul className='mt-[-2rem] font-bold font-serif cursor-pointer flex justify-center gap-[5rem] '>
                <li className=' hover:w-[5rem] hover:h-[2rem] hover:rounded-full hover:text-center hover:pt-1 hover:bg-blue-500 hover:text-white'>Home</li>
                <li className=' hover:w-[5rem] hover:h-[2rem] hover:rounded-full hover:text-center hover:pt-1 hover:bg-blue-500 hover:text-white'>Menu</li>
                <li className=' hover:w-[5rem] hover:h-[2rem] hover:rounded-full hover:text-center hover:pt-1 hover:bg-blue-500 hover:text-white'>Service</li>
                <li className=' hover:w-[5rem] hover:h-[2rem] hover:rounded-full hover:text-center hover:pt-1 hover:bg-blue-500 hover:text-white'>About</li>
            </ul>
            <ul className='mt-[-1.5rem] mr-[2rem] flex justify-end gap-[3rem]'>
                <CiSearch className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
                <IoCartSharp className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
                <MdAccountCircle className='cursor-pointer hover:text-blue-500 size-[1.5rem]' />
            </ul>
        </div>
    )
}

export default Navbar