import React from 'react'
import menu from '../../Assets/FoodMenu'

function FoodMenu() {
    return (
        <div className='text-white'>
            <h1 className='mt-[2rem] ml-5 text-2xl font-bold font-sedan'>Explore Our Incredible Menu </h1>
            <p className='mt-5 ml-5 text-lg font-Arimo '>Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming and hihgly pleasant to the taste.</p>
            <div className='mt-[2rem] justify-center flex gap-[3rem]'>
                {menu.map((item, index) => {
                    return (
                        <div key={index}>
                            <img className='rounded-full h-[5rem]' src={item.image} alt="" />
                            <h1>{item.name}</h1>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default FoodMenu