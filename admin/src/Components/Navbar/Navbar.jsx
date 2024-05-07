import React from 'react'
import { SiIfood } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";

function Navbar() {
  return (
    <div className='text-white'>
      <span className='flex'>
        <SiIfood className='mt-5 ml-5 size-[1.8rem] cursor-pointer text-blue-500' />
        <h1 className='mt-4 ml-2 text-3xl cursor-pointer font-sedan font-bold text-blue-500'>Foody</h1>
      </span>
      <h1 className='mt-[-2rem] text-2xl cursor-pointer font-sedan font-bold text-center text-blue-500'>ADMIN PANEL</h1>
      <div className='flex justify-end'>
        <MdAccountCircle className='mt-[-2rem] mr-[1.5rem] size-[2.2rem] cursor-pointer hover:text-blue-500 ' />
      </div>
      <hr className='mt-3' />
    </div>
  )
}

export default Navbar