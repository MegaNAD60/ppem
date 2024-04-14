import React from 'react'

function TailAnimate() {
  return (
    <>
        <div className='bg-[none] w-60 h-60 ml-[40%] mt-[10%] relative z-[1] overflow-hidden'>

            <div className='h-60 w-60 transform scale-100 bg-gradient-to-br from-[#5ed34f] to-[#c71111] absolute z-[2] inset-0 animate-rotateFrame'></div>
            <div className='w-[200px] h-[200px] bg-[green] inset-5 flex items-center justify-center absolute z-[3]'>Welcome to home of creativivty</div>

        </div>

    </>
  )
}

export default TailAnimate