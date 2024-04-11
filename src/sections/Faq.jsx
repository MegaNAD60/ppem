import FaqItems from '../components/FaqItems';


function Faq(){

    return(
        <div id='faq' className='max-w-[1240px] w-full mx-auto px-6 py-20 '>
            <div className='text-center'>
                <h2 className='text-4xl font-semi-bold bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text'>Frequently Asked Question?</h2>
            </div>

            <div className='md:w-[50%] mx-auto mt-10'>
               <FaqItems />
            </div>

        </div>

    )
}

export default Faq;