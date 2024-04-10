import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

// IMPORT COMPONENTS
import Nav from './components/Nav';
import Header from './sections/Header';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ChargingStations from './sections/ChargingStations';
import EvBuses from './sections/EvBuses';

function App() {

/*  useEffect(() => {
    AOS.init();
  }, [])*/

  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Objectives />
      <ChargingStations />
      <EvBuses />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
