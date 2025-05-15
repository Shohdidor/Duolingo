import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaHome, FaCog, FaGlobe, FaUserCircle } from 'react-icons/fa'

function Layout() {
  let { pathname } = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-200 transition-all duration-300 ease-in-out">
        {/* Sidebar */}
        <div
          className={`w-64 bg-white shadow-lg rounded-lg p-6 space-y-6 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transform md:w-72`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-center text-green-600">Duolingo</h2>
            <button
              className="text-green-600 md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
          <ul className="space-y-4">
            <Link to="/duolingo">
              <li
                className={`flex items-center gap-3 text-lg font-medium px-4 py-4 text-[20px] rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-green-500 hover:text-white ${
                  pathname === '/duolingo' ? 'bg-green-500 text-white' : 'text-gray-800'
                }`}
              >
                <FaHome />
                Home
              </li>
            </Link>
            <Link to="settings">
              <li
                className={`flex items-center gap-3 text-lg font-medium px-4 py-4 text-[20px] rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-green-500 hover:text-white ${
                  pathname === '/settings' ? 'bg-green-500 text-white' : 'text-gray-800'
                }`}
              >
                <FaCog />
                Settings
              </li>
            </Link>
            <Link to="global">
              <li
                className={`flex items-center gap-3 text-lg font-medium px-4 py-4 text-[20px] rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-green-500 hover:text-white ${
                  pathname === '/global' ? 'bg-green-500 text-white' : 'text-gray-800'
                }`}
              >
                <FaGlobe />
                Global
              </li>
            </Link>
            <Link to="profile">
              <li
                className={`flex items-center gap-3 text-lg font-medium px-4 py-4 text-[20px] rounded-lg cursor-pointer transition-all ease-in-out duration-300 hover:bg-green-500 hover:text-white ${
                  pathname === '/profile' ? 'bg-green-500 text-white' : 'text-gray-800'
                }`}
              >
                <FaUserCircle />
                Profile
              </li>
            </Link>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg ml-6">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
