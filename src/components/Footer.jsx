import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';
import { RiInstagramFill, RiSnapchatFill } from 'react-icons/ri';


const Footer = () => {

    const [email, setEmail] = useState('');

    const icons = [FaFacebookF, FaYoutube, IoLogoTwitter, RiInstagramFill, RiSnapchatFill];


    return (
        <div className='w-full border-t-2 py-8 px-10 flex gap-10 lg:gap-20 flex-wrap lg:justify-center justify-start'>


            <div className='flex flex-col'>
                <div>
                    <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
                        City Restaurant
                    </p>
                </div>
                <input
                    className='w-70 text-base bg-transparent outline-none border-b-[1px]  border-gray-300 text-textColor placeholder:text-gray-400 mt-10'
                    type="text"
                    required
                    value={email}
                    placeholder='Enter Your Email*'
                    onChange={(e) => setEmail(e.target.value)} />

                <motion.button
                    whileTap={{ scale: 0.75 }}
                    type="button" className='mt-6 bg-gradient-to-br from-orange-400 to-orange-500 w-28 px-4 py-2 rounded-full hover:shadow-lg transition-all ease-in-out duration-100 h-8 text-gray-200 hover:text-black flex items-center justify-center cursor-pointer'>Subscribe</motion.button>
                <p className='mt-8 text-textColor text-sm'>Get monthly updates and free resources.</p>
            </div>


            <div className='flex flex-col md:mt-6 lg:mt-6 '>
                <p className='text-lg font-semibold tracking-tighter mb-4'>CONTACT US</p>
                <div>
                    {
                        ["Phone: +1 0000 0000 001", "Email: yourmail@example.com", "Address:1234 Street Name City, AA 99999"].map((items, index) =>
                            <p key={index}
                                className='flex items-evenly my-1 text-textColor text-sm'>{items}
                            </p>)
                    }
                </div>

                <div className='flex gap-2 items-center mt-4 '>
                    {
                        icons.map((ICON, index) => (
                            <span key={index} className='border-2 border-gray-500 p-1 rounded-full cursor-pointer hover:text-white hover:bg-gray-900'>
                                <ICON />
                            </span>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col md:mt-6 lg:mt-6'>
            <p className='text-lg font-semibold tracking-tighter mb-4'>RECENT NEWS</p>
                <div>
                    {
                        ["About Us", "Services", "Get In Touch"].map((items, index) =>
                            <p key={index}
                                className='text-sm flex items-start my-1 text-textColor cursor-pointer'>{items}
                            </p>)
                    }
                </div>
            </div>


            <div className='hidden lg:flex flex-col mt-6'>
            <p className='text-lg font-semibold tracking-tighter mb-4'>LINKS</p>
                <div>
                 <p className='flex my-1 text-textColor cursor-pointer text-sm'>Website Builder</p>
                 <img 
                 className='w-28 my-2 cursor-pointer'
                 src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="Apple Store" />
                 <img 
                 className='w-28 my-2 cursor-pointer'
                 src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Google Play" />
                </div>
            </div>

        </div>
    )
}

export default Footer