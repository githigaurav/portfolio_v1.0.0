import React from 'react'

const Section = ({
  head='Your Headline',
  text='Your Text',
  id=''
}) => {
  return (
   <>
    <div className='bg-textColor  text-white py-10 flex items-center flex-col gap-3' id={id}>
        <h2 className=' font-bold text-4xl tracking-wider uppercase'>{head}</h2>
        <p className='font-normal  text-center text-md tracking-wide'>{text}</p>
    </div>
   </>
  )
}

export default Section