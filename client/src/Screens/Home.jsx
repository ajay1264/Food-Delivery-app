import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import Carousel from '../components/Carousel'


const Home = () => {
  return (
    <>
   <div> <Navbar/> </div>
   <div><Carousel/> </div>
    <div><Cart/></div>
     <div><Footer/></div>
    </>
  )
}

export default Home