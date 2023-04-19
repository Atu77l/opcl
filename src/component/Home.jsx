import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Animation from './Animation'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Contact/>
        <Animation/>
        <Footer/>
    </div>
  )
}

export default Home