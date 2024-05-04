import React, { useState } from 'react'
import { GrStar } from "react-icons/gr";
import { RiStarLine } from "react-icons/ri";
import { LuIndianRupee } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

function FoodItemsFetch({ image, name, description, price }) {
  const [count, setCount] = useState(0)


  return (
    <div>
      <img className='w-[100%] rounded-lg' src={image} alt="" />
      <div className='bg-white rounded-xl justify-center w-[4rem] mt-2 flex'>
      <button onClick={()=>setCount(prev=>prev-1)}><FaMinus className='bg-white size-5 text-black'/></button>
       <p className='bg-white text-black'>{count}</p>
      <button onClick={()=>setCount(prev=>prev+1)}><IoMdAdd className='bg-white size-5 text-black'/></button>
      </div>
      <h1>{name}</h1>
      <p className='flex text-orange-400'>
        <GrStar />
        <GrStar />
        <GrStar />
        <GrStar />
        <RiStarLine />
      </p>
      <p>{description}</p>
      <p className='flex'><LuIndianRupee className='mt-1' />{price}</p>
    </div>
  )
}

export default FoodItemsFetch