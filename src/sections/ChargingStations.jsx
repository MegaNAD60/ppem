import React from 'react'
import image from '../images/Gemini_Generated_Image_d1948sd1948sd194.jpeg'
import bus from '../images/Gemini_Generated_Image_qrdgtzqrdgtzqrdg.jpeg'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion, useScroll, useTransform, } from 'framer-motion'

function ChargingStations() {

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.2, 1], [0, 2.1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [-2, 2.1]);

  useEffect(() => {
    AOS.init();
    }, [])

  return (
    <div className='relative'>
      <motion.div style={{scale}} id='charging' className='bg-[#06061a] text-white sticky md:h-[100vh] top-0 rounded-3xl -z-10'>
          <div className='max-w-[1240px] w-full mx-auto py-20 px-10 md:px-20 md:grid md:grid-cols-2'>
            <div>
              <h2 className='text-4xl font-semi-bold bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text'>
                The Charging Infrastructure
              </h2>
              <p className='mt-4 leading-10 md:text-2xl text-justify'>
                  PPEM is committed to expanding Nigeria's electric vehicle charging infrastructure.
                  We invite property owners to partner with us in hosting charging stations
                    to maximize convenience and promote EV adoption.
              </p>

            </div>
            <img src={image} className='w-[300px] h-[300px] md:h-[400px] md:w-[400px] mx-auto' />

          </div>


      </motion.div>

          <motion.div style={{scale2}} id='ev-bus' className='bg-[#d36653] text-white rounded-3xl'>
            <div className='max-w-[1240px] w-full mx-auto px-6 py-20'>
              <div className=' md:grid md:grid-cols-2'>
                <h2 className='text-4xl md:text-6xl font-semi-bold bg-gradient-to-bl from-[#06061a] to-[#06061a] inline-block text-transparent bg-clip-text'>EV Buses</h2>
                <p className='mt-4 md:text-2xl leading-8 text-justify'>
                  PPEM is committed to adopting eletric buses for mass transit as the Nigerian Government
                has embarked on an ambitious project to introduce a pilot fleet of 100 electric buses
                for mass transit.
                </p>
              </div>
              <img src={bus} className='w-[600px] h-[400px] mt-10 mx-auto rounded-3xl' />
            </div>
          </motion.div>



    </div>
  )
}

export default ChargingStations