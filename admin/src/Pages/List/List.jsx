import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { IoMdClose } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";

function List({ url }) {
  const [list, setList] = useState([]);

  const FetchProduct = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error(error)
    }
  }

  useEffect(() => {
    FetchProduct()
  }, [])

  const RemoveFood = async (foodid) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodid });
    await FetchProduct();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error('Error')
    }
  }

  return (
    <div className='mt-[-11.5rem] text-white text-center'>
      <div className='sm:text-xs sm:gap-[1rem] md:text-xl md:gap-[5rem] font-bold justify-center flex '>
        <p className='cursor-pointer'>Product</p>
        <p className='cursor-pointer'>Name</p>
        <p className='cursor-pointer'>Category</p>
        <p className='cursor-pointer'>Price</p>
        <p className='cursor-pointer'>Remove</p>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index} className='sm:gap-2 md:mt-[2rem] md:gap-[5rem] md:text-lg flex justify-center'>
            <img className='sm:h-[3rem] md:ml-[-3rem] md:h-[4rem]' src={`${url}/images/` + item.image} alt="" />
            <p className='mt-3 cursor-pointer'>{item.name}</p>
            <p className='mt-3 cursor-pointer'>{item.category}</p>
            <p className='mt-3 cursor-pointer flex'><LuIndianRupee className='mt-1' /> {item.price}</p>
            <IoMdClose onClick={() => RemoveFood(item._id)} className='mt-3 ml-[2rem] cursor-pointer size-[1.3rem]' />
          </div>
        )
      })}
    </div>
  )
}
export default List