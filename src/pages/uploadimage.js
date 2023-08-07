import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
import { storage } from "firebaseconfig";
import { v4 } from "uuid";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function uploadimage() {

    const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    }).then(() => {
      alert('image uploaded');
    })

    
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/
    4.0.0/css/bootstrap.min.css"/>
    
    <script src="https://ajax.googleapis.com/ajax/libs/
    jquery/3.3.1/jquery.min.js">
    </script>
   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/
    popper.js/1.12.9/umd/popper.min.js">
    </script>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/
    4.0.0/js/bootstrap.min.js">
    </script>

      <Header/>

<div className="justify-center items-center text-center mt-7 mb-5">
        <input
        type="file"
        classNam
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      
      <button onClick={uploadFile} className="bg-yellow-400 px-3 py-1   text-white text-sm font-semibold   rounded"> Upload Image</button>
      </div>
      <div class=" grid grid-cols-3 gap-2 mx-auto">
   
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
  
  </div>

  <Footer/>
    </div>
  )
}

export default uploadimage