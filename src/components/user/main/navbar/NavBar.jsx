import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";
import { contextApi } from '../../../context/Context';

const NavBar = () => {
    const [show,setShow] =useState(false)
    const [showBox,setShowBox] =useState(false)
    const {setGlobalState} =useContext(contextApi)
    const handleShow=()=>{ 
        setShow(!show)
    }
    // console.log(show);
    const handleShowBox=()=>{
      setShowBox(!showBox)
      // console.log(showBox);
      
    }

    const handleLogout=()=>{
setGlobalState((preVal)=>({...preVal,token:null}));
    }

  return (
    <div className= {`w-full h-[80px] flex justify-around items-center bg-black text-amber-50 text-2xl max-sm:justify-start fixed  
     max-sm:px-8  ${show?'h-[210px] flex flex-col justify-around items-start gap-2.5 py-4':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`  }  >
        <div className='hidden max-sm:flex   '>
         {
            show?  <FaRegWindowClose onClick={handleShow}/>:<LuMenu  onClick={handleShow}/>
         }
        </div>
           <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="/home" className={({isActive})=>{
              return isActive?'bg-amber-50 text-black p-2 rounded-2xl':""
              
            } } end>Home</NavLink>
           </div>
            <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="addbill" className={({isActive})=>{ 
              return isActive?'bg-amber-50 text-black p-2 rounded-2xl  ':""

            }}>Add Bills</NavLink>
           </div>
            <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="filterbills" className={({isActive})=>{
              return  isActive?'bg-amber-50 text-black rounded-2xl p-2':""

            }}>Filter Bills</NavLink>
           </div>
            <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="about" className={({isActive})=>{
              
             return  isActive?'bg-amber-50 text-black rounded-2xl p-2 ':""

            }}>About</NavLink>
           </div>

           <div className={`max-sm:hidden${show?'block':""}`}>
            <button className='bg-red-700 p-2 rounded-2xl hover:bg-red-400 active:scale-[0.8] ease-in-out duration-400' onClick={handleShowBox}>Logout</button>
           </div>
           {
            showBox && <div className='size-full fixed    h-[100vh] w-[100vw] flex justify-center items-center flex-col inset-0'>
             <div className='flex size-full justify-center items-center '>
              <div className='size-1/2 bg-yellow-300 flex flex-col justify-center items-center gap-5'>
               <h1 className='flex text-black text-3xl font-bold '>Do You Want To Logout ?</h1>

              <div className='flex justify-center gap-10 items-center'>
              <button className='px-5 py-2 rounded-2xl  bg-red-500  active:scale-[0.8] ease-in-out duration-400' onClick={handleLogout}>Yes</button>
              <button className='bg-lime-500 rounded-2xl px-5 py-2 active:scale-[0.8] ease-in-out duration-400' onClick={handleShowBox}>No</button>
             </div>
              </div>
             </div>

            </div>

           }
    </div>
  )
}

export default NavBar