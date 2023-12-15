import React from 'react'

const Contact = () => {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-3xl m-4 p-4'>Contact Us</h1>
      <form >
        <input type="text" className='p-2 border border-black m-2' placeholder='name' />
        <input type="text" className='p-2 border border-black m-2' placeholder='message' />
        <button className='p-2 bg-slate-400 rounded-md text-white font-bold'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
