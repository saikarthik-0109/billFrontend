import React, { useState } from 'react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'


const Login = () => {


const [state,setState]=useState({
  email:"",
  password:""
})

let handleChange=(e)=>{
let {name,value}=e.target
setState({...state,[name]:value})
}

let handleSubmit=(e)=>{
e.preventDefault()

console.log(state);

}

  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center '>
        <form action="" className='w-1/3 h-[50%] rounded-3xl shadow-2xl flex justify-center items-center flex-col
      gap-6 px-[60px]  max-sm:w-[90%] overflow-auto ' onSubmit={handleSubmit} >
        <div className=' w-full flex justify-center items-center'>
      <h1 className='font-bold text-4xl '>Login Form</h1>
     </div>
            <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
                <input type="email" placeholder='Enter Email' name='email' className='w-full outline-0' onChange={handleChange}/>
                <span><MdOutlineMailOutline/></span>
            </div>
            <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
                <input type="password"  placeholder='Enter password' name='password' className='w-full outline-0' onChange={handleChange}/>
                <span><RiLockPasswordLine /></span>
            </div>
            
     <div className=' w-full flex justify-center items-center  border-2 rounded-sm   border-none hover:bg-gray-700 active:bg-gray-950 active:scale-90 bg-black'>
      <button className='h-12 w-full text-white font-bold text-md  tracking-widest '>Click</button>
     </div>
        </form>
    </div>
  )
}

export default Login