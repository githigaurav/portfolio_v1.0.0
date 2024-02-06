import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const[isOpen , setIsOpen]=useState(false)

    const navButton=[
      <button type='button' className='uppercase font-semibold text-sm sm:text-lg' onClick={()=>{setIsOpen(false)}}><a href="#">Home</a></button>,
      <button type='button' className='uppercase font-semibold text-sm sm:text-lg' onClick={()=>{setIsOpen(false)}} ><a href="#projects">Projects</a></button>,
      <button type='button' className='uppercase font-semibold text-sm sm:text-lg' onClick={()=>{setIsOpen(false)}} ><a href="#about">About</a></button>,
      <button type='button' className='uppercase font-semibold text-sm sm:text-lg' onClick={()=>{setIsOpen(false)}} ><a href="#contact">Contact</a></button>,
      <button type='button' className='uppercase font-semibold text-sm sm:text-lg cursor-not-allowed' onClick={()=>{setIsOpen(false)}} disabled={true}>Blog</button>

    ]
  return (
    <>
        <nav className='flex fixed justify-center items-center  w-full  p-2 bg-[#EDF1FD] shadow-lg'>
            <div className='flex justify-between items-center max-w-[1440px] w-full py-3'>
                <Link to="/"><h1 className='text-ctaColor font-bold uppercase text-2xl '>Gaurav</h1></Link>
                <div className='flex'>
                        <div className='text-textColor gap-10 xl:gap-14 2xl:gap-20 hidden sm:flex'>
                        {navButton?.map((navBtn, index)=>{
                        return navBtn
                        })}
                        </div>
                        <div className='sm:hidden cursor-pointer ' onClick={()=>{setIsOpen((prev)=> !prev)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[35px] h-[35px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                </div>
                {/* mobile nav menu */}
               
                    <div className={`absolute sm:hidden  ${isOpen ? "bg-black bg-opacity-50 h-dvh z-50" : ''} left-0 w-full top-0 overflow-auto`} onClick={()=>{setIsOpen(false)}}>
                    <div className={`absolute flex flex-col gap-5 z-50 ${isOpen ? "top-0": "-top-full"} w-full   sm:hidden bg-white text-end px-3 shadow-md rounded-sm transition-all ease-in-out duration-300 py-5 max-w-[768px]`} >
                    {navButton?.map((navBtn)=>{
                           return navBtn
                           })}
                   </div>
                    </div>
               
               
            </div>
        </nav>
    </>
  )
}

export default Navbar