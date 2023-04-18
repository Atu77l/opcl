import React from 'react'
import logo from './../logo.webp'
import ocpl from './../ocpl_banner.PNG'


const Navbar = () => {
  return (
    <>
    <div className="flex flex-col">
    <div className="flex flex-row bg-blue-200 text-white">
        <img src={logo} alt="logo" className="h-20 w-20"/>
        <div className="text-xl font-bold m-5">Home</div>
        <div className="text-xl font-bold m-5">About</div>
        <div className="text-xl font-bold m-5">Contact</div>
        <div className="text-xl font-bold m-5">Service</div>
        <div className="text-xl font-bold m-5">Payment</div>
    </div>
        <img src={ocpl} alt="banner" className="w-screen"/>
    </div>
    
    </>
  )
}

export default Navbar