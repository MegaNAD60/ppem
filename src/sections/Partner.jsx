import React from 'react'
import image from '../images/Gemini_Generated_Image_rnaj7arnaj7arnaj.jpeg'

import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { HashLink as Link } from 'react-router-hash-link';
function Partner() {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div>
        <div className="bg-[rgba(46,44,44,0.8)] w-full h-96 relative my-6" >
            <img src={image} className='w-full h-full object-cover absolute mix-blend-overlay' />

            <div className='animation-wrapper'>

              <div data-aos='zoom-in' data-aos-duration='1000' className='animation-content max-w-[1240px] w-[90%] md:w-[50%] text-center pt-20 md:pt-36 mx-auto text-white'>
                <h1 className='font-bold md:text-4xl'>Pathner With Us</h1>
                <p className='md:text-2xl mt-2'>Let's collaborate! Are you interested in setting up a charging station at your premises?</p>
                <Link to='#contact' smooth>
                  <button className='bg-[#2dac57] text-white font-medium mt-3 py-2 px-5 rounded-3xl'>Contact Us Now</button>
                </Link>
              </div>

            </div>


        </div>

    </div>
  )
}

export default Partner