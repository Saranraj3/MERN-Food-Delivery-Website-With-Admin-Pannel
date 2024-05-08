import React from 'react'
import { SiIfood } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";

function Navbar() {
  return (
    <div className='text-white'>
      <span className='flex'>
        <SiIfood className='mt-5 ml-5 size-[1.8rem] cursor-pointer text-blue-500' />
        <h1 className='sm:invisible md:visible md:text-3xl mt-4 ml-2 cursor-pointer font-sedan font-bold text-blue-500'>Foody</h1>
      </span>
      <h1 className='sm:mt-[-1.6rem] md:text-2xl md:mt-[-2rem] cursor-pointer font-sedan font-bold text-center text-blue-500'>ADMIN PANEL</h1>
      <div className='flex justify-end'>
        <MdAccountCircle className='sm:mt-[-1.8rem] md:mt-[-2rem] mr-[1.5rem] size-[2.2rem] cursor-pointer hover:text-blue-500 ' />
      </div>
      <hr className='sm:mt-2 md:mt-3' />
    </div>
  )
}

export default Navbar