import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import FoodItemsFetch from '../FoodItemsFetch/FoodItemsFetch'

function FoodItems() {
    const {Food_List} = useContext(Context)
  return (
    <div className='overflow-x-hidden xl:mt-[-3rem] lg:m-[5rem]'>
        <h1>You'r Favourite Food Items </h1>
        <div className=' md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 flex justify-center flex-wrap'>
            {Food_List.map((item,index) => {
                return <FoodItemsFetch key={index} image={item.image} name={item.name} description={item.description} price={item.price} />
            })}
        </div>
    </div>
  )
}

export default FoodItems