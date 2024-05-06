import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { Context } from '../../Context/Context'
import { LuIndianRupee } from "react-icons/lu";

function Cart() {
  const navigate = useNavigate();

  const { cartItems, Food_List, RemoveFromCart } = useContext(Context);
  return (
    <div className='sm:mt-5 md:mt-[4rem] text-white'>
      <div>
        <div className='sm:m-1 sm:text-sm md:m-[1rem] md:text-lg font-bold flex justify-between'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='sm:mt-[-20px]' />
        {Food_List.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className='sm:h-[2rem] sm:m-[0.3rem] md:h-[3rem] md:m-[1rem] lg:h-[4rem] flex justify-between '>
                  <img src={item.image} alt="" />
                  <h1 className='sm:text-sm md:mt-5 md:ml-[-5rem] lg:ml-[-9rem] '>{item.name}</h1>
                  <p className='sm:text-sm md:mt-5 md:ml-[-5rem] lg:ml-[-3rem] flex'><LuIndianRupee className='mt-1' />{item.price}</p>
                  <p className='sm:text-sm md:mt-5'>{cartItems[item.id]}</p>
                  <p className='sm:text-sm md:mt-5 flex'><LuIndianRupee className='mt-1' />{item.price * cartItems[item.id]}</p>
                  <IoMdClose onClick={() => RemoveFromCart(item.id)} className='sm:text-sm md:mt-5' />
                </div>
                <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700' />
              </div>
            )
          }
        })}
      </div>
      <div className='sm:mt-5 sm:ml-3 md:mt-[4rem] md:ml-5 '>
        <h1 className='sm:text-xl md:text-2xl font-bold font-Arimo'>Cart Totals</h1>
        <div className='flex'>
          <p className='sm:mt-2 sm:text-base md:mt-5 md:text-lg font-Arimo'>Subtotal</p>
          <p className='sm:mt-2 sm:ml-[6rem] sm:text-base md:mt-5 md:ml-[12rem] md:text-lg '>{0}</p>
        </div>
        <div className='flex'>
          <p className='sm:mt-2 sm:text-base md:mt-5 md:text-lg font-Arimo'>Delivery Charge</p>
          <p className='sm:mt-2 sm:ml-[2.5rem] sm:text-base md:mt-5 md:ml-[8rem] md:text-lg'>{0}</p>
        </div>
        <div className='flex sm:mt-2 md:mt-5'>
          <p className='sm:text-xl font-bold font-Arimo '>Total</p>
          <p className='sm:ml-[6.7rem] sm:text-lg md:ml-[13.2rem]'>{0}</p>
        </div>
      </div>
      <button onClick={()=>navigate('/order')} className='sm:mt-5 sm:ml-3 sm:h-[2rem] sm:w-[10rem] sm:text-lg md:mt-10 md:ml-4 md:h-[2.5rem] md:w-[17rem] md:text-xl rounded-lg hover:opacity-80 font-bold font-Arimo bg-white text-black'>Checkout</button>
    </div>
  )
}

export default Cart