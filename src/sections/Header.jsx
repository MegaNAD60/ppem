import React from 'react'
import image from '../images/Gemini_Generated_Image_iypdz3iypdz3iypd.jpeg'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Circle from '../components/Circle';
import { motion } from 'framer-motion';

function Header() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='home' className='text-[white] -mt-[100px]'>

        <div className="bg-[rgba(46,44,44,0.4)] w-full h-screen relative" >
            <img src={image} className='w-full h-full object-cover absolute mix-blend-overlay' />
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
              }}
              initial="hidden"
              animate="visible"
              transition={{duration: 0.5, delay: 0.25}}
              className='max-w-[1240px] w-full md:w-[80%] mx-auto'>
              <h1 className='text-white font-bold text-3xl text-center md:text-left md:text-5xl pt-60'>
                The Presidential Program on Electric Mobility (PPEM)
              </h1>
              <h2>We bring you news about our daily progress.</h2>
            </motion.div>
        </div>



    </div>
  )
}

export default Header