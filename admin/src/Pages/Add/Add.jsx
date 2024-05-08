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
      <form onSubmit={onSubmitHandle} className='text-white mt-[-12rem]'>
        <div className='text-center'>
          <h1 className='cursor-pointer font-bold text-2xl'>Upload Image</h1>
        </div>
        <div>
          <div className='justify-center flex'>
            <img className='mt-3 w-[10rem]' src={file ? file : upload} alt="" />
          </div>
          <div className='mt-[-2rem] flex justify-center'>
            <input onChange={handlchange} className='mt-[3rem] ml-[5rem]' type="file" name="imagefile" />
          </div>
        </div>
        <div className='justify-center flex'>
          <label className='mt-5 text-lg font-bold' htmlFor="">Product Name</label>
          <div>
            <input onChange={OnChangeHandle} value={data.name} className='mt-5 ml-3 pl-3 h-[2rem] w-[19rem] border' type="text" name='name' placeholder='Product Type' />
          </div>
        </div>
        <div className='ml-[-3rem] justify-center flex'>
          <label className='mt-5 text-lg font-bold' htmlFor="">Product Description</label>
          <textarea onChange={OnChangeHandle} value={data.description} className=' mt-5 ml-3 pt-3 pl-2 w-[19rem] border resize-none' name="description" rows={6} placeholder='Write Down' id=""></textarea>
        </div>
        <div className='mr-[14.5rem] justify-center flex'>
          <label className='mt-5 text-lg font-bold' htmlFor="">Product Category</label>
          <select onChange={OnChangeHandle} className='mt-5 ml-3 border' name="category" >
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
        <div className='mt-[-1.9rem] ml-[13.5rem] justify-center flex'>
          <label className='text-lg font-bold' htmlFor="">Price</label>
          <input onChange={OnChangeHandle} value={data.price} className='ml-2 pl-2 border h-[2rem] w-[6rem]' type="number" name='price' placeholder='Rs. 400' />
        </div>
        <div className='ml-[5rem] justify-center flex'>
          <button className='mt-5 hover:opacity-80 bg-blue-500 rounded-md h-[2rem] w-[8rem] font-bold text-lg'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Add