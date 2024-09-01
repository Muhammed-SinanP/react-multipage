import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
    <div className='min-h-screen flex flex-col '>
    <Navbar/>
    <main className='flex-grow'>
    <Outlet/>
    </main>
    <Footer/>
    </div>
    </>


  )
}

export default Layout