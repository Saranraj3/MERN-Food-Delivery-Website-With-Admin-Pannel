import React, { useState } from 'react'
import FoodMenu from '../../Components/FoodMenu/FoodMenu';
import FoodItems from '../../Components/FoodItems/FoodItems';

function Home() {
    const [category,setCategory] = useState('All');
    return (
        <div>
            <FoodMenu category={category} setCategory={setCategory}  />
            <FoodItems category={category}/>
        </div>
    )
}

export default Home;