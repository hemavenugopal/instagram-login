import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    const[userName, setUserName] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();

   async function handleLogin(e){
    try{
        e.preventDefault();

        const loginDetails = await axios.post("https://instagram-login-backend-36sf.onrender.com/login", {
  userName,
  password
});
        
        if(loginDetails.data.success){
            navigate("/home")

        }
        else{
            navigate("/fail")
        }}catch(error){
            console.log(error);
            navigate("/fail")
            
        }



    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-200' >
    <form onSubmit={handleLogin} className='bg-white p-8 rounded w-full max-w-sm '>
        <h2 className='text-3xl font-bold text-center mb-6'>Instagram</h2>
        <input className='w-full p-2 border border-gray-300 rounded mb-4' value={userName} type='text' placeholder='Username'  required
        onChange={(e) => setUserName(e.target.value)} />
        <input className='w-full p-2 border border-gray-300 rounded mb-4' value={password} type='password' placeholder='password'  required
        onChange={(e) => setPassword(e.target.value)}/>
        <button className='w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-600'>Log In</button>
        <h2 className='mt-5'>OR</h2>
        <h2 className='flex items-center justify-center mt-5 space-x-2'>    
            <FaFacebook className="text-blue-500 hover:text-blue-700 w-6 h-6" />
           <span className='text-blue-400'>Login with Facebook</span> </h2>
           <h2 className='items-center mt-5 text-gray-500'>Forgotten your password?</h2>
    </form>
    <div className='bg-white p-4 mt-4 rounded w-full max-w-sm text-center'>
        <span className='text-gray-700'>Don't have an account?
            <a href='#' className='text-blue-500 hover:underline'>
        Sign Up
      </a>
        </span>

    </div>
    
    </div>
    
  )
}

export default Login
