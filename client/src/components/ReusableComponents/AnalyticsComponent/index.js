import React from 'react'

function AnalyticsComponent({image="", title, content="", newData="", config={
    imageBg:"",
    newDataBg:"",
}}) {
  
  
  return (
    <div className='bg-white flex items-center flex-grow mr-4 my-4 rounded-md shadow-md hover:shadow-purple-300 transition duration-300 min-w-[200px] p-4 pl-6'>

        <div className='font-sans w-3/4'>
            <h3 className='font-proxima font-normal min-w-[90px] overflow-ellipsis truncate'>{title}</h3>
            <h1 className='mt-5 mb-2'>{content}</h1>
            <div className={'text-white px-3 py-1 rounded-lg w-max '+ config.newDataBg}>New {newData}</div>
        </div>
        
        <div className={'shadow-sm shadow-slate-600 p-6 rounded-xl '+config.imageBg}>
            <img src={image} alt={title} className='w-8'/>
        </div>
        
        
    </div>
  )
}

export default AnalyticsComponent