import React from 'react'

const Card = () => {
  return (
    <div className='m-4 w-1/2 border-2 rounded border-black'>
        <div className='bg-blue-500 rounded'>
            <h1 className='font-sans text-white text-center py-9 text-3xl font-semibold'>News you can Trust</h1>
        </div>
        <div className='text-center'>
            <h1 className='mt-7 font-bold text-xl'>Stay up to date with the Latest</h1>
            <p className='font-semibold my-2'>Subscribe to our newsletter for the latest news straight into your inbox</p>
            <input className='bg-slate-200 h-10 p-3 w-72 text-center my-3' type="text" placeholder='you@example.com' /> <br />
            <button className='bg-blue-600 hover:bg-blue-300 text-center rounded-3xl text-white py-2 w-72'>Subscribe for More</button>
            <p className='my-5 font-semibold'>We value your privacy</p>
        </div>
    </div>
  )
}

export default Card