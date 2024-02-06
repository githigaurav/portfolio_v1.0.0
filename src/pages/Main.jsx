import React from 'react'

const Main = () => {
  
  return (
    <>

        <main className='w-full flex h-dvh justify-center items-center' id='home'>
            <div className='flex flex-col items-center p-1 gap-4 w-full max-w-[1440px]  '>
                <h1 className=' uppercase font-bold text-ctaColor text-5xl lg:text-7xl 2xl:text-[130px]'><span className='text-textColor'>Hey, I'm </span> Gaurav</h1>
                <p className='text-textColor font-regular text-center 2xl:text-[20px] max-w-[550px]  2  xl:max-w-[768px]'>A MERN STACK Web Developer building the Frontend & Backend of Websites and Web Applications that leads to the success of the overall product</p>
                <button className='bg-ctaColor text-white w-full max-w-[200px] xl:max-w-[250px] py-2 rounded-md mt-5 uppercase hover:bg-ctaHover transition-all'><a href="#projects">projects</a></button>
            </div>
        </main>

    </>
  )
}

export default Main