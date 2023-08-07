import React from 'react'

export default function 
() {
  return (
    <div>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />

<div id="default-carousel" class="relative w-full" data-carousel="slide">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/Banner.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/Banner2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/Banner3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/Banner4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/assets/7.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
  
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <img src='/assets/Amazon.png'/>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <img src='/assets/Amazon.png'/>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

    </div>
  )
}

// import React, { useState } from 'react'
// import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';


// function Banner() {
//     const [currentSlide, setCurrentSlide] = useState(0)
//     const data=[
//       "/assets/7.jpg",
//       "/assets/7.jpg",
//       "/assets/7.jpg",
//       "/assets/7.jpg",
        
//     ];

//     const prevSlide=()=>{
//       setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
//      }

//      const nextSlide=()=>{
//       setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
//      } 
     
//   return (
//     <div className='w-full h-auto overflow-x-hidden'>
//       <div className='w-screen h-[650px] relative'>
//         <div style={ { transform:'translateX(-${currentSlide * 100}vw)' }} 
//         className='w-[400vw] h-full flex transition-transform duration-1000'>

//           <img 
//           className='w-screen h-full object-cover'
//           src={data[0]}
//           alt='ImgOne'
//           loading='priority'
//           />
//           <img 
//           className='w-screen h-full object-cover'
//           src={data[1]}
//           alt='ImgOne' 
//           />
//           <img 
//           className='w-screen h-full object-cover'
//           src={data[2]}
//           alt='ImgOne'
//           />
//           <img 
//           className='w-screen h-full object-cover'
//           src={data[3]}
//           alt='ImgOne'
//           />
//                   </div>
//                   <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
//                     <div onClick={prevSlide}
//                     className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
//                     active:bg-gray-900 duration-300 '>
//                       <HiArrowLeft/>
//                     </div>
//                     <div onClick={nextSlide} 
//                     className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
//                     active:bg-gray-900 duration-300 '>
//                       <HiArrowRight/>
//                     </div>
//                   </div>
//       </div>
//     </div>
//   )
  
// }

// export default Banner