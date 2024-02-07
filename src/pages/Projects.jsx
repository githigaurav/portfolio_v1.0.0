import React, { useState } from 'react'
import CaseStudy from './CaseStudy'

const Projects = () => {
  const [model, setModel]=useState(false)

  const handleModel = () =>{   
    setModel(false)
   
  }
  return (
    <>
    {model && <CaseStudy handleModel={handleModel}/>}
        <div className='flex items-center flex-col gap-10 mb-10 mt-10'>

        <div className='flex  md:flex-row max-w-[1120px] flex-col p-2 w-full  gap-5 items-center'>
                <div className='flex-1 relative -z-10 '>
                  <img src={"/portfolioDesktop.png"} alt="" className='w-full h-auto max-w-[500px] ' />
                  <div className='absolute bottom-0 left-5 '>
                    <img src={"/portfolioMob.png"} alt="" className='max-h-[150px] sm:max-h-[200px]' />
                  </div>
                </div>
                <div className=' flex flex-1 flex-col items-start gap-5 '>
                    <h3 className=' text-2xl  font-bold text-ctaColor'>Responsive Portfolio</h3>
                    <p className='text-textColor  text-[18px]'>My portfolio represents the culmination of my experiences and skills as a MERN Stack Developer. Through this platform, I invite you to explore my projects, delvelop into my technical expertise, and witness my passion for creating exceptional web applications. </p>
                    <button className='bg-ctaColor px-10 py-2 text-white upp' onClick={()=>{setModel(true)}}>Case Study</button>
                </div>
        </div>

        <div className='flex  md:flex-row max-w-[1120px] flex-col p-2 w-full  gap-5 items-center'>
                <div className='flex-1 relative -z-10 '>
                  <img src={"/currencyDesktop.png"} alt="" className='w-full h-auto max-w-[500px] ' />
                  <div className='absolute bottom-0 left-5 '>
                    <img src={"/currencyMob.png"} alt="" className='max-h-[150px] sm:max-h-[200px]' />
                  </div>
                </div>
                <div className=' flex flex-1 flex-col items-start gap-5 '>
                    <h3 className=' text-2xl  font-bold text-ctaColor'>Currency Converter</h3>
                    <p className='text-textColor  text-[18px]'> Instantly view currency rates with our React Currency Converter. Simply input numbers to see
                    real-time exchange rates for different countries, streamlining your currency comparisons. </p>
                    <button className='bg-ctaColor px-10 py-2 text-white upp'>Case Study</button>
                </div>
        </div>
      
        </div>

    </>
  )
}

export default Projects