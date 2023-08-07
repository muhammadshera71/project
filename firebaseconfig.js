
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAg5eFZd-2yveHndXyw_serdrVqFj8Uxc",
  authDomain: "next-auth-crud-cb719.firebaseapp.com",
  projectId: "next-auth-crud-cb719",
  storageBucket: "next-auth-crud-cb719.appspot.com",
  messagingSenderId: "410499692742",
  appId: "1:410499692742:web:c8b5efb265f53d0aea7fc7",
  measurementId: "G-RFGDQ05KWV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);
export const storage = getStorage(app);