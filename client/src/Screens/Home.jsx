import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'


const Home = () => {
  return (
    <>
   <div> <Navbar/> </div>
    <div><Cart/></div>
     <div><Footer/></div>
    </>
  )
}

export default Home