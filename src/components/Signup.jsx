import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
      <>
          <div className="max-w-md mx-auto mt-10 bg-gray-900 p-8 border border-gray-300 rounded-lg shadow-md relative">

              <Link to='/'>
                  <button className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                      X
                  </button>
              </Link>

              <h2 className="text-lg font-bold mb-4 text-white">Sign Up</h2>
              <div className="mb-4">
                  <label className="block text-sm font-bold mb-2 text-white" htmlFor="username">Username</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-4">
                  <label className="block text-sm font-bold mb-2 text-white" htmlFor="email">Email</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                  <label className="block text-sm font-bold mb-2 text-white" htmlFor="password">Password</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
              </div>

              <div className="flex items-center justify-between">
                  <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer   " onClick={()=>document.getElementById('my_modal_3').showModal()}>Already have an account?</a>
                  
                    <Login />
                  
                  
              </div>
          </div>

    </>
  )
}

export default Signup