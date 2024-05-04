import React, { useContext, useState } from 'react'
import { GrStar } from "react-icons/gr";
import { RiStarLine } from "react-icons/ri";
import { LuIndianRupee } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { Context } from '../../Context/Context';

function FoodItemsFetch({ image, name, description, price }) {
  const [count, setCount] = useState(0)
  const {cartItems,AddToCart, RemoveFromCart} = useContext(Context);


  return (
    <div>
      <img className='w-[100%] rounded-lg' src={image} alt="" />
      {!cartItems[id]
        ? <button onClick={() => AddToCart(id)}><FaMinus className='bg-white size-5 text-black' /></button>
        : <div>
          <button onClick={() => RemoveFromCart(id)}><FaMinus className='bg-white size-5 text-black' /></button>
          <p className='bg-white text-black'>{cartItems[id]}</p>
          <button onClick={() => AddToCart(id)}><IoMdAdd className='bg-white size-5 text-black' /></button>
        </div>
      }
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