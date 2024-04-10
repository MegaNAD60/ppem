import React from 'react'
import image from '../images/Gemini_Generated_Image_iypdz3iypdz3iypd.jpeg'

function Header() {
  return (
    <div className='text-[white]'>

        <div className="bg-[rgba(46,44,44,0.7)] w-full h-96 relative" >
            <img src={image} className='w-full h-full object-cover absolute mix-blend-overlay' />
            <div className='max-w-[1240px] w-[90%] md:w-[50%] text-center mx-auto'>
              <h1 className='text-white font-bold text-4xl ml-[12%] pt-10'>
                The Presidential Program on Electric Mobility (PPEM)
              </h1>
            </div>
        </div>

        <div className="card-wrapper max-w-[1240px] w-[90%] md:w-[50%] mx-auto p-4">

          <div className='card-content flex items-center justify-center'>
            <div>
              <h2 className='text-3xl'>The Electrification of Transport In Nigeria</h2>
              <p className='text-2xl'>Accelarating into a Greener Future: Spearheading the Electrification of Transportation to Drive Sustainable Development and Foster Energy Independence Across Nigeria!</p>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Header