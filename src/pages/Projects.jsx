import React from 'react'

const Projects = () => {

  return (
    <>
        <div className='flex items-center flex-col gap-10 mb-10 mt-10'>
        <div className='flex  md:flex-row max-w-[1120px] flex-col p-2 w-full  gap-5 items-center'>
                <div className='flex-1'>
                  <img src={"/project.png"} alt="" className='w-full h-auto max-w-[500px]' />
                </div>
                <div className=' flex flex-1 flex-col items-start gap-5 '>
                    <h3 className=' text-2xl  font-bold text-ctaColor'>EasyVisit (In Process)</h3>
                    <p className='text-textColor  text-[18px]'>EasyVisit streamlines medical appointment scheduling and management. Patients can easily book appointments, access records, and communicate with providers. </p>
                    <button className='bg-ctaColor px-10 py-2 text-white upp'>Case Study</button>
                </div>
        </div>

        <div className='flex  md:flex-row max-w-[1120px] flex-col p-2 w-full  gap-5 items-center'>
                <div className='flex-1'>
                  <img src={"/project.png"} alt="" className='w-full h-auto max-w-[500px]' />
                </div>
                <div className=' flex flex-1 flex-col items-start gap-5 '>
                    <h3 className=' text-2xl  font-bold text-ctaColor'>EasyVisit (In Process)</h3>
                    <p className='text-textColor  text-[18px]'>EasyVisit streamlines medical appointment scheduling and management. Patients can easily book appointments, access records, and communicate with providers. The app sends reminders, allows for cancellations, and provides directions to the clinic. It's convenient, secure, and confidential.</p>
                    <button className='bg-ctaColor px-10 py-2 text-white upp'>Case Study</button>
                </div>
        </div>
      
        </div>

    </>
  )
}

export default Projects