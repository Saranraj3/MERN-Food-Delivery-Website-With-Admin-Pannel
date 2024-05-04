import React, { useState } from 'react'
import FoodMenu from '../../Components/FoodMenu/FoodMenu';
import FoodItems from '../../Components/FoodItems/FoodItems';
import Banner from '../../Components/Banner/Banner';

function Home() {
    const [category,setCategory] = useState('All');
    return (
        <div>
            <Banner/>
            <FoodMenu category={category} setCategory={setCategory}  />
            <FoodItems category={category}/>
        </div>
    )
}

export default Home;