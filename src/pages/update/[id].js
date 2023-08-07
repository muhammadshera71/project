
// import { async } from '@firebase/util';

import { collection, deleteDoc, deleteField, doc, getDocs, updateDoc } from 'firebase/firestore';
import { database } from 'firebaseconfig';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function Update() {
    const [name,setName]=useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [productsData, setProductsData] = useState([]);
    const [username, setUsername] = useState([]);
    
    const router=useRouter();
    const id = router.query.id;
    
    console.log(id);
    // router.push('/');
    

    const updateFields = async (e) => {
      e.preventDefault();
        let fieldToEdit = doc(database, 'Products', id);
        await updateDoc(fieldToEdit, {
            name: name,
            price: price,
            description: description
        })
        
        .then(() => {
          alert('Data Updated');
          router.push('/dashboard2');
        })
        .catch((err) => {
          console.log(err);
        })
      }

   

      

        
    
    
  return (
    <div class="">
    <Header/>
   
  <div className='flex flex-col -mx-3 mb-6 justify-center items-center'>
    
   
    

    <div class="p-8 rounded border border-gray-200 mt-3">
<h1 class="font-medium text-3xl">Update Product</h1>
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
  onClick={updateFields}
  class="py-2 px-4 bg-black text-white rounded hover:bg-black active:bg-black disabled:opacity-50">Update</button>

  
  <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
  onClick={()=> router.push('/')}
  >Cancel</button>
</div>


</div>



</div>


    <div>



    </div>
  

  <Footer/>
  
</div>
)
}  
  

export default Update