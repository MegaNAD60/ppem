import { ObjectiveContents } from "../components/Card.jsx";
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Objectives(){

    useEffect(() => {
    AOS.init();
    }, [])


    const featureContents = ObjectiveContents.map(contents => {
        const {id, title, description} = contents;
        return(
            <div className="bg-[#ffffff] text-black px-8 py-4 my-4 md:my-0 rounded-2xl" key={id}>
                <h3 className="text-2xl font-medium my-4">{title}</h3>
                <p>{description}</p>
            </div>
        )
    })

    return(
        <div className="py-6 bg-[#ececec]">

            <div className="max-w-[1240px] w-full mx-auto px-6">

                <div className="text-center">
                    <h2 className="text-4xl font-semi-bold bg-gradient-to-bl from-[#2c815e] to-[#5ebb52] inline-block text-transparent bg-clip-text">Objectives</h2>
                    <h2 className="md:w-[60%] w-[80%] mx-auto font-bold md:text-3xl sm:text-2xl text-xl my-4">Driving Nigeria's Electric Mobility.</h2>
                </div>

                <div data-aos='fade-up-right' data-aos-duration='1000' className="md:grid md:grid-cols-2 gap-5">
                    {featureContents}
                </div>

            </div>

        </div>
    )
}

export default Objectives;