import Banner from '@/components/Banner'
import Product from '@/components/Product'
import React from 'react'
import { productsData} from "./api/api";
import { useLoaderData } from 'react-router-dom';


function Home() {


  return (
    <div>
      <Banner/>
      
      <Product/>
    </div>
  )
}

export default Home
