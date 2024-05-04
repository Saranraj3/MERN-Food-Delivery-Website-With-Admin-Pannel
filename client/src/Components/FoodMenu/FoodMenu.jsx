import React from 'react';
import menu from '../../Assets/FoodMenu';

const FoodMenu = ({ category, setCategory }) => {
    return (
        <div className='text-white mt-[4rem]'>
            <h1 className='text-center text-2xl font-bold font-sedan'>Explore Our Incredible Menu </h1>
            <div className='mt-[3rem] justify-center flex gap-[3rem]'>
                {menu.map((item, index) => (
                    <div onClick={() => setCategory(prev => prev === item.name ? "All" : item.name)} key={index}>
                        <img className={`rounded-full hover:rotate-45 h-[5rem] ${category === item.name ? 'active' : ''}`} src={item.image} alt="" />
                        <h1 className='mt-1 font-bold font-Arimo text-center'>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodMenu;
