import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { RiSortNumberDesc } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { PiSealPercentLight } from "react-icons/pi";
import { PiSealPercentThin } from "react-icons/pi";


const Items = ({removeElement,val,updateElements}) => {
  // console.log(removeElement,val);
  

  const handleChange=(e)=>{
const {name,value} = e.target
     updateElements(val.id,name,value)
  }

 
  return (
    <>
    
         <div className='w-full flex justify-end items-center py-0 px-1 gap- '>
          <div className='flex items-center gap-2 bg-red-400 px-4 py-1 rounded-xl hover:bg-red-600 text-amber-200 hover:text-amber-100 hover:font-medium cursor-pointer'
          onClick={()=>{
            removeElement(val.id)
          }}>
          <div className=''  >remove-Items</div>
         <CiCircleRemove />
         </div>

         </div>


         <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='description' placeholder='Enter Description Name' className='w-full outline-none '
          value={val.description} onChange={handleChange}/>
         <LiaAudioDescriptionSolid />
         </div>

          
          <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5' >
          <input type="text" name='quantity' placeholder='Enter Quantity' className='w-full outline-0'
          value={val.quantity} onChange={handleChange }/>
          <RiSortNumberDesc />
         </div>


         <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='rate'  placeholder='Enter rate' className='w-full outline-0 ' 
          value={val.rate} onChange={handleChange}/>
         <GiPriceTag />
         </div>


         
         

          <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='cgstPercent' placeholder='Enter cgst percent' className='w-full outline-0' 
           value={val.cgstPercent} onChange={handleChange}/>
           <PiSealPercentLight />
         
         </div>

        

       <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='sgstPercent' placeholder='Enter sgst percent ' className='w-full outline-0'
           value={val.sgstPercent} onChange={handleChange}/>
        <PiSealPercentThin />
         </div>


     
         
          
        </>
  )
}

export default Items