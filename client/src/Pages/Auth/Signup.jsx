import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className='mt-[3rem] text-white'>
            <form action="">
                <div>
                    <h1 className='xl:mt-5 font-bold font-Arimo text-center text-2xl '>Signup</h1>
                </div>
                <div>
                    <div className='mt-4 h-[2.3rem] flex justify-center'>
                        <input className='border pl-2' type="text" placeholder='Name' />
                    </div>
                    <div className='mt-4 h-[2.3rem] flex justify-center'>
                        <input className='border pl-2' type="email" placeholder='Email' />
                    </div>
                    <div className='mt-4 h-[2.3rem] flex justify-center'>
                        <input className='border pl-2' type="password" placeholder='Password' />
                    </div>
                </div>
                <div className='mt-4 flex justify-center text-lg font-bold'>
                    <button className='hover:opacity-80 bg-blue-500 h-[2.3rem] w-[16rem]'>Submit</button>
                </div>
                <div className='mt-4 text-center text-[16px] font-Arimo font-bold'>
                    <h1>Already Have an Account Then <Link className='text-red-500' to='/login'>Login</Link> </h1>
                </div>
            </form>
        </div>
    )
}

export default Signup