import React from 'react'

const FilterBills = () => {
  return (
    <>
    <div className=' size-full flex justify-center items-center'>
     <form action="" className=' h-[75%] w-1/3 shadow-2xl rounded-3xl flex items-center justify-center flex-col
     gap-10 px-[60px] overflow-scroll max-sm:w-[90%] mt-20'>
     <div className='w-full flex justify-center items-center'>
      <h1 className='font-bold text-4xl'>Filter-bills</h1>
     </div>
      <div className='border-1 w-full rounded-sm flex justify-center items-center px-4 py-2'>
        <input type="text" placeholder='Invoice Date' className='w-full outline-0' />
      </div>
  <div className='border-1 w-full rounded-sm flex justify-center items-center px-4 py-2'>
    <input type="text" name="" id="" placeholder='Invoice Date'  className='w-full outline-0' />
  </div>

  <div className='border-1 w-full rounded-sm flex justify-center items-center px-4 py-2'>
    <input type="text"placeholder='From completion Date' className='w-full outline-0'  />
  </div>

  <div className='border-1 w-full rounded-sm flex justify-center items-center px-4 py-2'>
    <input type="text" placeholder='To completion Date'  className='w-full outline-0' />
  </div>
<div className='border-1 w-full flex justify-center items-center py-2 rounded-sm bg-black'>
  <button className='w-full outline-0 text-white font-bold' >click</button>
</div>

     </form>

    </div>
    </>
  )
}

export default FilterBills