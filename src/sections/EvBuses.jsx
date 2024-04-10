import React from 'react'
import image from '../images/Gemini_Generated_Image_qrdgtzqrdgtzqrdg.jpeg'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function EvBuses() {

  useEffect(() => {
    AOS.init();
    }, [])

  return (
    <div>
        <div className='max-w-[1240px] w-full mx-auto px-6 py-16 md:grid md:grid-cols-2'>
          <div data-aos='fade-up-right' data-aos-duration='1000'>
            <h2 className='text-4xl font-semi-bold bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text'>EV Buses</h2>
            <p className='mt-4 leading-8'>
            In a bold response to challenges triggered by subsidy removal, the Nigerian Government
            has embarked on an ambitious project to introduce a pilot fleet of 100 electric buses
            for mass transit. This strategic shift towards electric buses not only offers a cleaner
            and more efficient alternative but also positions Nigeria as a leader in electric vehicle
            (EV) adoption across the African continent..
            </p>
            <p className='mt-4 leading-8'>
            The impending deployment of these 100 e-buses will serve as a tangible demonstration,
            showcasing the practicality and benefits of this sustainable transportation solution.
            This pilot program sets the stage for a much larger scheme, with plans for expansive
            adoption in major cities nationwide. Advantages of electric buses include significantly
            lower operating costs, reduced air and noise pollution, enhanced energy security, and
            providing a cheaper means to move people, ultimately contributing to a greener and more
            sustainable transportation ecosystem.
            </p>
          </div>
          <img data-aos='fade-up-left' data-aos-duration='1000' src={image} className='w-[400px] h-[400px] mx-auto' />
        </div>
    </div>
  )
}

export default EvBuses