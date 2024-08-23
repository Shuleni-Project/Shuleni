import React from 'react'

import Editor from '../../Editor'
import Button from '../../Button'

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Edit({item, buttonLabel, buttonClickFunction, 
  editorConfig={
      setEditorInput:()=>{},
      title:"" 
  },}) {

    const user = useSelector((state) => state.user.data);
    const {id} = useParams();

    const text = user[item].find(obj=>obj.id===parseInt(id)).body;
    
  return (
    <div className='py-6 pb-16'>
          <Editor 
            title={editorConfig.title}
            content={text || ""} 
            setEditorInput={editorConfig.setEditorInput}
          />
        <div className='p-2'>
            <Button label={buttonLabel} onclick={buttonClickFunction}/>
        </div>
    </div>
  )
}

export default Edit