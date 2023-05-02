import React, { useEffect, useState } from 'react'

import Fuse from 'fuse.js'

import Item from '../Item';

export default function Items({ array=[], title }) {
  const[items, setItems] = useState([...array])

  const options = {
    keys: ['name', 'description'],
    threshold: 0.5,
  };
  
  
  const fuse = new Fuse(array, options)

  useEffect(()=>{setItems(array)},[array])
  
  function handleSearch(e){
    if(e.target.value===""){ 
      setItems(array)
      return
    }
    const result = fuse.search(e.target.value)
    setItems(result.map(obj=>obj.item))
  }

  return(
    <>
      <div className='w-full sm:w-3/4'>
            
        <h2 className='text-[#2c066e] font-proxima text-xl md:inline md:mr-5'>{title}</h2>

        <input className='border-gray-300 rounded-2xl border-2 p-1 px-3 outline-1 md:w-1/2 w-full flex-shrink'
          onChange={handleSearch} 
          placeholder='Search...' 
        />
            
      </div>
      {items?.map((obj,index)=><Item key={index} boxed={false} obj={obj}/>)}
    </>
  )
}