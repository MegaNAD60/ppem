import React from 'react'
import image from '../images/Gemini_Generated_Image_aom68haom68haom6.jpeg'
import environment from '../images/icons/eco.png'
import evs from '../images/icons/evs-g.png'
import framework from '../images/icons/fw.png'

import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { HashLink as Link } from 'react-router-hash-link';
import { motion, useScroll, useTransform } from 'framer-motion';

function About() {

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 4],)


    useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div id='about' className=''>
        <div className='max-w-[1240px] mx-auto w-full px-6 py-20'>
            <h2 className='mx-auto text-4xl font-bold bg-gradient-to-bl from-[#2dac57] to-[#329653] inline-block text-transparent bg-clip-text'>About Us</h2>
            <h1 data-aos='fade-up' data-aos-duration='1000' className='w-full mx-auto text-4xl font-semi-bold my-4'>Transforming Nigeria's Tansportation Landscape With Electric Mobility</h1>
            <p data-aos='fade-up' data-aos-duration='1000' className='my-2 text-justify'>
                The Presidential Program on Electric Mobility (PPEM) is a groundbreaking initiative
                aimed at revolutionizing Nigeria's transportation sector, envisioned by President
                Bola Ahmed Tinubu and led by the Presidential Sustainable Mobility Initiative in
                Nigeria. This visionary program aims to accelerate electric vehicle (EV) adoption,
                stimulate the local automotive manufacturing sector, reduce import dependency,
                create substantial employment opportunities, and contribute to a resilient and eco-friendly
                automotive future for Nigeria. Focused on electric mobility, it addresses
                challenges stemming from fuel subsidy removal, providing relief to citizens and
                combating climate change. This forward-thinking initiative reflects Nigeria's
                commitment to environmental responsibility, positioning the country as a leader in
                adopting greener tansportation solutions and paving the way for a more sustainable future.
            </p>
        </div>

        <motion.div style={{scale}} className="bg-[rgba(46,44,44,0.4)] w-full h-96 relative my-6" >
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
              <h3 className='text-white font-medium text-3xl text-center md:text-3xl pt-[30%] md:pt-[15%]'>
                Build An Eco-Friendly Environment
              </h3>
              <div className='w-[50%] md:w-[30%] mt-[60px] md:mt-[80px] mx-auto grid grid-cols-3 gap-4'>

              <div className=''>
                <img src={evs} className='w-10 h-10 md:w-20 md:h-20' />
              </div>
              <div className=''>
                <img src={environment} className='w-10 h-10 md:w-20 md:h-20' />
              </div>
              <div className=''>
                <img src={framework} className='w-10 h-10 md:w-20 md:h-20' />
              </div>

              </div>
            </motion.div>
        </motion.div>


    </div>
  )
}

export default About

