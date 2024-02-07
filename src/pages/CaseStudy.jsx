import React, { useEffect, useState } from 'react'
import { stagger, animate } from "framer-motion"

const CaseStudy = ({
    handleModel
}) => {
    const[animate, setAnimate]=useState("-top-[1000px]")

    useEffect(() => {       
        setAnimate("top-0"); 
      },[])
  return (
    <>
        <div className='fixed top-0 bg-black bg-opacity-50 min-h-screen w-full p-2 flex justify-center transition-all ease-in-out duration-300 ' onClick={()=>handleModel()}>
            <div className={`relative ${animate && animate} transition-all ease-in-out duration-150 bg-backgroundColor max-w-[1440px] w-full flex flex-col px-3 py-5  gap-5  shadow-xl rounded-lg h-dvh max-h-[768px] overflow-y-scroll overflow-x-hidden`}>
            
                <div className='flex-1'>
                    <h3 className='text-ctaColor uppercase font-bold text-3xl'>Challenges</h3>
                    <hr className='mb-5 mt-3'/>
                    <p><span className='font-bold text-xl'> Custom Design:</span> We designed a visually appealing layout for my portfolio website without relying on pre-built templates or frameworks. We created a unique and modern design using CSS for styling and layout, incorporating clean typography, well-balanced spacing, and a pleasing color scheme.</p>
                    <p><span className='font-bold text-xl'> Responsive Design:</span> We prioritized responsiveness to make the website accessible on various devices and screen sizes. We utilized CSS media queries and fluid layouts to adapt the website's design and content based on the user's devic</p>
                    <p><span className='font-bold text-xl'> Accessibility and Performance:</span> We have focused on optimizing the website for accessibility and performance. We followed best practices for HTML structure and used semantic tags to enhance the website's accessibility. We also optimized the CSS and JavaScript code to minimize file sizes and improve page loading times</p>
                </div>
                <div className='flex-1 flex flex-col items-start gap-1'>
                    <h3 className='text-ctaColor uppercase font-bold text-3xl'>Tool & Tech Stack</h3>
                    <hr className='w-full mb-5 mt-3'/>
                    <button className='text-xl font-semibold text-ctaColor'>React Js</button>
                    <p>React JS is a JavaScript library that enables building complex web interfaces by composing simple reusable components with their own state managed by a virtual DOM. This architecture results in excellent performance, scalability, and maintainability for dynamic web applications.</p>
                    <button className='text-xl font-semibold text-ctaColor'>Formik</button>
                    <p>Formik is a form library for React that makes building, validating, and submitting forms easy by managing form state and errors. It reduces boilerplate code through a declarative API and handles dynamic form validation, values, and errors seamlessly.</p>
                    <button className='text-xl font-semibold text-ctaColor'>Yup</button>
                    <p>Yup is a JavaScript schema builder for value parsing and validation that integrates well with Formik forms. It allows declarative validation logic through an easy to use chainable API that helps validate input types, shapes and constraints, seamlessly with minimal code.</p>
                    <button className='text-xl font-semibold text-ctaColor'>Node Js</button>
                    <p>We have used Node js for handling back-end services.</p>
                    <button className='text-xl font-semibold text-ctaColor'>Node Mailer</button>
                    <p>We have used  nodemailer for handling client side email services.Nodemailer is a node.js module that provides an easy way to handle sending emails from the server - it supports different mail providers, manages email transport and delivery, and abstracts away the complexity for sending all types of plain text, HTML, and multipart emails with attachments.</p>
                    <span className='text-ctaColor'>* Click anywhere to close</span>
                </div>


            </div>
        </div>
    </>
  )
}

export default CaseStudy