import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPassword } from "react-icons/md";
import { validatePassword } from 'val-pass';
import toast from 'react-hot-toast';
import empServices from '../service/empServices';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [formData,setformData]=useState({
    name:"",
    userName:"",
    email:"",
    password:""
  })
  const [RepeatPassword,setRepeatPassword] =useState(true)
  const [errorMessage,setErrorMessage]=useState("")
  const navigate=useNavigate("")

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
  toast.error("password and repeatPassword are not matched")
  return 
}

(async()=>{
try {
  let data=await empServices.regiUser(formData)
  console.log(data);

  
  if(data.status == 201){
    toast.success("Registered SuccessFully")
    navigate("/login")
   
  }
  else{
    toast.error("something went wrong")
    
  }
} catch (error) {
  toast.error("something went wrong")
}
})()
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
      


     <div className=' w-full flex justify-center items-center  border-2 rounded-sm   border-none hover:bg-black active:bg-black active:scale-[o.5] bg-black'>
      <button className='h-12 w-full text-white font-bold text-md  tracking-widest '>Click</button>
     </div>
      </form>
    </div>
  )
}

export default Register
// framwwork bg-[#efefef] w-[100%] h-[100%] size-full  created and registeration pagegi