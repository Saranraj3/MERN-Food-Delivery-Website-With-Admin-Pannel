import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import FoodItemsFetch from '../FoodItemsFetch/FoodItemsFetch'

function FoodItems() {
  const { Food_List } = useContext(Context)
  return (
    <div className='text-white overflow-x-hidden m-5 mt-[3rem] '>
      <h1 className='ml-5 text-xl font-Arimo font-bold'>You'r Favourite Food Items </h1>
      <div className='gap-[1rem] mt-[2rem] grid grid-cols-4 justify-center flex-wrap'>
        {Food_List.map((item, index) => {
          return <FoodItemsFetch key={index} image={item.image} name={item.name} description={item.description} price={item.price} />
        })}
      </div>
    </div>
  )
}

export default FoodItems