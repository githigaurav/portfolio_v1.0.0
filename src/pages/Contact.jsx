import React, { useState } from 'react'
import { useFormik } from 'formik'
import { inqueryValidation } from './validation'
import { useNetwork } from '../utils/useNetwork'
import axios from 'axios'

const Contact = () => {
  const [loading, setLoading]=useState(false)
  const [status, setStatus]=useState('Submit')
  const [response , setResponse]=useState(null)
  const [error , setError]=useState(false)
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      message:''
    },
    validationSchema:inqueryValidation,
    onSubmit: async (values) => {

      const controller = new AbortController();
      const signal = controller.signal;
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {

        setLoading(true)
        setStatus("Please wait ....")
        const response = await useNetwork("post", "services/email", values, { headers: { "Content-Type": "application/json" }, signal: signal })
        setResponse(response?.data?.message)
        formik.resetForm()

      } catch (error) {
        setError(true)
        console.log(error)
        if (error?.code === 'ERR_CANCELED') {
          setResponse("Request timeout please try again ")
        }


      } finally {
        clearTimeout(timeoutId)
        setLoading(false)
        setStatus("Submit")
        setTimeout(() => {
          setResponse(null)
          setError(false)
        }, 3000)
      }
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
               
                <button type='submit' className='bg-ctaColor p-2 rounded-md text-white uppercase disabled:bg-textColor' onClick={formik.handleSubmit} disabled={loading}>{status}</button> 
                {response && <span className={`text-center ${error ? "text-red-700":"text-green-700"} text-md`}>{response}</span>}
            </form>
        </div>
  
    </>
  )
}

export default Contact