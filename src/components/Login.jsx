import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
 
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>


            <div className='flex flex-col items-center justify-center'>
                <h3 className="font-bold text-lg">Login</h3>
                <div className='flex gap-3 p-3 items-center'>
                    <h3>Email</h3>
                    <input type="email" name="email" placeholder="Enter your Email" className='p-2'/>
                </div>

                <div className='flex gap-3 p-3 items-center mr-7'>
                    <h3>Password</h3>
                    <input type="password" name="password" placeholder="Enter your Password" className='p-2'/>
                </div>   
            </div>

            <div className='flex justify-around items-center m-2'>
                    <button className="btn  bg-pink-600 hover:bg-pink-600 scale-105 duration-150 text-white">Login</button>
                    <p>Not Registered? <Link to='/signup' className='text-pink-700'>Sign up</Link></p>
            </div>
           
        </div>
        </dialog>
    </div>
  )
}

export default Login
