import React from 'react'
import { CgNametag } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

const Register = () => {
  return (

    <div className='bg-[#efefef] size-full flex justify-center items-center '>
      <form action="" className='w-1/2 h-3/4 rounded-3xl shadow-2xl flex justify-center items-center flex-col
      gap-5 px-[80px] '> 
     <div className=' w-full flex justify-center items-center'>
      <h1 className='font-bold text-3xl'>Registration Form</h1>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="text" name='' placeholder='Enter Name' className='w-full outline-0'/>
      <span><CgNametag /></span>
     </div>
      
      <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5' >
      <input type="text" name='' placeholder='Enter username' className='w-full outline-0'/>
      <span><FaRegUser /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="email" name=''  placeholder='Enter email' className='w-full outline-0'/>
      <span><MdOutlineMailOutline /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="password" name='' placeholder='Enter password' className='w-full outline-0'/>
      <span><RiLockPasswordLine /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm px-4 py-1.5'>
      <input type="password" name='' placeholder='Re-Type password' className='w-full outline-0'/>
      <span><MdPassword /></span>
     </div>

     <div className=' w-full flex justify-center items-center  border-2 rounded-sm  bg-black '>
      <button className='h-10 text-white font-bold text-md'>Click</button>
     </div>
      </form>
    </div>
  )
}

export default Register
// framwwork bg-[#efefef] w-[100%] h-[100%] size-full  created and registeration pagegi