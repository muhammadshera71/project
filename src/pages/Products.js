import React from 'react'
import { useRouter } from 'next/router'
import Index_item from '../components/Index_item';
import { getAllEvents } from 'DUMMY_DATA';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Products() {
  const router =useRouter();
  const events=getAllEvents();
  console.log(events);
  return (
    <div>
      <Header/>
   <div className='n bg-white flex  items-center justify-center '>


    {
      events.map((event)=>{
        return<Index_item event={event}/>      })
    }

   </div>
   <Footer/>
   </div>
 )
}

export default Products