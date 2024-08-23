import React from 'react'
import Button from '../../../Button'

function Rowed({name, description, buttonLabel, deleteFunction,
  config={
    mainBg:"bg-gradient-to-br from-green-100 via-blue-300 to-red-300"
  },
  optionsArray,
  selectOnChange
}) {
  return (
    <div className={'flex flex-wrap ' + config.mainBg} >
      <div className='w-full md:1/2 lg:w-5/6 py-6 px-2 mx-2'>
        <h1 className='text-lg text-gray-700'> {name} </h1>
        <p className='text-lg p-2'>{description}</p>
      </div>

      <div className='flex justify-around'>
        {optionsArray && <select onChange={selectOnChange} className='p-2 w-full'>
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