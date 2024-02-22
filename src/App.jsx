import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Error from './pages/Error'

const App = () => {
  return (
      <>

        <Router>
            <Routes>
              <Route path='*' element={<Error/>}/>
              <Route path='/' element={<Layout/>}/>
            </Routes>
        </Router>
      </>
  )
}

export default App