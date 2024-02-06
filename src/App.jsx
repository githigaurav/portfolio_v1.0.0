import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Main from './pages/Main'
import Projects from './pages/Projects'
import About from './pages/About'
import Layout from './pages/Layout'

const App = () => {
  return (
      <>

        <Router>
            <Routes>
              <Route path='/' element={<Layout/>}/>
            </Routes>
        </Router>
      </>
  )
}

export default App