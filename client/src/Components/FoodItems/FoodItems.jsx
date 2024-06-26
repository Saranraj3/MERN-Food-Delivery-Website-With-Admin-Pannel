import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import FoodItemsFetch from '../FoodItemsFetch/FoodItemsFetch'

function FoodItems({ category }) {
  const { Food_List } = useContext(Context)
  return (
    <div className='sm:mt-[2rem] md:mt-[3rem] m-5 text-white overflow-x-hidden'>
      <h1 className='sm:text-lg md:text-xl lg:text-2xl cursor-pointer text-center font-sedan font-bold'>You'r Favourite Food Items </h1>
      <div className='md:gap-[1rem] md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-5 mt-[2rem] justify-center'>
        {Food_List.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return <FoodItemsFetch key={index} id={item.id} image={item.image} name={item.name} description={item.description} price={item.price} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodItems


