import React from 'react'
import Input from '../components/Input'
import { motion, useScroll, useTransform, } from 'framer-motion'

function Contact() {

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0.2, 1], [0.1, 0.95]);

  return (
    <motion.div style={{scale}} id='contact' className='bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] text-white'>
        <motion.div style={{scaleY: scrollYProgress}} className='max-w-[1240px] w-full mx-auto py-20 px-6 md:grid md:grid-cols-2'>

            <div className='md:w-[80%]'>
                <h1 className='text-4xl md:text-6xl font-semibold'>Contact Us</h1>
                <p className='md:text-xl my-4'>Please fill up this form to send us a message and we will get back to you.</p>
            </div>

            <div>
            <form className=''>
                <label htmlFor='name'>Name
                    <Input name='name' id='name' placeholder='Your Name' />
                </label><br /><br />
                <label htmlFor='email'>Email
                    <Input name='email' id='email' placeholder='Email' />
                </label><br /><br />
                <label htmlFor='phone'>Phone
                    <Input name='number' id='phone' placeholder='Phone Number' />
                </label><br /><br />
                <label htmlFor='figma'>Message
                    <textarea className='w-[100%] h-[120px] p-2 rounded-2xl bg-[rgba(255,255,255,0.1)] border-0' name='figma' id='figma' placeholder='Message' />
                </label><br /><br />
                <button className='bg-[#FCD980] text-black font-light py-3 px-6 rounded-xl'>Submit</button>
            </form>

            </div>

        </motion.div>
    </motion.div>
  )
}

export default Contact