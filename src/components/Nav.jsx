import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Nav() {

  const [nav, setNav] = useState(false)
  const [fix, setFix] = useState(false);

  function setFixed(){
    if(window.scrollY > 30){
      setFix(true)
    } else{
      setFix(false)
    }
  }
  window.addEventListener('scroll',setFixed)

  const handleHamburger = () => {
    setNav(!nav)
  }

    return (

      <div className={fix ? "sticky top-0 left-0 z-10 bg-[#2dac57] text-white transition-[0.5s]" : "sticky top-0 left-0 bg-transparent text-white z-10"}>
        <div className='max-w-[1240px] w-full mx-auto px-6 py-4'>

          <nav className='flex justify-between'>

            <div className='w-full text-2xl font-bold'>
                <h1 className='w-full text-2xl font-bold'>PPEM</h1>
            </div>

            <ul className="hidden text-[1rem] lg:flex w-full justify-between items-baseline">
                <li><Link to='#home' smooth>Home</Link></li>
                <li><Link to='#about' smooth>About</Link></li>
                <li><Link to='#objectives' smooth>Objectives</Link></li>
                <li><Link to='#charging' smooth>Charging Stations</Link></li>
                <li><Link to='#ev-bus' smooth>E-buses</Link></li>
                <li><Link to='#faq' smooth>FAQ</Link></li>
                <Link to='#contact' smooth>
                    <button className="bg-transparent border border-white rounded-3xl px-4 py-2 font-medium">Contact Us</button>
                </Link>
            </ul>

            <div onClick={handleHamburger} className="block lg:hidden px-6">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'fixed w-[100%] left-0 top-0 bg-[#2dac57] z-10 ease-in-out duration-500 pb-3' : 'fixed top-[-100%]'}>
                <div className='flex justify-between items-baseline'>
                  <h1 className='w-full text-2xl font-bold p-6'>PPEM</h1>
                  <div onClick={handleHamburger} className="block lg:hidden px-6">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                  </div>
                </div>
                <ul className="w-full flex flex-col gap-10 text-xl pl-6">
                  <li onClick={handleHamburger}><Link to='#home' smooth>Home</Link></li>
                  <li onClick={handleHamburger}><Link to='#about' smooth>About</Link></li>
                  <li onClick={handleHamburger}><Link to='#objectives' smooth>Objectives</Link></li>
                  <li onClick={handleHamburger}><Link to='#charging' smooth>Charging Stations</Link></li>
                  <li onClick={handleHamburger}><Link to='#ev-bus' smooth>E-buses</Link></li>
                  <li onClick={handleHamburger}><Link to='#faq' smooth>FAQ</Link></li>
                  <li onClick={handleHamburger}><Link to='#contact' smooth>
                      <button className="bg-transparent border border-white rounded-3xl px-4 py-2 font-medium">Contact Us</button>
                  </Link></li>
                </ul>
            </div>

            </nav>

        </div>
      </div>
    );
  }

  export default Nav;