import React from 'react'
import menu from '../../Assets/FoodMenu'

function FoodMenu() {
    return (
        <div>
            <h1 className='mt-5 ml-5 text-lg font-bold'>Explore Our Incredible Menu </h1>
            <p className='m-3 ml-5 text-sm font-mono '>Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming and hihgly pleasant to the taste.</p>
            <div className='justify-center flex gap-[3rem]'>
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