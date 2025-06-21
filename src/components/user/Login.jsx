import React from 'react'
import { MdOutlineMailOutline } from 'react-icons/md'

const Login = () => {
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center '>
        <form action="" className='w-1/2 h-[90%] rounded-3xl shadow-2xl flex justify-center items-center flex-col
      gap-7 px-[60px]  max-sm:w-[90%] overflow-auto ' >
        <div className=' w-full flex justify-center items-center'>
      <h1 className='font-bold text-4xl '>Login Form</h1>
     </div>
            <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
                <input type="email" placeholder='Enter Email' />
                <span><MdOutlineMailOutline/></span>
            </div>
            <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
                <input type="password"  placeholder='Enter password'/>
            </div>
            
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm   border-none hover:bg-black active:bg-black active:scale-[o.5] bg-black'>
      <button className='h-12 w-full text-white font-bold text-md  tracking-widest '>Click</button>
     </div>
        </form>
    </div>
  )
}

export default Login