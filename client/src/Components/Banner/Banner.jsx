import React from 'react';
import banner from '../../Assets/Banner/banner.jpg';

function Banner() {
    return (
        <div className='mt-[2rem]'>
            <img className='ml-[10rem] rounded-3xl h-[28rem] w-scree relative bg-cover ' src={banner} alt="" />
            <div className='absolute ml-[29rem] text-center'>
                <h1 className='mt-[-20rem]  text-lg'>Order and Eat You'r Favorite Foods All Ways Foody</h1>
                <p className='mt-[2rem] max-w-[30rem] text-sm'>What is online delivery? Online food ordering is the process of placing a meal order through a website or app from a nearby restaurant or food cooperative. Many of them allow clients to maintain accounts with them in order to make regular ordering easier, much like ordering consumer products online.</p>
            </div>
        </div>
    )
}

export default Banner