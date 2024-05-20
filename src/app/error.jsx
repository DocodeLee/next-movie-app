"use client";

import{ useEffect } from 'react'
export default function error({error, reset}) {
    useEffect(()=>{
        console.log(error);
    },[error]);
    return (
    <div className='text-center mt-50'>
        <h1>
        Something went Wrong. Please try Again later.
        </h1>
        <button className=' p-1 rounded-md text-xl hover:text-red-700 bg-blue-300' onClick={()=> reset()}>
            Try again
        </button>
    </div>
  )
}
