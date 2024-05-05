import React, { useContext } from 'react'
import { GrStar } from "react-icons/gr";
import { RiStarLine } from "react-icons/ri";
import { LuIndianRupee } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { Context } from '../../Context/Context';

function FoodItemsFetch({ id, image, name, description, price }) {
  const { cartItems, AddToCart, RemoveFromCart } = useContext(Context);


  return (
    <div>
      <img className='sm:mt-3 cursor-pointer w-[100%] rounded-lg' src={image} alt="" />
      {!cartItems[id]
        ? <button onClick={() => AddToCart(id)}><IoMdAdd className='cursor-pointer mt-3 bg-white rounded-xl size-5 text-black' /></button>
        : <div className='flex'>
          <button onClick={() => RemoveFromCart(id)}><FaMinus className='cursor-pointer bg-white rounded-xl size-5 text-black' /></button>
          <p className='cursor-pointer mt-1 pt-[-1rem] text-center bg-white w-[2rem] rounded-xl text-black'>{cartItems[id]}</p>
          <button onClick={() => AddToCart(id)}><IoMdAdd className='cursor-pointer bg-white rounded-xl size-5 text-black' /></button>
        </div>
      }
      <h1 className='cursor-pointer'>{name}</h1>
      <p className='cursor-pointer flex text-orange-400'>
        <GrStar />
        <GrStar />
        <GrStar />
        <GrStar />
        <RiStarLine />
      </p>
      <p className='cursor-pointer'>{description}</p>
      <p className='flex cursor-pointer'><LuIndianRupee className='mt-1' />{price}</p>
    </div>
  )
}

export default FoodItemsFetch