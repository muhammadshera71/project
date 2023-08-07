import React from 'react'
import { useEffect,useState } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'


import { getAllEvents, getEventById } from 'DUMMY_DATA';
import { useRouter } from 'next/router';

export default function event() {

  const router =useRouter();
  const id = router.query.id;
  const [ev,setEv]=useState({});

  useEffect(()=>{

    const event =getEventById(id);
    setEv(event);

  }
  
  )

  return (
    <div>
    <Header/>
    <div className='min-h-screen  flex flex-col items-center justify-center'> 
   

    <button className="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded self-center "
    onClick={()=> router.push('/Products')}
    >Back</button>
      <div className='w-[60%] h-[200px] rounded-md flex '>
      
        <img
          src={ev?.image}
          className='w-[150px] h-[150px]'
        ></img> 
        <div className='p-5'
        >
          <h2 className='font-bold text-lg'>{ev?.title}</h2>
          <h3 className='font-bold'>{ev?.date}</h3>
          <p className='text-black'>{ev?.location}</p>
          <div className='flex items-end  justify-end mt-3'>

          </div>
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  )
}
