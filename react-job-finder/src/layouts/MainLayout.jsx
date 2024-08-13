import React from 'react'
import Navbar from "../components/Navbar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
      <div>
          <Navbar/>
      <Outlet />
      <ToastContainer/>
    </div>
  )
}

export default MainLayout