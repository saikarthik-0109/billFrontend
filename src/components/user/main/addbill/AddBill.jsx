import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Items from './Items'
import axios from 'axios'
import empServices from '../../../service/empServices'
import toast from 'react-hot-toast'
import { contextApi } from '../../../context/Context'

const AddBill = () => {
  const [items,setItems]=useState([])
  const {globalState}=useContext(contextApi)
  console.log(globalState);
  
  const navigate = useNavigate()
  const [bill,setBill]=useState({
    companyName:"",
    items:"",
    totalAmount:"",
    PoNo:"",
    invoiceDate: new Date().toISOString().split("T")[0],
    workCompletionDate:"",
    address:"",
    PAN:"",
    GSTNo:"",
    clientBankName:""
  })
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(bill);
    console.log(items);
    let {companyName,workCompletionDate,PoNo,address,PAN,GSTNo,clientBankName}=bill
    let totalAmount=items.reduce((acc,val)=>{
      const base=parseInt(val.amount)
      const cgst=base*parseInt(val.cgstPercent)/100
      const sgst=base*parseInt(val.sgstPercent)/100

      // console.log(base,cgst,sgst,acc);
      
      return acc+base+cgst+sgst
    },0)

    // console.log(bill);
    
    let payload={
      companyName,
      workCompletionDate,
      PoNo,
      address,
      PAN,
      GSTNo,
      clientBankName,
      items,
      invoiceDate: new Date().toISOString().split("T")[0],
      totalAmount
    }
    console.log(payload);
    console.log(new Date().toISOString().split("T")[0]);
    

     (async()=>{
    try {
      let data=await empServices.addbill(payload,globalState.token)
      console.log(data);
      
      if(data.status == 201)
      {
        toast.success("Bills added succesfully")
        navigate("/home")
      }
      else{
        toast.error("something went wrong")
      }
    } catch (error) {
      toast.error("spmething went wrong")
    }
  })()
    
  }
  const handleClick=()=>{
    // console.log("i am clicked");
    let newObj ={
      id:Date.now(),
      description:"",
      quantity:"",
      rate:"",
      cgstPercent:"",
      sgstPercent:""
    }
    setItems((preVal)=>([...preVal,newObj]))
    
  }
  const handleChange=(e)=>{
     const {name,value} = e.target
     setBill((preVal)=>({...preVal,[name]:value}))
  }

  const removeElement =(id)=>{
    setItems(items.filter((val)=>val.id!=id))
  }

  const updateElements=(id,name,value)=>{
    // console.log(id,name,value);
    
    setItems((preVal)=>{
     return preVal.map((val)=>{
        if(val.id==id){
      
          
          const updateItems={
            ...val,[name]:value
          }
          updateItems.amount=val.rate*val.quantity
          return updateItems
        }

        return val
      })

    })
  }

 

  return (


    <div className='bg-[#efefef] size-full flex justify-center items-center   '> 
          <form action="" className='w-1/2 h-[75%] rounded-3xl shadow-2xl flex  items-center flex-col
          gap-10 px-[60px] overflow-scroll max-sm:w-[90%] mt-20 ' onSubmit={handleSubmit}> 

         <div className=' w-full flex justify-center items-center  mt-9 '>
          <h1 className='font-bold text-4xl '>Add Bill</h1>
         </div>

         <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='companyName' placeholder='Enter Company Name' className='w-full outline-0' onChange={handleChange}/>
         </div>
          
          <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5' >
          <input type="text" name='items' placeholder='Enter Items' className='w-full outline-0' onChange={handleChange }/>
         </div>

         <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='PoNo'  placeholder='Enter PONO' className='w-full outline-0'onChange={handleChange}/>
         </div>


         <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="date" name='workCompletionDate' placeholder='Enter Work Completion Date' className='w-full outline-0' onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}/>
         </div>
         
          <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='address' placeholder='Enter Address' className='w-full outline-0' onChange={handleChange}/>
         </div>

        
       <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='PAN' placeholder='Enter PANCARD Number' className='w-full outline-0' onChange={handleChange}/>
         </div>


      <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='GSTNo' placeholder='Enter GST Number' className='w-full outline-0' onChange={handleChange}/>
         </div>

        <div className=' w-full flex justify-center items-center  border-1 rounded-sm px-4 py-1.5'>
          <input type="text" name='clientBankName' placeholder='Enter clientBankName' className='w-full outline-0' onChange={handleChange}/>
        
         </div>


{
  items.map((val)=><Items key={val.id} removeElement={removeElement} val={val}
  updateElements={updateElements}></Items>)
}



<div className=' w-full flex justify-center items-center  border-2 rounded-sm   border-none hover:bg-black active:bg-black active:scale-[o.5] bg-black '>
          <button className='h-12 w-full text-white font-bold text-md  tracking-widest ' type='button' onClick={handleClick}>Click to add items</button>
         </div>
          

         <div className=' w-full flex justify-center items-center  border-2 rounded-sm   border-none hover:bg-black active:bg-black active:scale-[o.5] bg-black mb-15'>
          <button className='h-12 w-full text-white font-bold text-md  tracking-widest '>Click</button>
         </div>
         
          </form>
        </div>
  )
}

export default AddBill