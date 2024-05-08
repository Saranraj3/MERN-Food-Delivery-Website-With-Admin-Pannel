import React, { useState } from 'react';
import axios from 'axios';
import upload from '../../Assets/Random/upload.png';
import { toast } from 'react-toastify';

function Add() {

  const [file, setFile] = useState(false);
  const handlchange = (e) => {
    console.log(e.target.files)
    setFile(e.target.files[0])
  }

  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Meat'
  });

  const OnChangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('image', file)
    formData.append('price', Number(data.price))

    const response = await axios.post('http://localhost:5000/api/food/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Meat'
      })
      setFile(null)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitHandle} className='sm:mt-[-10rem] md:mt-[-12rem] text-white'>
        <div className='text-center'>
          <h1 className='sm:ml-5 sm:text-lg md:text-2xl cursor-pointer font-bold '>Upload Image</h1>
        </div>
        <div>
          <div className='justify-center flex'>
            <img className='sm:mt-3 sm:ml-5 sm:w-[6rem] md:mt-3 md:w-[10rem]' src={file ? file : upload} alt="" />
          </div>
          <div className='sm:mt-[-1.6rem] md:mt-[-2rem] flex justify-center'>
            <input onChange={handlchange} className='sm:mt-[2.5rem] sm:ml-[5rem] sm:text-xs md:mt-[3rem] ml-[5rem]' type="file" name="imagefile" />
          </div>
        </div>
        <div className='sm:mt-3 sm:ml-[5rem] justify-center flex'>
          <label className='sm:mt-1 sm:text-xs md:mt-5 md:text-lg font-bold' htmlFor="">Name</label>
          <div>
            <input onChange={OnChangeHandle} value={data.name} className='sm:ml-2 sm:w-[8rem] sm:h-[1.5rem] sm:text-xs md:mt-5 md:ml-3 md:h-[2rem] md:w-[19rem] pl-3 border' type="text" name='name' placeholder='Product Type' />
          </div>
        </div>
        <div className='sm:mt-4 sm:ml-[3rem] md:ml-[2rem] justify-center flex'>
          <label className='sm:text-xs md:mt-5 md:text-lg font-bold' htmlFor="">Description</label>
          <textarea onChange={OnChangeHandle} value={data.description} className='sm:ml-2 sm:pt-2 sm:w-[8rem] sm:h-[8rem] sm:text-xs md:mt-5 md:ml-3 md:w-[19rem] pt-3 pl-2 border resize-none' name="description" rows={6} placeholder='Write Down' id=""></textarea>
        </div>
        <div className='sm:mt-4 md:mr-[12rem] justify-center flex'>
          <label className='sm:text-xs md:mt-5 md:text-lg font-bold' htmlFor="">Category</label>
          <select onChange={OnChangeHandle} className='sm:ml-2 sm:text-xs sm:w-[4rem] md:mt-5 md:ml-3 border' name="category" >
            <option value="Meat">Meat</option>
            <option value="Biriyani">Biriyani</option>
            <option value="Fryed Rice">Fryed Rice</option>
            <option value="Cake">Cake</option>
            <option value="Noodles">Noodles</option>
            <option value="Burger">Burger</option>
            <option value="Dosa">Dosa</option>
            <option value="Pizza">Pizza</option>
            <option value="Puttu">Puttu</option>
            <option value="Pasta">Pasta</option>
            <option value="KFC">KFC</option>
          </select>
        </div>
        <div className='sm:mt-4 sm:ml-[1.5rem] md:mt-[-1.9rem] md:ml-[13.5rem] justify-center flex'>
          <label className='sm:text-xs md:text-lg font-bold' htmlFor="">Price</label>
          <input onChange={OnChangeHandle} value={data.price} className='sm:ml-2 sm:text-xs sm:w-[4rem] sm:h-[1rem] md:ml-2 pl-2 border md:h-[2rem] md:w-[6rem]' type="number" name='price' placeholder='Rs. 400' />
        </div>
        <div className='md:ml-[3rem] justify-center flex'>
          <button className='sm:mt-4 sm:ml-5 sm:text-xs sm:h-[1.5rem] sm:w-[5rem] md:mt-5 md:h-[2rem] md:w-[8rem] md:text-lg hover:opacity-80 bg-blue-500 rounded-md font-bold'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Add