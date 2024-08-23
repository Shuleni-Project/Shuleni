import React, { useRef, useState } from 'react'

import Item from '../Item'

import Fuse from 'fuse.js'

import Button from '../../Button';

function Items({ array, title, viewAllFunction, addFunction }) {
  const inner = useRef(),outer = useRef(), left= useRef(), right = useRef();

  const [leftOffset, setLeftOffset] = useState(0);

  const[items, setItems] = useState(array)

  const options = {
    keys: ['name', 'description'],
    threshold: 0.5,
  };
  
  
  const fuse = new Fuse(array, options)

  
  function handleSearch(e){
    if(e.target.value===""){ 
      setItems(array)
      return
    }
    const result = fuse.search(e.target.value)
    setItems(result.map(obj=>obj.item))
    inner.current.style.transform = 'translateX(0)'
  }
  
  function scroll(direction){
    
    if(direction &&(inner.current.getBoundingClientRect().right < outer.current.getBoundingClientRect().right)) return

    if (!direction && inner.current.getBoundingClientRect().left > 0){
      return
    }
    
    inner.current.style.transform = `translateX(${direction? (leftOffset-216) : (leftOffset+ 216) }px)` 
    
    outer.current.style.boxShadow =  `${!direction?"-5px 0px 5px -5px #a0995dad inset":"5px 0px 5px -5px #a0995dad inset"}`

    setLeftOffset(direction? (leftOffset-216) : (leftOffset+ 216))
  }

  


  return (
    <div className=' bg-white mr-4 rounded-2xl overflow-hidden my-8' >
      <div className=' border-b-gray-600 border-b-2 p-4 mb-2 flex flex-wrap align-bottom'>
        
        <div className='w-full sm:w-3/4'>
          
          <h2 className='text-[#2c066e] font-proxima text-xl md:inline md:mr-5'>{title}</h2>

          <input className='border-gray-300 rounded-2xl border-2 p-1 px-3 outline-1 md:w-1/2 w-full flex-shrink'
            onChange={handleSearch} 
            placeholder='Search...' 
          />
          
        </div>
        
        <div className='md:inline-flex flex flex-grow justify-around items-end min-w-[80px] pt-4'>
          
          <button className='rounded-full shadow-md shadow-teal-900 p-1' 
          ref={left} 
          onClick={()=>scroll(false)}>
                <img src="/Web/right-arrow.png" alt="right" className='w-4 scale-x-[-1]'/>

          </button>

          <button className='rounded-full shadow-md shadow-teal-900 p-1 ' 
          ref={right} 
          onClick={()=>scroll(true)}>

            <img src="/Web/right-arrow.png" alt="right" className='w-4'/>
            
          </button>

        </div>
      </div>
      
      <div className='flex w-full bg-white min-h-[252px]' ref={outer}>
        
        <div ref={inner} className='whitespace-nowrap transition duration-300 px-1'>
          
          {!items.length&&<h2 className='text-[#2c066e] font-proxima text-xl m-4'>No {title} Available</h2>}

          
            {items?.map((obj,index)=><Item key={index} boxed={true} obj={obj}/>)}
        </div>
        
      </div>

      <div className='flex flex-wrap justify-between pb-6 px-3'>
        <div className='p-5 w-full flex justify-evenly md:w-1/2'>
        {(viewAllFunction && array.length > 0)&&<Button onclick={viewAllFunction} label="View All" />}


        </div>
        <div className='p-5 w-full flex justify-evenly md:w-1/2'>

        {addFunction&&<Button onclick={addFunction} label="Add"/>}
        </div>
      </div>
    </div>
  )
}

export default Items