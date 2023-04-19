import React,{useState} from 'react'
import logo from './../logo.webp'
import ocpl from './../ocpl_banner.PNG'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden max-md:flex max-md:flex-row">
      <img src={logo} alt="logo" className="h-24 w-24 ml-8"/>
      <MenuIcon sx={{margin:"20px",marginLeft:"20px",fontSize:"60px"}}onClick={()=>{setIsMenuOpen(!isMenuOpen);}}/>
      </div>
      { isMenuOpen && <div className=" hidden pt-3 mt-3 text-center bg-white border-2 rounded shadow w-screen text-purple-500 max-md:flex max-md:flex-col">
        <div className=" text-xl font-bold hover:bg-sky-700 ">Home</div>
        <div className="text-xl font-bold hover:bg-sky-700 ">About</div>
        <div className="text-xl font-bold hover:bg-sky-700 ">Contact</div>
        <div className="text-xl font-bold hover:bg-sky-700 ">Service</div>
        <div className="text-xl font-bold hover:bg-sky-700 ">Payment</div>
        </div>
      }
   <div className="flex flex-col max-md:hidden">
    <div className="flex flex-row bg-blue-200 text-white"> 
    <img src={logo} alt="logo" className="h-24 w-24 ml-8"/>
        <div className="flex flex-row pt-3  text-purple-500"style={{marginLeft:"750px"}}>
        <div className=" text-xl font-bold m-5">Home</div>
        <div className="text-xl font-bold m-5">About</div>
        <div className="text-xl font-bold m-5">Contact</div>
        <div className="text-xl font-bold m-5">Service</div>
        <div className="text-xl font-bold m-5">Payment</div>
        </div>
    </div>
        <img src={ocpl} alt="banner" className="w-screen"/>
    </div>
    
    </>
  )
}

export default Navbar