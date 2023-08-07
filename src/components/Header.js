import React from 'react'
import { useRouter } from 'next/router'
import { useLocation } from 'react-router-dom';

function Header() {

  const router=useRouter();
  const logout = () => {
    
    sessionStorage.removeItem('Token')
    router.push('/')

  }


  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
          <div >
            <img className='w-28' src='/assets/Amazon.png' alt='logodark' onClick={()=> router.push('maincode')} />
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300' onClick={()=> router.push('maincode')}>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300' onClick={()=> router.push('support')}>Help & Support</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300' onClick={()=> router.push('Products')}>Products</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300' onClick={()=> router.push('dashboard2')}>Dashboard</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px]
            cursor-pointer duration-300' onClick={logout}>logout</li>
          
          
          </ul>

            <div className='relative'>
              <img className='w-6 cursor-pointer' src='/assets/cart.png' onClick={()=> router.push('Cart')}/>
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>
                
              </span>
            </div>
            <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-white bg-yellow-400 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Muhammad <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            <img className='w-8 h-8 rounded-full' src='/assets/userlogo.png'/>
            <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Muhammad</div>
      <div class="font-medium truncate">muhammadshera71@gmail.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a onClick={()=> router.push('dashboard')} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Help & Support</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
            </button>

        </div>
      </div> 
       
    </div>
  )
}

export default Header