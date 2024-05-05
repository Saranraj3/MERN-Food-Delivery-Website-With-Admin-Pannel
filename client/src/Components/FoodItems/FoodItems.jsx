import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import FoodItemsFetch from '../FoodItemsFetch/FoodItemsFetch'

function FoodItems({ category }) {
  const { Food_List } = useContext(Context)
  return (
    <div className='text-white overflow-x-hidden m-5 mt-[3rem] '>
      <h1 className='cursor-pointer ml-5 text-xl font-Arimo font-bold'>You'r Favourite Food Items </h1>
      <div className='gap-[1rem] mt-[2rem] grid grid-cols-4 justify-center flex-wrap'>
        {Food_List.map((item, index) => {
          { console.log(category, item.category); }
          if (category === 'All' || category === item.category) {
            return <FoodItemsFetch key={index} id={item.id} image={item.image} name={item.name} description={item.description} price={item.price} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodItems


