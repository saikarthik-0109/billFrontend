import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPassword } from "react-icons/md";
import { validatePassword } from 'val-pass';
import toast from 'react-hot-toast';

const Register = () => {

  const [formData,setformData]=useState({})
  const [RepeatPassword,setRepeatPassword] =useState(true)
  const [errorMessage,setErrorMessage]=useState("")
  let handleChange=(e)=>{
    let {name,value} =e.target
    if(name =="password"){
      let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
      console.log(validateAll); // returns boolean 
      validateAll()? setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
      value=="" && setErrorMessage("")
    }
    setformData({...formData,[name]:value})

  }
  const checkPassword=(e)=>{

   let{value}= e.target
   
   formData.password!=value?setRepeatPassword(false):setRepeatPassword(true)
   value="" && setRepeatPassword(true)
   
  }
  const handleSubmit=(e)=>{
e.preventDefault()
let {name,userName,password,email}=formData
if(!name || !userName || !email || !password) 
  {
toast.error("All fields Are mandatory")
return
  }
  
 let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
if(!validateAll())
{
  toast.error(`${getAllValidationErrorMessage()}`)
  return
}

if(!RepeatPassword)
{
  toast.error("password and repaeatPassword are not matched")
  return 
}


console.log(formData);

  }
 





  return (

    <div className='bg-[#efefef] size-full flex justify-center items-center '>
      <form action="" className='w-1/2 h-[90%] rounded-3xl shadow-2xl flex justify-center items-center flex-col
      gap-7 px-[60px]  max-sm:w-[90%] overflow-auto ' onSubmit={handleSubmit}> 
     <div className=' w-full flex justify-center items-center'>
      <h1 className='font-bold text-4xl '>Registration Form</h1>
     </div>
     <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
      <input type="text" name='name' placeholder='Enter Name' className='w-full outline-0' onChange={handleChange}/>
      <span ><CgNametag /></span>
     </div>
      
      <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5' >
      <input type="text" name='userName' placeholder='Enter username' className='w-full outline-0' onChange={handleChange }/>
      <span><FaRegUser /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
      <input type="email" name='email'  placeholder='Enter email' className='w-full outline-0'onChange={handleChange}/>
      <span><MdOutlineMailOutline /></span>
     </div>
     <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
      <input type="password" name='password' placeholder='Enter password' className='w-full outline-0' onChange={handleChange}/>
      <span><RiLockPasswordLine /></span>
     </div>
     <div className={errorMessage?' w-full flex justify-center items-center   ':'hidden'}>
        <span className='text-red-400'>{errorMessage}</span>
      </div>
      
     <div className={` w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5 ${!RepeatPassword ?'border-red-700':'border-black'}`}>
      <input type="password" name='Repeatpassword' placeholder='Re-Type password' className='w-full outline-0' onChange={checkPassword} />
      <span><MdPassword /></span>
     </div>
      


     <div className=' w-full flex justify-center items-center  border-2 rounded-sm   border-none hover:bg-white active:bg-white active:scale-[o.5] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <button className='h-12 w-full text-white font-bold text-md  tracking-widest '>Click</button>
     </div>
      </form>
    </div>
  )
}

export default Register
// framwwork bg-[#efefef] w-[100%] h-[100%] size-full  created and registeration pagegi