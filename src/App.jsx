import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Routes,Route} from  'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>  
          <Route path='/course' element={<Courses/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App
