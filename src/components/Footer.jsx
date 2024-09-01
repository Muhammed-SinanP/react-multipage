import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='bg-blue-400 text-white font-medium text-center py-4 bottom-0'>© {year}</footer>
  )
}

export default Footer