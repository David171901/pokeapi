import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Layout = () => {
  return (
    <main className='container mx-auto flex-col'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </main>
  )
}
