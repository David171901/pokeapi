import React from 'react'
import '../styles/Loader.css'

export const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="lds-dual-ring"></div>
    </div>
  )
}
