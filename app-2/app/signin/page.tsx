
"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

 const Signin =  ()=>{

    const [name , setname] = useState('')
    const [password  , setpassword] = useState('');

    const router = useRouter()
       
    // const response  = axios.post("http://localhost:3000/api/v1/user/detail" , {
    //     password , name
    // })


      return <div className="h-screen w-screen flex flex-col text-lg items-center justify-center ">  
                <div>
                     <input className="border-2 border-slate-200 p-4" type="text" placeholder="username" onChange={(e)=> {
                        setname(e.target.value)
                     }} /> <br /><br />
                     <input className="border-2 border-slate-200 p-4" type="password" placeholder="password" onChange={(e)=>{
                         setpassword(e.target.value)
                     }}/>
                </div>
                
                <button className=" my-4 px-4 py-2 bg-white text-black rounded-md text-md cursor-pointer"  onClick={()=>{
                       axios.post("http://localhost:3000/api/v1/signin" , {
                        name , password
                       })

                       router.push('/signup')
                }}>Signin</button>
      </div>
    
}

export default Signin