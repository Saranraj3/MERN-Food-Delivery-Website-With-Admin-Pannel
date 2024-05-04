import React from 'react'
import FoodMenu from '../../Components/FoodMenu/FoodMenu';
import FoodItems from '../../Components/FoodItems/FoodItems';

function Home() {
    return (
        <div>
            <FoodMenu />
            <FoodItems/>
        </div>
    )
}

export default Home;