import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const faqItems = [
    {
        id: 1,
        question: "What Is The Presidential Program On Electric Mobility",
        answer: "The PPEM is a pioneering initiative led by President Bola Ahmed Tinubu aimed at revolutionizing Nigeria's transportation sector through the promotion of electric vehicles (EVs) and sustainable mobility solutions."
    },
    {
        id: 2,
        question: "What Are The Objectives Of PPEM?",
        answer: "The PPEM aims to accelerate the adoption of electric vehicles (EVs), stimulate local automotive manufacturing, reduce import dependency, create employment opportunities, and contribute to a cleaner and more sustainable automotive future for Nigeria."
    },
    {
        id: 3,
        question: 'What Role Does Electric Mobility Play In PPEM?',
        answer: "Electric mobility is at the core of the PPEM, with a focus on promoting the adoption of electric vehicles and related infrastructure to address environmental concerns and reduce reliance on fossil fuels."
    },
    {
        id: 4,
        question: "What Are The Expected Outcomes Of PPEM?",
        answer: "The PPEM is expected to result in increased EV adoption, growth in the local automotive industry, reduced environmental pollution, job creation, and enhanced energy security for Nigeria."
    },
    {
        id: 5,
        question: "How Can Individuals And Businesses Participate In The PPEM?",
        answer: "Individuals and businesses can participate in the PPEM by adopting electric vehicles, investing in EV infrastructure, supporting local manufacturing initiatives, and advocating for policies that promote sustainable transportation"
    },
    {
        id: 6,
        question: "How Will The PPEM Address The Challenges Of Fuel Subsidy Removal?",
        answer: "By promoting electric vehicles and reducing dependency on fossil fuels, the PPEM aims to mitigate the impact of fuel subsidy removal by providing alternative, sustainable transportation options for citizens"
    },
    {
        id: 7,
        question: "Who Is Leading The PPEM?",
        answer: "The PPEM is led by the Nigerian government, with oversight from relevant ministries and agencies. However, it is envisioned and championed by President Bola Ahmed Tinubu."
    },
    {
        id: 8,
        question: "How Will The PPEM Benefit Nigeria?",
        answer: "The program will bring about a shift towards cleaner and greener transportation options, reduce harmful emissions, create jobs in the automotive sector, and position Nigeria as a leader in sustainable mobility solutions."
    },
]

function FaqItems(){
    const ToggleAnswer = ({id, question, answer}) => {
        const [expanded, setExpanded] = useState(false);
        return(
            <div className="border-b border-[#5fce84]" key={id}>
                <div className="py-6" onClick={() => setExpanded(!expanded)}>
                    <div className="flex justify-between">
                        <p>{question}</p>
                        <span className="text-[#0f1731] font-light"><FaPlus /></span>
                    </div>
                </div>
                <div className="ease-in-out duration-500">
                    {expanded && <p className="ease-in-out duration-500">{answer}</p>}
                </div>
            </div>
        )
    }
    return(
        <>
            {faqItems.map(faq => {
                return <ToggleAnswer key={faq.id} question={faq.question} answer={faq.answer} />
            })}
        </>
    )
}

export default FaqItems;