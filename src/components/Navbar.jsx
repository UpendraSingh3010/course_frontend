import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
     <nav className="bg-[#002B5B] py-4 px-8 flex justify-evenly items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-white font-medium text-lg ${isActive ? 'border-b-2 border-white pb-1' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/add-course"
        className={({ isActive }) =>
          `text-white font-medium text-lg ${isActive ? 'border-b-2 border-white pb-1' : ''}`
        }
      >
        Add New Course
      </NavLink>
      <NavLink
        to="/add-instance"
        className={({ isActive }) =>
          `text-white font-medium text-lg ${isActive ? 'border-b-2 border-white pb-1' : ''}`
        }
      >
        Add Instance
      </NavLink>
      <NavLink
        to="/instance"
        className={({ isActive }) =>
          `text-white font-medium text-lg ${isActive ? 'border-b-2 border-white pb-1' : ''}`
        }
      >
        Instance
      </NavLink>
    </nav>
  )
}

export default Navbar