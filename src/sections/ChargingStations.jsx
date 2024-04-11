import React from 'react'
import image from '../images/Gemini_Generated_Image_d1948sd1948sd194.jpeg'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function ChargingStations() {

  useEffect(() => {
    AOS.init();
    }, [])

  return (
    <div id='charging'>
        <div className='max-w-[1240px] w-full mx-auto py-20 px-6 md:grid md:grid-cols-2'>
        <img  data-aos='fade-up-right' data-aos-duration='1000' src={image} className='w-[400px] h-[400px] mx-auto' />
        <div  data-aos='fade-up-left' data-aos-duration='1000'>
          <h2 className='text-4xl font-semi-bold bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text'>
            The Charging Infrastructure
          </h2>
          <p className='mt-4 leading-10 text-justify'>
              PPEM is committed to expanding Nigeria's electric vehicle charging infrastructure.
                Over the next three years, we plan to deploy 10,000 charging stations across the
                country, ensuring convenient and reliable access to charging facilities for EV
                owners. We invite property owners to partner with us in hosting charging stations
                to maximize convenience and promote EV adoption.
          </p>

        </div>
        </div>
    </div>
  )
}

export default ChargingStations