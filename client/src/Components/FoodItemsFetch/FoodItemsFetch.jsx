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
      <button onClick={()=>setCount(prev=>prev-1)}><FaMinus /></button>
      {count}
      <button onClick={()=>setCount(prev=>prev+1)}><IoMdAdd /></button>

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