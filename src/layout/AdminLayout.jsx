import React from 'react'
import { Outlet } from "react-router-dom"

import Navbar from '../components/Navbar'
import AdminSidebar from '../components/AdminSidebar'

const AdminLayout = () => {
  return (    
    <div className='flex flex-col min-h-screen'>
        
        {/* Header/Navbar */}
        <div className="Navbar bg-black h-24 w-full">
          <Navbar/>
        </div>
        
        {/* Mainbox */}
        <div className="Mainbox flex-1 w-full flex">

          <div className="Sidebar bg-blue-400 w-32">
            <AdminSidebar/>
          </div>

          <div className="Maincontent bg-red-400 flex-1">
            <Outlet/>
          </div>

        </div>

    </div>
  )
}

export default AdminLayout
