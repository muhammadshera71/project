import { database } from 'firebaseconfig';
//import { async } from '@firebase/util';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import router from 'next/router'

import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import Slider from '@/components/Slider';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Dashboard1 from '@/components/Dashboard1';


function Insert() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const [studentsData, setStudentsData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      router.push('/login')
      setUsername(sessionStorage.getItem("username"))
    }
    else {
      getData();
    }
  }, [])


  const getData = async () => {
    await getDocs(collection(database, 'Students'))
      .then((response) => {
        setStudentsData(response.docs);
      })
  }


  const getDataslider = async () => {
    await getDocs(collection(database, 'Slider'))
      .then((response) => {
        setStudentsData(response.docs);
      })
  }

  const deleteField = async (id) => {
    // console.log(id);
    let fieldToDelete = doc(database, 'Students', id);
    await deleteDoc(fieldToDelete)
      .then(() => {
        alert('Data Deleted');
        getData();
      })
      .catch((err) => {
        console.log(err);
      })

  }


  const router = useRouter();

  // function main(){
  //     router.push('/')
  // }

  const addData = async (e) => {
    e.preventDefault();

    await addDoc(collection(database, 'Students'), {
      name: name,
      marks: marks
    })
      .then(() => {
        alert('Data Saved');
        setName('');
        setMarks('');
        router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      })






    // console.log(name);
    // console.log(marks);


  }
  console.log(name)

  return (
    <div class="">
       <Dashboard1/>
      <div className='flex flex-col -mx-3 mb-6 justify-center items-center'>
        
       
        <button className="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" onClick={()=> router.push('maincode')} c>Back to home</button>

        <div class="flex -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Product Name
            </label>
            <input class="appearance-none block  bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>

        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Price
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Text" placeholder="Price"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />

          </div>
        </div>

        <button
          onClick={addData}
          class="appearance-none block  bg-black text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-indigo-700">Insert</button>





<div style={{display:'flex'}}>
  

{studentsData.map((event)=>(

<div className=' bg-white  items-center justify-center'>
     
     

     <div className=' grid grid-cols-1'>

     <div class="m-4 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

     
    
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.data().name}</h5>
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{event.data().marks}</h5>
        <img src='/images/event3.jpg'/>

      
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
))}
</div>


        <div>



        </div>
      </div>
      
    </div>

  )
}

export default Insert