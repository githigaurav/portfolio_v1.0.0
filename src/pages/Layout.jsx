import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Section from './Section'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <Section
        head='Projects'
        text="you will find some of the personal and clients projects that I created with each project containing its own case study"
        id='projects'
        />
        <Projects/>
        <Section
        head='About'
        text="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        id='about'
        />
        <About/>
        <Section
        head='Contact'
        text="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        id='contact'
        />
        <Contact/>
        <Footer/>
    </>
  )
}

export default Layout