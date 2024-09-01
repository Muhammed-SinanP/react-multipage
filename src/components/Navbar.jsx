import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center bg-blue-400 px-10 py-5 text-2xl font-medium text-white'>
        <h1>REACT MULTIPAGE</h1>
        <ul className='flex flex-row justify-around gap-4'>
            <li className="hover:border-b-2 cursor-pointer"><NavLink to="/" className={({ isActive }) => (isActive ? "border-b-2" : "")}> Home</NavLink></li>
            <li className="hover:border-b-2 cursor-pointer"><NavLink to="/todo" className={({ isActive }) => (isActive ? "border-b-2" : "")}>Todo</NavLink></li>
            <li className="hover:border-b-2 cursor-pointer"><NavLink to="/countries" className={({ isActive }) => (isActive ? "border-b-2" : "")}>Countries</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar;