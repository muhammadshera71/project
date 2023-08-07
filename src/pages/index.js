import { app } from 'firebaseconfig';
import { useEffect } from 'react';
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function login() {

  const auth = getAuth();
  
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function simpleSignin(){
      try {
        await signInWithEmailAndPassword(auth, email, password)
        
        sessionStorage.setItem("username", email);
        router.push('maincode');
      } catch (error) {
	alert("Something went wrong with Signing In" + error);
      }
    }

  
    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token){
            router.push('/')
        }
    }, [])





  return (
    <div>
     <Header/>
     
     
      
      <div class="flex min-h-full flex-col justify-center px-6 py-12 gap-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="/assets/logo2.png" alt="Your Company"/>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(event) => setEmail(event.target.value)}
             value={email}
            />
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
  
        <div class="mt-7">
          <button type="submit" class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           onClick={simpleSignin} 
          >Login</button>
          
        </div>
        <p class="text-sm justify-center items-center text-center font-light text-black dark:text-black mt-10">
                      Don’t have an account yet? <a onClick={()=> router.push('Signup')} class="font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500">Sign up</a>
                  </p>
   
  
     
    </div>
  </div>
  <Footer/> 
  </div>
  )
}
