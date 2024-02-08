import React, { useState } from 'react'
import data from './projectData'
const Projects = () => {
console.log(data)
  return (
    <>

        <div className='flex items-center flex-col gap-10 mb-10 mt-10'>

          {data?.map((project, index)=>{
           return <div className='flex  md:flex-row max-w-[1120px] flex-col p-2 w-full  gap-5 items-center' key={index}>
            <div className='flex-1 relative -z-10 '>
              <img src={project.desktopView} alt="" className='w-full h-auto max-w-[500px] ' />
              <div className='absolute bottom-0 left-5 '>
                <img src={project.mobileView} alt="" className='max-h-[150px] sm:max-h-[200px]' />
              </div>
            </div>
            <div className=' flex flex-1 flex-col items-start gap-5 '>
                <h3 className=' text-2xl  font-bold text-ctaColor'>{project.projectName}</h3>
                <p className='text-textColor  text-[18px]'>{project.discription}</p>
                <button className='bg-ctaColor px-10 py-2 text-white upp max-w-[200px] w-full' onClick={()=>{window.open(project.projectLink, "blank")}}>Visit</button>
            </div>
         </div>
          })}
        </div>

    </>
  )
}

export default Projects