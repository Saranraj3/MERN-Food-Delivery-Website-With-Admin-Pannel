import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className='text-white'>
      <Link to='/add'><div className='sm:mt-[1rem] md:mt-[3rem] ml-5 flex '>
        <IoMdAddCircle className='size-[2rem]' />
        <h1 className='sm:invisible md:visible mt-1 ml-2 text-xl font-bold hover:text-blue-500'>Add</h1>
      </div></Link>
      <Link to='/list'><div className='mt-[2rem] ml-5 flex'>
        <FaClipboardList className='size-[2rem]' />
        <h1 className='sm:invisible md:visible mt-1 ml-2 text-xl font-bold hover:text-blue-500'>List</h1>
      </div></Link>
      <Link to='/order'><div className='mt-[2rem] ml-5 flex'>
        <FaBoxArchive className='size-[2rem]' />
        <h1 className='sm:invisible md:visible mt-1 ml-2 text-xl font-bold hover:text-blue-500'>Order</h1>
      </div></Link>
      <p className="sm:mt-[-10.9rem] sm:ml-[4rem] md:mt-[-13rem] md:ml-[10rem] fixed inline-block h-[30.3rem] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white"></p>
    </div>
  )
}

export default Sidebar