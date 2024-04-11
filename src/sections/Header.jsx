import React from 'react'
import image from '../images/Gemini_Generated_Image_iypdz3iypdz3iypd.jpeg'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Circle from '../components/Circle';

function Header() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='home' className='text-[white] -mt-[100px]'>

        <div className="bg-[rgba(46,44,44,0.7)] w-full h-screen relative" >
            <img src={image} className='w-full h-full object-cover absolute mix-blend-overlay' />
            <div className='max-w-[1240px] w-full md:w-[80%] mx-auto'>
              <h1 className='text-white font-bold text-3xl text-center md:text-left md:text-5xl pt-60'>
                The Presidential Program on Electric Mobility (PPEM)
              </h1>
            </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='1000' className="card-wrapper max-w-[1240px] w-[90%] md:w-[50%] mx-auto p-4">

          <div className='card-content flex items-center justify-center'>
            <div>
              <h2 className='text-2xl font-medium'>The Electrification of Transport In Nigeria</h2>
              <p className='text-xl mt-2'>Accelarating into a Greener Future: Spearheading the Electrification of Transportation to Drive Sustainable Development and Foster Energy Independence Across Nigeria!</p>
            </div>
          </div>

        </div>

        <div data-aos='fade-up' data-aos-duration='1000' className="card-wrapper-2 max-w-[1240px] w-[90%] md:w-[50%] mx-auto p-4">

          <div className='card-content flex items-center justify-center'>
            <div>
              <h2 className='text-2xl font-medium'>Nationwide Deployment of Charging Stations</h2>
              <p className='text-xl mt-2'>In every charge lies a sparkof transformation. Join us in igniting a revolution in transportation, as we harness the power of electric mobility to drive posible change across Nigeria.opment and Foster Energy Independence Across Nigeria!</p>
            </div>
          </div>

        </div>

        <Circle />

    </div>
  )
}

export default Header