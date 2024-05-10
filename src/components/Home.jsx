import React from 'react'
import Delivery from '../assets/delivery.png'
import HeroBg from '../assets/heroBg.png'
import { heroData } from '../utils/data'
import { motion } from 'framer-motion'


const Home = () => {
    
    return (
        <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex-1 flex flex-col lg:items-start md:items-start items-center justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 rounded-full py-1 px-4'>
                    <p className='text-base text-orange-400 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={Delivery} className='w-full h-full object-contain bg-white' alt="Bike Delivery" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor lg:leading-tight text-center lg:text-start md:text-start'>The Fastest Delivery in{" "}
                    <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatum itaque placeat fugiat consequatur. Temporibus, saepe facere magni maxime at dolorem minima deserunt.
                </p>

                <motion.button 
                whileTap={{scale: 0.75}}
                type="button" className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</motion.button>
            </div>

            <div className='py-2 flex-1 flex items-center relative '>
                <img className='ml-auto w-full h-420 lg:w-auto lg:h-650' src={HeroBg} alt='heroBg' />


                {/* lg:px-32 need to fix responsiveness */}
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
                    {
                        heroData && heroData.map(data => (
                            <div key={data.id} className="lg:w-[190] py-4 px-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                                <img className='w-20 lg:w-40 lg:-mt-20 -mt-10' src={data.imgSrc} alt="Ice-cream-1" />
                                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{data.name}</p>
                                <p className='text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{data.desc}</p>
                                <p className='text-[12px] lg:text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{data.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Home

