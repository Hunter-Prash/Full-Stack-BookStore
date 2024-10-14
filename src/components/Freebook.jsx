import React from 'react'
import list from '../list.json'

function Freebook() {
    const filterData=list.filter((data)=>data.category==='Free')
    console.log(filterData)

  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='font-bold text-xl pb-2'>Free Books</h1>
        <p>fsdgf gfisdgfisgtfs iuysdgfgsdiyfgew vfbidgf sf fgisdgf isdgfiudg </p>
      </div>
    </>
  )
}

export default Freebook
