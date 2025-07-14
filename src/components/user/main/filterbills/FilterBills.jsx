import React, { useContext, useState } from 'react'
import empServices from '../../../service/empServices'
import { contextApi } from '../../../context/Context'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const FilterBills = () => {

  const [showCompanyNames,setShowCompanyNames] =useState(false)
  const [companyNames,setCompanyNames] =useState([])
  const {globalState} =useContext(contextApi)
  const navigate =useNavigate()
  // console.log(globalState);
  
   const [queries,setQueries]=useState({
  PoNo:"",
  fromWorkCompletionDate:"",
  toWorkCompletionDate:"",
  fromInvoicedate:"",
  toInvoiceDate:"",
  companies:[]
  })
  const handleChange=(e)=>{
     const {name,value,checked}=e.target
    if(name=="companies"){
     checked?setQueries((preVal)=>({...preVal,companies:[...preVal.companies,value]})):setQueries(preVal=>({...preVal,companies:preVal.companies.filter((val)=>val!=value)}))
    }else{
      setQueries((preVal)=>({...preVal,[name]:value}))
    }
  }

  const handleSubmit=(e)=>{
e.preventDefault()
// console.log(queries);
// let {PoNo,fromInvoicedate,fromWorkCompletionDate,toInvoiceDate,toWorkCompletionDate,companies}=queries

// const queryArray=[]
// PoNo && queryArray.push(`PoNo=${PoNo}`)
// fromInvoicedate && queryArray.push(`fromInvoicedate=${fromInvoicedate}`)
// fromWorkCompletionDate && queryArray.push(`fromWorkCompletiondate =${fromWorkCompletionDate}`)
// toInvoiceDate && queryArray.push(`toInvoiceDate${toInvoiceDate}`)
// toWorkCompletionDate && queryArray.push(`toworkCompletionDate=${toWorkCompletionDate}`)
// companies && queryArray.push(`companies=${companies}`)
// console.log(queryArray);

let query =new URLSearchParams(queries).toString();
console.log(query);

(async()=>{
  try {
    let data = await empServices.filteredBills(globalState.token,query)
    console.log(data);
    if(data.status == 200 && data.data.count == 0)
    {
      toast.error("no Bills are found")
    }
    else if (data.status == 200 && data.data.count>0) {
      toast.success("bills fetched successfully")
      navigate("/home/viewBills",{state:data.data.bills})
      
    }
    else{
      toast.error("something went wrong ")
    }
    
  } catch (error) {
    toast.error("something went wrong")
  }
})();


  }
  const handleShow=()=>{
           setShowCompanyNames(!showCompanyNames);
     (async()=>{
         try {
          let data =await empServices.companyNames(globalState.token)
          // console.log(data);
          if(data.status == 200)
          {
            // toast.success("company fetched")
            setCompanyNames(data.data.companies)
          }else{
            console.log(data);
            
            toast.error("something went wrong")
          }
          
         } catch (error) {
          toast.error("something went wrong")
         }
     })();
  }
  // console.log(queries);
  
  
  return (
    <>
    
    <div className=' size-full flex justify-center items-center'>
     <form action="" className=' h-[75%] w-1/2 shadow-2xl rounded-3xl flex items-center justify-center flex-col
     gap-5 px-[60px] overflow-scroll max-sm:w-[90%] mt-24   ' onSubmit={handleSubmit}>
     <div className='w-full flex justify-center items-center mt-35'>
      <h1 className='font-bold text-4xl'>Filter-Bills</h1>
     </div>
      <div className='border-1 w-full rounded-sm flex justify-center items-center px-4 py-2'>
        <input type="text" name='PoNo' placeholder='PONO' className='w-full outline-0' onChange={handleChange} />
      </div>
  <div className=' w-full rounded-sm flex justify-center items-center  py-2'>
    <label htmlFor="fromInvoice" className=' w-full px-0 outline-0 '>From Work-completion-Date :</label>
    <input type="date" name="fromWorkCompletionDate" id="" placeholder='' 
     className='py-2 px-2 w-full outline-0  border-1 rounded-sm'  max={new Date().toISOString().split("T")[0]}  onChange={handleChange}/>
  </div>

    <div className=' w-full rounded-sm flex justify-center items-center py-2'>
     <label htmlFor="fromInvoice" className=' w-full px-0 outline-0 '>To-- Work-completion-Date :</label>
    <input type="date" name="" id="" placeholder='' 
     className='py-2  px-2 w-full outline-0  border-1 rounded-sm'  max={new Date().toISOString().split("T")[0]}  onChange={handleChange}/>
  </div>

 

  <div className=' w-full rounded-sm flex justify-center items-center py-2'>
     <label htmlFor="fromInvoice" className=' w-full px-0 outline-0 '>From Invoice-Date:</label>
    <input type="date" name="fromInvoicedate" id="fromInvoice" placeholder='From Invoice Date' 
     className='py-2 px-2 w-full outline-0  border-1 rounded-sm'   max={new Date().toISOString().split("T")[0]} onChange={handleChange}/>
  </div>

  <div className=' w-full rounded-sm flex justify-center items-center  py-2'>
     <label htmlFor="toInvoice" className=' w-full px-0 outline-0 '>To Invoice-Date :</label>
    <input type="date" name="toInvoiceDate" id="toInvoice" placeholder='To Invoice Date' 
     className='py-2 px-2 w-full outline-0  border-1 rounded-sm'  max={new Date().toISOString().split("T")[0]} onChange={handleChange}/>
  </div>
 
 {
   showCompanyNames?<div className='flex gap-8 justify-around w-full '>
     {
      companyNames.map((value,index)=>(
        <div className='flex '  key={index}>
          {
            index%2==0?<div className='flex'>
            <input type="checkbox" name='companies' value={value} onChange={handleChange}  className='capitalize ' />
            <label htmlFor=""   className='capitalize px-1'>{value}</label>
            </div>:<div className='flex'>
              <input type="checkbox"  name='companies' value={value}  onChange={handleChange}  className='capitalize'/>
            <label htmlFor="" className='capitalize px-1'>{value}</label>
            </div>
          }
        </div>

      ))
     }
   </div>:""
 }


  <div className='border-1 w-full flex justify-center items-center py-2 rounded-sm bg-black hover:bg-gray-700  active:bg-white   active:border-black '>
  <button className='w-full outline-0 text-white font-bold active:text-black tracking-widest' type='button' onClick={handleShow} >View Company-Names</button>
</div>

<div className='border-1 w-full flex justify-center items-center py-2 rounded-sm bg-black mb-15  hover:bg-gray-700  active:bg-white  active:border-black'>
  <button className='w-full outline-0 text-white font-bold tracking-widest active:text-black'  >click</button>
</div>

     </form>

    </div>
    </>
  )
}

export default FilterBills