import React from 'react'
import Banner from '../../Components/Banner/Banner'
import FoodMenu from '../../Components/FoodMenu/FoodMenu';
import FoodItems from '../../Components/FoodItems/FoodItems';

function Home() {
    return (
        <div>
            <Banner />
            <FoodMenu />
            <FoodItems/>
        </div>
    )
}

export default Home;