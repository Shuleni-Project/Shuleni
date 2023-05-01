import React from 'react'

function Boxed({name, description, image, deleteFunction, viewFunction, 
    config={
    imageBg:"bg-gradient-to-br from-green-100 via-blue-300 to-red-300"
  },
  buttonConfig={
    RedButtonText:"Delete",
    GreenButtonText:"View",
  }
}) {
  return (
    <div className='w-48 p-4 bg-orange-50 m-3 rounded-lg inline-block hover:shadow-lg hover:shadow-purple-300 transition duration-300 cursor-pointer'>
      <div className={'relative overflow-hidden flex flex-wrap w-full h-32 items-center justify-center rounded-xl '+config.imageBg} >
        
        <img src={image} alt={name} className='mt-5 w-[30%]'/>
        
        {deleteFunction&&<div className='absolute h-[170%] flex items-end w-full hover:translate-y-[-44px] transition duration-300'>
          <button onClick={deleteFunction} className='w-[100%] bg-red-400 bg-opacity-60 text-white font-bold py-2 '>{buttonConfig.RedButtonText}</button>
        </div>}

        
        {viewFunction&&<div className='absolute h-[170%] flex items-end w-full hover:translate-y-[-44px] transition duration-300'>
          <button onClick={viewFunction} className='w-[100%] bg-lime-400 bg-opacity-60 text-white font-bold py-2 '>{buttonConfig.GreenButtonText}</button>
        </div>}
        
      </div>
      
      
      <div>
        <h2 className='mt-3 w-[160px] truncate  '>{name.toUpperCase()}</h2>
        <p className='p-1 overflow-hidden whitespace-nowrap overflow-ellipsis'>{description}</p>
      </div>
    </div>
  )
}

export default Boxed