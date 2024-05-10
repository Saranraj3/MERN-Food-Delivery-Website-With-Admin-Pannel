import React, { useContext } from 'react';
import { GrStar } from "react-icons/gr";
import { RiStarLine } from "react-icons/ri";
import { LuIndianRupee } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { Context } from '../../Context/Context';

function FoodItemsFetch({ id, image, name, description, price }) {
  const { cartItems, AddToCart, RemoveFromCart, url } = useContext(Context);

  return (
    <div id='service'>
      <img className='sm:mt-3 cursor-pointer w-[100%] rounded-lg' src={url + "/images/" + image} alt="" />
      {!cartItems[id]
        ? <button onClick={() => AddToCart(id)} className='mt-4 h-[2rem] w-[8rem] rounded-md bg-blue-900'>ADD TO CART</button>
        : <button onClick={() => RemoveFromCart(id)} className='mt-4 h-[2rem] w-[8rem] rounded-md bg-blue-900 '>REMOVE CART</button>
      }
      <h1 className='mt-2 cursor-pointer'>{name}</h1>
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
  );
}

export default FoodItemsFetch;
