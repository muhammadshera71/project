import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Header from '@/components/Header'
import Footer from '@/components/Footer'


function Index_item({ event }) {
  const router = useRouter();
  return (


    <div className=' bg-white  items-center justify-center'>
     
     

     <div className=' grid grid-cols-1'>

     <div class="m-4 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

     
        <img class="rounded-t-lg" src={event.image} alt="" />
    
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{event.date}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.location}</p>

      
        <div className='p-5'>
          <h2 className='font-bold text-lg'></h2>
          
          <div className='flex items-end  justify-end mt-3'>
          <button onClick={() => router.push('/events/' + event.id)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
        </button>
          
          </div>
        </div>
      </div>
      </div>

    </div>
    </div>
  )
}

export default Index_item