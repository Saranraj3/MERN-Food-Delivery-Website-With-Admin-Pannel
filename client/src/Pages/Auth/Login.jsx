import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../Common';
import { toast } from 'react-toastify';

function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const HandleOnChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            };
        });
    };

    const HandleOnSubmit = async (e) => {
        e.preventDefault()
        const dataresponse = await fetch(API.Login.url, {
            method: API.Login.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataAPI = await dataresponse.json()
        if (dataAPI.success) {
            toast.success(dataAPI.message)
            navigate('/')
        }
        if (dataAPI.error) {
            toast.error(dataAPI.message)
        }
    }

    return (
        <div className='mt-[3rem] text-white'>
            <form onSubmit={HandleOnSubmit} action="">
                <div>
                    <h1 className='xl:mt-5 font-bold font-Arimo text-center text-2xl '>Login</h1>
                </div>
                <div>
                    <div className='mt-4 h-[2.3rem] flex justify-center'>
                        <input className='border pl-2' type="password" placeholder='Password' name='password' value={data.password} onChange={HandleOnChange} />
                    </div>
                    <div className='mt-4 h-[2.3rem] flex justify-center'>
                        <input className='border pl-2' type="email" placeholder='Email' name='email' value={data.email} onChange={HandleOnChange} />
                    </div>
                </div>
                <div className='mt-4 flex justify-center text-lg font-bold'>
                    <button className='hover:opacity-80 bg-blue-500 h-[2.3rem] w-[16rem]'>Submit</button>
                </div>
                <div className='mt-4 text-center text-[16px] font-Arimo font-bold'>
                    <h1>You Don't Have an Account Then <Link className='text-red-500 ml-1' to='/signup'>Signup</Link> </h1>
                </div>
            </form>
        </div>
    )
}

export default Login