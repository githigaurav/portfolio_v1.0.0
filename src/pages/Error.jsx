import React from 'react'

const Error = () => {
  return (
    <>
        <div className="w-full flex items-center justify-center h-dvh">
            <section className='flex flex-col gap-2 justify-center items-center'>
                <h3 className='text-ctaColor text-8xl'>Oops!</h3>
                <p className='text-2xl text-textColor'>Page Not Found 404</p>
                <button className='bg-ctaColor py-2 px-10 rounded-full text-white' onClick={()=>{window.location.href=`${window.location.hostname === 'localhost' ? "http://localhost:3000" : "https://higaurav.com"}`}}>Go To Home Page</button>
            </section>
        </div>
    </>
  )
}

export default Error