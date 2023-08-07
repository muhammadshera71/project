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



function dashboard2() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

  const [productsData, setProductsData] = useState([]);

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
    await getDocs(collection(database, 'Products'))
      .then((response) => {
        setProductsData(response.docs);
      })
  }




  const deleteField = async (id) => {
    // console.log(id);
    let fieldToDelete = doc(database, 'Products', id);
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

    await addDoc(collection(database, 'Products'), {
      name: name,
      price: price,
      description: description
    })
      .then(() => {
        alert('Data Saved');
        setName('');
        setPrice('');
        setDescription('');
        router.push('/dashboard2');
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
        <Header/>
       
      <div className='flex flex-col -mx-3 mb-6 justify-center items-center'>
        
       
        

        <div class="p-8 rounded border border-gray-200 mt-3">
  <h1 class="font-medium text-3xl">Add Product</h1>
  <p class="text-gray-600 mt-6">A product description is the marketing copy that explains what a product is and why it's worth purchasing. </p>

  
    <div class="mt-8 space-y-6">
      <div>
        <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Product Name</label>
        <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-black focus:border-black text-black w-full" placeholder="Enter Product name"  required
        value={name}
        onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Product Price</label>
        <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-black focus:border-black text-black w-full" placeholder="Mention Product price"  required
        value={price}
        onChange={(e) => setPrice(e.target.value)}  />
      </div>

      <div>
        <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Product Description</label>
        <input type="text" name="job" id="job" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-black focus:border-black text-black w-full" placeholder="All details of product"  required
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
    </div>

    <div class="space-x-4 mt-8">
      <button type="submit" 
      onClick={addData}
      class="py-2 px-4 bg-black text-white rounded hover:bg-black active:bg-black disabled:opacity-50">insert</button>

      
      <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
      onClick={()=> router.push('maincode')}
      >Cancel</button>
    </div>
  

</div>
<div className='ml-12'></div>
<div className='justify-center items-center grid grid-cols-4 gap-3 mt-5'>

{productsData.map((event)=>(

    <div class=" max-w-xs bg-gray-100 shadow-lg rounded-lg overflow-hidden my-10">
  <div class="px-4 py-2">
    <h1 class="text-gray-900 font-bold text-2xl uppercase">{event.data().name}</h1>
    <p class="text-gray-600 text-sm mt-1">{event.data().description}</p>
  </div>
  <div class="flex items-center justify-around px-4 py-2 bg-gray-900">
    <h1 class="text-gray-200 font-bold text-xl">{event.data().price}</h1>
    <button className="px-3 py-1 bg-green-600   text-white text-sm font-semibold  rounded"
                      onClick={() => router.push('/update/' + event.id)}>
                      update
                    </button>
    <button  onClick={() => deleteField(event.id)} class="px-3 py-1 bg-red-700 text-sm text-white font-semibold rounded">Delete</button>
  </div>
</div>


))}
</div>



</div>


        <div>



        </div>
      

      <Footer/>
      
    </div>
  )
}

export default dashboard2