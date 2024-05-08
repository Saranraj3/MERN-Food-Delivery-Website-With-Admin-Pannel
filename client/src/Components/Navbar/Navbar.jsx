import React, { useState } from 'react'
import { SiIfood } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Navbar() {
    const [login, setLogin] = useState(false);
    const [nav, setNav] = useState(true);

    const HandleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='sm:h-[2rem] lg:h-[3rem] sticky top-0 z-50 ' id='home'>
            <Link to='/'><span className='flex'>
                <SiIfood className='sm:mt-1 sm:ml-5 sm:size-[1.8rem] lg:mt-2 cursor-pointer text-blue-500' />
                <h1 className='sm:text-2xl sm:ml-2 md:ml-2 md:text-3xl lg:mt-1 cursor-pointer font-sedan font-bold text-blue-500'>Foody</h1>
            </span></Link>
            <div onClick={HandleNav} className='sm:mt-1 sm:mr-3 md:invisible flex justify-end'>
                {!nav ? <IoMdClose className='sm:mt-[-2rem] flex text-white size-6 ' /> : <IoMdMenu className='sm:mt-[-2rem] flex text-white size-6 ' />}
            </div>
            <div className={!nav ? 'text-white fixed sm:left-0 sm:top-0 sm:w-[60%] sm:h-[15rem] sm:border-r border-r-gray-800 ease-in-out duration-200 sm:visible lg:invisible' : 'fixed left-[-100%]'}>
                <ul className='lg:mt-[-2rem] lg:gap-[5rem] font-bold font-serif text-white cursor-pointer '>
                    <Link to='/' className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>Home</Link>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>Menu</li>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>Service</li>
                    <li className='sm:mt-5 sm:border-b sm:border-gray-800 sm:ml-3 hover:text-blue-500'>About</li>
                    <Link to='/cart'><IoCartSharp className='sm:mt-5 ml-3 sm:size-[1.5rem] lg:size-[1.8rem] cursor-pointer hover:text-blue-500 ' /></Link>
                </ul>
            </div>
            <ul className='sm:invisible md:visible md:mt-[-2rem] md:gap-[2rem] lg:gap-[4rem] lg:text-lg xl:mr-[6rem] font-bold font-serif text-white cursor-pointer flex justify-center '>
                <a href='/' className='hover:text-blue-500'>Home</a>
                <a href='#menu' className='hover:text-blue-500'>Menu</a>
                <a href='#service' className='hover:text-blue-500'>Service</a>
                <a href='#about' className='hover:text-blue-500'>About</a>
            </ul>
            <ul className='sm:invisible md:visible md:mt-[-1.5rem] md:mr-[2rem] md:gap-[1rem] lg:gap-[3rem] lg:mt-[-1.8rem] xl:mr-[10rem] text-white flex justify-end'>
                <IoSearch className='sm:size-[1.5rem] lg:size-[1.8rem] cursor-pointer hover:text-blue-500 ' />
                <Link to='/cart'><IoCartSharp className='sm:size-[1.5rem] lg:size-[1.8rem] cursor-pointer hover:text-blue-500 ' /></Link>
                {!login ? <Link to='/login'><button onClick={() => setLogin(true)} className='h-[2rem] w-[5rem] font-bold rounded-md hover:opacity-80 bg-blue-500' >Signin</button></Link> : <MdAccountCircle className='sm:size-[1.5rem] lg:size-[1.8rem] cursor-pointer hover:text-blue-500 ' />}
                <div className='hidden z-10 mt-9 mr-[-3rem] border justify-center w-[8rem] h-[6rem] bg-black font-bold text-lg absolute'>
                    <p className='flex mt-3 ml-5 gap-2 cursor-pointer hover:text-blue-500'><FaBoxArchive className='mt-1 size-[1.3rem]' />Order</p>
                    <p className='flex mt-3 ml-5 gap-2 cursor-pointer hover:text-blue-500'><GrLogout className='mt-1 size-[1.3rem]' />Logout</p>
                </div>
            </ul>
        </div>
    )
}

export default Navbar