import { ObjectiveContents } from "../components/Card.jsx";
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from "framer-motion";


function Objectives(){

    const [selectedID, setSelectedId] = useState(null)

    useEffect(() => {
    AOS.init();
    }, [])



    return(
        <div id="objectives" className="py-6 bg-[#ececec]">

            <div className="max-w-[1240px] w-full mx-auto px-6 py-20">

                <div className="text-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text">Objectives</h2>
                    <h2 className="md:w-[60%] w-[80%] mx-auto font-semi-bold md:text-3xl sm:text-2xl text-xl my-4">Driving Nigeria's Electric Mobility.</h2>
                </div>

                <div data-aos='fade-up-right' data-aos-duration='1000' className="md:grid md:grid-cols-2 gap-5">
                    {ObjectiveContents.map(contents => (
                        <motion.div className="bg-[#ffffff] text-black px-8 py-4 my-4 md:my-0 rounded-2xl grid grid-cols-5" layoutId={contents.id} onClick={() => setSelectedId(contents.id)}>
                             <motion.img src={contents.image} alt="" className="w-10 h-10 items-baseline md:mx-0" />
                            <motion.div className="col-span-4">
                                <motion.h3 className="text-2xl font-medium bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text">{contents.title}</motion.h3>
                                <motion.p className="mt-2">{contents.description}</motion.p>
                            </motion.div>
                        </motion.div>
                     )
                    )}

                    <AnimatePresence>
                       {selectedID && (
                        <motion.div key={contents.id} layoutId={selectedID}>
                          <motion.img src={contents.image} alt="" className="w-10 h-10 items-baseline md:mx-0" />
                            <motion.div className="col-span-4">
                                <motion.h3 className="text-2xl font-medium bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text">{contents.title}</motion.h3>
                                <motion.p className="mt-2">{contents.description}</motion.p>
                           </motion.div>
                           <motion.button onClick={() => setSelectedId(null)}>btn</motion.button>
                        </motion.div>
                        )}
                     </AnimatePresence>
                </div>

            </div>

        </div>
    )
}

export default Objectives;