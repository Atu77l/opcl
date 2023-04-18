import React from 'react'
import logo from './../logo.webp'
import { FacebookRounded, Google, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
    <div className="bg-blue-200">
    <div className="flex flex-row max-md:flex-col"></div>
    <div className="flex  bg-blue-200">
    <img src={logo} alt="logo" className="h-10 w-20 m-5"/>
    <div className="text-xl m-5 font-bold">OCPL Tech</div>
    </div>
    <div className="float-right flex flex-row -mt-20">
        <h3 className="text-xl font-bold m-5">Privacy Policy</h3>
        <h3 className="text-xl font-bold m-5">License</h3>
        <h3 className="text-xl font-bold m-5">Terms & Conditions</h3>
    </div>
    
    <hr className="text-black ml-10 mr-10 font-bold"></hr>
    <div className="flex flex-row text-center justify-center max-md:flex-col">
        <div className="flex flex-row p-5 ml-30 pl-20 max-md:text-center">
         <FacebookRounded/>
         <Twitter/>
         <LinkedIn/>
         <Google/>
        </div>
        <div className="text-l text-black m-5">
        © 2023  OCPL TECH. All Rights Reserved.
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer