import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
    const [show,setShow] =useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    console.log(show);
    
  return (
    <div className= {`w-full h-[80px] flex justify-around items-center bg-black text-amber-50 text-2xl max-sm:justify-start   max-sm:px-8  ${show?'h-[210px] flex flex-col justify-around items-start gap-2.5 py-4':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`  }  >
        <div className='hidden max-sm:flex   '>
         {
            show?  <FaRegWindowClose onClick={handleShow}/>:<LuMenu  onClick={handleShow}/>
         }
        </div>
           <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="/home">Home</NavLink>
           </div>
            <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="addbill">Add Bills</NavLink>
           </div>
            <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="filterbills">Filter Bills</NavLink>
           </div>
            <div className={`max-sm:hidden${show?'block':""}`}>
            <NavLink to="about">About</NavLink>
           </div>
    </div>
  )
}

export default NavBar