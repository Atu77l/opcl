import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home