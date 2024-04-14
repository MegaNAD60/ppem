import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaChevronUp } from "react-icons/fa";

// IMPORT COMPONENTS
import Nav from './components/Nav';
import Header from './sections/Header';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ChargingStations from './sections/ChargingStations';
import EvBuses from './sections/EvBuses';
import Faq from './sections/Faq';
import TailAnimate from './TailAnimate';
import Partner from './sections/Partner';

function App() {

      //SCROLL TOP BUTTON FUNCTION
      const scrollTop = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }

    //SCROLL TOP BUTTON FUNCTION WHEN BROWSER IS BEING SCROLL
    const [showBtn, setShowBtn] = useState(false);

    const whenScroll = () => {
        if(window.scrollY > 300){
            setShowBtn(true)
        }
        else{
            setShowBtn(false)
        }
    }

    window.addEventListener('scroll', whenScroll)

/*  useEffect(() => {
    AOS.init();
  }, [])*/

  return (
    <div className='overflow-x-clip'>

      <button className={showBtn ? "fixed animate-bounce right-4 bottom-4 lg:right-40 rounded-md font-medium p-3 z-10 bg-gradient-to-bl from-[#2c815e] to-[#5ebb52]" : 'hidden'}
      onClick={scrollTop}
      onScroll={whenScroll}><FaChevronUp className='text-white' /></button>
      <Nav />
      <Header />
      <About />
      <Objectives />
      <Partner />
      <ChargingStations />
      <Faq />
      <Contact />
      <Footer />

      {/*<TailAnimate />*/}

    </div>
  )
}

export default App
