import React, { useEffect, useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/useStateValue';
import { GiBowlOfRice, GiChickenOven, GiFruitBowl, GiHotMeal, GiTropicalFish } from 'react-icons/gi';
import { IoIosIceCream } from 'react-icons/io';
import { RiDrinks2Fill } from 'react-icons/ri';

const MenuContainer = () => {

    const [filter, setFilter] = useState('chicken');
    const[{foodItems}, dispatch] = useStateValue();

    const icons = [GiChickenOven,GiBowlOfRice,GiHotMeal,GiTropicalFish,IoIosIceCream,RiDrinks2Fill,GiFruitBowl];

    return (
        <section className='w-full my-6' id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>Our Hot Dishes
                </p>

                <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
                    {categories && categories.map((category) => (
                        <motion.div
                            whileTap={{scale: 0.9}}
                            key={category.id}
                            className={`group ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-white'} w-24 h-28 min-w-[98px] cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg`}
                            onClick={()=> setFilter(category.urlParamName)}>

                            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? 'bg-white' : 'bg-cartNumBg '} group-hover:bg-white flex items-center justify-center`}>
                                <IoFastFood className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg'`} />
                            </div>
                           

                            <p className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor'}  group-hover:text-white`}>{category.name}</p>
                        </motion.div>
                    ))}
                </div>


                <div className='w-full '>
                    <RowContainer flag={false} data={foodItems?.filter(n => n.category == filter)} />
                </div>
            </div>
        </section>
    )
}

export default MenuContainer