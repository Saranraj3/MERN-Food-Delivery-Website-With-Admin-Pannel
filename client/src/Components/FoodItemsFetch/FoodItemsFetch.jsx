import React from 'react'

function FoodItemsFetch({image,name,description,price}) {
  return (
    <div className=' w-[100%] mt-2'>
        <img className='h-' src={image} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export default FoodItemsFetch