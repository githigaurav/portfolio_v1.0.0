import React from 'react'
import { useFormik } from 'formik'
import { inqueryValidation } from './validation'
const Contact = () => {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      message:''
    },
    validationSchema:inqueryValidation,
    onSubmit:(values)=>{
      alert("Form submitted")
    }

  })
 
  return (
    <>

        <div className='flex w-full items-center justify-center mt-10 mb-10 p-2'>
            <form action="" className='max-w-[768px] flex flex-col gap-3 w-full'>
                <input
                 type="text"
                 name="name"
                 value={formik.values.name}
                 placeholder='Name..'
                 className='p-3 w-full rounded-md outline-none focus:bg-textColor focus:text-white'
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 /> 
                {formik.errors.name && formik.touched.name ? <span className='text-red-700'>{formik.errors.name}</span> : null}
                <input
                 type="email"
                 name="email"
                 value={formik.values.email}
                 placeholder='Email..'
                 className='p-3 w-full rounded-md outline-none focus:bg-textColor focus:text-white'
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 />
                 {formik.errors.email && formik.touched.email ? <span className='text-red-700'>{formik.errors.email}</span> : null}
                <textarea 
                 name="message"
                 id=""
                 cols="30"
                 rows="10"
                 placeholder='Message..'
                 value={formik.values.message}
                 className='p-3 w-full rounded-md outline-none focus:bg-textColor focus:text-white'
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></textarea> 
                 {formik.errors.message && formik.touched.message ? <span className='text-red-700'>{formik.errors.message}</span> : null}
                <button type='submit' className='bg-ctaColor p-2 rounded-md text-white uppercase' onClick={formik.handleSubmit}>Submit</button> 
            </form>
        </div>
  
    </>
  )
}

export default Contact