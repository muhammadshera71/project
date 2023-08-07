import { database } from 'firebaseconfig';
//import { async } from '@firebase/util';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


import {   doc, updateDoc, deleteDoc } from 'firebase/firestore'

function Slider() {

    const [name,setName]=useState("");
    const [marks,setMarks]=useState("");

    const [studentsData, setStudentsData] = useState([]);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        getData();
      }, [])

      const getDataslider = async () => {
        await getDocs(collection(database, 'Slider'))
        .then((response) => {
          setStudentsData(response.docs);
        })
      }

      const deleteField = async (id) => {
        // console.log(id);
        let fieldToDelete = doc(database, 'Slider', id);
        await deleteDoc(fieldToDelete)
        .then(() => {
          alert('Data Deleted');
          getData();
        })
        .catch((err) => {
          console.log(err);
        })
      

        
     
      }

      const getData = async () => {
        await getDocs(collection(database, 'Slider'))
        .then((response) => {
          setStudentsData(response.docs);
        })
      }
      
     const addData= async (e) => {
        e.preventDefault();
        
        await addDoc(collection(database, 'Slider'), {
          name: name,
          marks: marks
        })
        .then(() => {
          alert('Data Saved');
          setName('');
          setMarks('');
          router.push('/insert');
        })
        .catch((err) => {
          console.log(err);
        })

      }
    

  return (
    <div class="flex flex-col -mx-3 mb-6 justify-center items-center">

<div class="flex -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block  bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Muhammad"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      
      />
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    
     </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Text" placeholder="Address"
      value={marks}
      onChange={(e)=> setMarks(e.target.value)}
      />
      <p class="text-gray-600 text-xs italic">Make it as long as you'd like</p>
    </div>
  </div>

  <button 
   onClick={addData}
  class="appearance-none block  bg-black text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-indigo-700">Insert</button>



    



        <table className="min-w-full text-left text-sm font-light">
          <thead className=" border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Marks</th>
              <th scope="col" className="px-6 py-4">Actions</th>
             
            </tr>
          </thead>
          <tbody>
            
          {studentsData.map((Slider) => {
            
          return (
            <tr key={Slider.data().id} className="border-b dark:border-neutral-500 bg-white">
              <td className="whitespace-nowrap px-6 py-4 font-medium">{Slider.data().name}</td>
              <td className="whitespace-nowrap px-6 py-4">{Slider.data().marks}</td>
              <td className="whitespace-nowrap px-6 py-4 ">
                <button className="bg-green-600 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               onClick={() => router.push('/update/' + Slider.id)}
              >
    update
  </button>
  <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
   onClick={() => deleteField(Slider.id)}
  >
   delete
  </button></td>
             
            </tr>
          )
        })}

            
            
            
          </tbody>
        </table>







    </div>
  )
}

export default Slider