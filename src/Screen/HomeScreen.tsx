import React from 'react'
import FirstSection from '../components/FirstSection'
import Navbar from '../components/Navbar'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import Graph from '../assets/images/Graph.png'
import ForthSection from '../components/ForthSection'
import FifthSection from '../components/FifthSection'
import SixthSection from '../components/SixthSection'
import SeventhSection from '../components/SeventhSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function HomeScreen() {
  return (
    <div className=' w-screen lg:w-full ov h-full pt-14' >
        <div className='w-full bg-firstcolor' >  
          <FirstSection />
        </div>
        <div className='w-full lg:hidden lg:mt-0 -mt-1 bg-everestdark lg:bg-02 flex flex-col ' > 
          <SeventhSection />
        </div>
        <div style={{backgroundColor: '#00A0FF'}} className='w-full' >  
          <SecondSection />
        </div>
        <div className='w-full' >  
          <ThirdSection />
        </div>
        <img src={Graph}  alt='graph' />
        <div className='w-full' > 
          <ForthSection />
        </div>
        <div className='w-full' > 
          <FifthSection />
        </div>
        <div className='w-full' > 
          <SixthSection />
        </div>
        <div style={{backgroundColor: '#020405'}} className='w-full hidden lg:flex flex-col ' > 
          <SeventhSection />
        </div>
        <div style={{backgroundColor: '#0B85FD'}} className='w-full ' > 
          <AboutSection />
        </div>
        <div className='w-full ' > 
          <Footer />
        </div>
    </div>
  )
}
