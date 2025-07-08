import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
    const [show,setShow] =useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    // console.log(show);
    
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
    </div>
  )
}

export default NavBar