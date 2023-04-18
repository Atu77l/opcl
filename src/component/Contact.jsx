import React from 'react'
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <div className="bg-blue-100">
     <h1 className="text-center text-xl p-10">Contact Us</h1>
      <div className="p-20 border-2  border-black flex flex-col m-10">
        <label className="text-l">Name</label>
        <input type="text" placeholder="Enter Your Name" className=""/>
        <label className="text-l">Subject</label>
        <input type="text" placeholder="Enter Your Subject" className=""/>
        <label className="text-l">Email</label>
        <input type="text" placeholder="Enter Your Email" className=""/>
        <label className="text-l">Message</label>
        <input type="text" placeholder="Enter Your Message" className=""/>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  )
}

export default Contact