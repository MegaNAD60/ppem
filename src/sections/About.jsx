import React from 'react'
import image from '../images/Gemini_Generated_Image_rnaj7arnaj7arnaj.jpeg'

import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {

    useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='color'>
        <div className='max-w-[1240px] mx-auto w-full my-10 px-6 py-16'>
            <h2 className='w-full mx-auto text-xl font-medium'>About Us</h2>
            <h1 className='w-full mx-auto text-3xl font-semibold'>Transforming Nigeria's Tansportation Landscape With Electric Mobility</h1>
            <p>The Presidential Program on Electric Mobility (PPEM) is a groundbreaking initiative
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

        <div className="bg-[rgba(46,44,44,0.8)] w-full h-96 relative my-6" >
            <img src={image} className='w-full h-full object-cover absolute mix-blend-overlay' />
            <div data-aos='zoom-in' className='max-w-[1240px] w-[90%] md:w-[50%] text-center pt-20 md:pt-36 mx-auto text-white'>
              <h1 className='font-bold text-4xl'>Pathner With Us</h1>
              <p className='text-2xl mt-2'>Let's collaborate! Are you interested in setting up a charging station at your premises?</p>
              <button className='bg-[#17583d] text-white font-medium mt-2 py-2 px-5 rounded-3xl'>Contact Us Now</button>
            </div>
        </div>

    </div>
  )
}

export default About