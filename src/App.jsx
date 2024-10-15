import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Routes,Route} from  'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          
          <Route path='/course' element={<Course/>}></Route>
      </Routes>
    </div>
  )
}

export default App
