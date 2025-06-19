import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

const Register = () => {

  let [formData,setformData]=useState({})
  let [RepeatPassword,setRepeatPassword] =useState("")
  let handleChange=(e)=>{
    let {name,value} =e.target
    setformData({...formData,[name]:value})

  }
  let checkPassword=(e)=>{

   let{value}= e.target
   setRepeatPassword(value)
   if(RepeatPassword ==formData.password)
   {
    return true
   }
   else{
    return false
   }
  }
  let handleSubmit=(e)=>{
e.preventDefault()
console.log(formData);
 
  }




  

  return (

    <div className='bg-[#efefef] size-full flex justify-center items-center '>
      <form action="" className='w-1/2 h-[80%] rounded-3xl shadow-2xl flex justify-center items-center flex-col
      gap-7 px-[60px]  max-sm:w-[90%] overflow-auto ' onSubmit={handleSubmit}> 
     <div className=' w-full flex justify-center items-center'>
      <h1 className='font-bold text-3xl   '>Registration Form</h1>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="text" name='name' placeholder='Enter Name' className='w-full outline-0' onChange={handleChange}/>
      <span><CgNametag /></span>
     </div>
      
      <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5' >
      <input type="text" name='userName' placeholder='Enter username' className='w-full outline-0' onChange={handleChange }/>
      <span><FaRegUser /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="email" name='email'  placeholder='Enter email' className='w-full outline-0'onChange={handleChange}/>
      <span><MdOutlineMailOutline /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="password" name='password' placeholder='Enter password' className='w-full outline-0' onChange={handleChange}/>
      <span><RiLockPasswordLine /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="password" name='Repeatpassword' placeholder='Re-Type password' className='w-full outline-0' onChange={checkPassword} />
      <span><MdPassword /></span>
     </div>

     <div className=' w-full flex justify-center items-center  border-2 rounded-sm  bg-black '>
      <button className='h-10 w-full text-white font-bold text-md'>Click</button>
     </div>
      </form>
    </div>
  )
}

export default Register
// framwwork bg-[#efefef] w-[100%] h-[100%] size-full  created and registeration pagegi