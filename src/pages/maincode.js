import React from 'react'
import App from './App'
import Home from './Home'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cart from '@/pages/Cart'
import {useEffect} from "react";
import Slider from '@/components/Slider'






function index() {

  return (

    <div className='font-bodyFont'>
      <Header/>
      <Home/>
     
      <Footer/>

    </div>
  )
}

export default index