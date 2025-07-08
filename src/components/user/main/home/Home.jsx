import React, { useContext, useEffect, useState } from 'react'
import { contextApi } from '../../../context/Context';
import empServices from '../../../service/empServices';

const Home = () => {
  const {globalState}=useContext(contextApi);
  console.log(globalState);
  const [allBills,setAllBills] =useState([])
  
  useEffect(()=>{
(async()=>{
  let data =await empServices.allBills(globalState.token)
 if(data.status == 200)
 {
  setAllBills((preVal)=>([...preVal,...data.data.bills]))
 }
})();
  },[])
  console.log(allBills);
  
  return (
    <>
    <div className='size-full flex flex-wrap h-[100px] w-[100px]'>
     
    </div>
    </>
  )
}

export default Home