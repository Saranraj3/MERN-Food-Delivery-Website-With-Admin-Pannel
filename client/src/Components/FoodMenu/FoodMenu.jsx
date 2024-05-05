import React from 'react';
import menu from '../../Assets/FoodMenu';

const FoodMenu = ({ category, setCategory }) => {
    return (
        <div className='sm:m-2 sm:mt-5 md:mt-[2rem] lg:mt-[3rem] text-white '>
            <h1 className='sm:text-lg md:text-2xl cursor-pointer text-center font-bold font-sedan'>Explore Our Incredible Menu </h1>
            <div className='sm:mt-5 sm:gap-2 sm:grid sm:grid-cols-3 sm:justify-between sm:items-center md:m-5 md:gird md:grid-cols-6 md:mt-[2rem] md:gap-[3rem] lg:grid lg:grid-cols-9 lg:gap-3 xl:gap-5'>
                {menu.map((item, index) => (
                    <div onClick={() => setCategory(prev => prev === item.name ? "All" : item.name)} key={index}>
                        <img className={`md:h-[5rem] xl:h-[8rem] cursor-pointer rounded-full hover: ${category === item.name ? 'active' : ''}`} src={item.image} alt="" />
                        <h1 className='sm:mt-1 md:mt-1 xl:text-center cursor-pointer font-bold font-Arimo text-center'>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodMenu;
