import React from 'react'

import ViewOnly from '../../../ReusableComponents/ViewEditor/ViewOnly'

function ExamMarking({item, buttonLabel, buttonClickFunction, editorConfig}) {
  return (
    <div className='pl-4 pt-4 bg-gray-400 bg-opacity-20'>
        <ViewOnly item={item} buttonLabel={buttonLabel}  editorConfig={editorConfig} buttonClickFunction={buttonClickFunction}/>
        <div className=' p-4 overflow-hidden'>

        </div>
        
        
    </div>
  )
}

export default ExamMarking