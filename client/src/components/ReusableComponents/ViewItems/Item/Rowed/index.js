import React, { useEffect, useRef } from 'react'
import Button from '../../../Button'

function Rowed({image, name, description, buttonLabel, deleteFunction,
  config={
    mainBg:"bg-gradient-to-br from-red-100 via-gray-400 to-lime-100"
  },
  optionsArray,
  selectOnChange,
  optionsDisabled = false,
  defaultValue
}) {

  const disableOptions = useRef();

  console.log(optionsDisabled)

  useEffect(()=>{
    if(optionsDisabled){
      disableOptions.current.disabled = optionsDisabled
    }
  },[disableOptions])

  

  return (
    <div className={'flex flex-wrap justify-evenly py-6 mt-8 mb-3 bg-gray-600 bg-opacity-10 rounded-lg'} >
      <div className='flex flex-wrap mx-2 md:flex-nowrap max-w-[98%] items-center py-1 md:px-2 md:mx-2'>
        <img src={image} alt="" className={' md:mx-1 rounded-2xl '+config.mainBg}/>
        <div className='flex flex-shrink flex-col overflow-ellipsis w-7/12'>
          <h1 className='text-lg text-gray-800 truncate'> {name} </h1>
          <p className='text-lg truncate'>{description}</p>
        </div>
      </div>

      <div className=' flex justify-center flex-col '>
        {optionsArray && <select ref={disableOptions} defaultValue={defaultValue}  onChange={selectOnChange} className='p-2 w-full'>
          {optionsArray.map(op=><option key={op.value} value={op.value} className='p-2 w-full'>
            {op.name}
          </option>)}
        </select>}
        {deleteFunction && <Button onclick={deleteFunction} label={buttonLabel}/>}
      </div>
      
    </div>
  )
}

export default Rowed