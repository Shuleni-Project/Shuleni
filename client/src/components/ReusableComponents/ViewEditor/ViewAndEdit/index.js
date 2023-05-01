import React from 'react'

import Editor from '../../Editor'
import Button from '../../Button'

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ViewAndEdit({item, buttonLabel, buttonClickFunction,
  editorConfig={
      setEditorInput:()=>{},
      title:"", 
      content:""
  },}) {

    const user = useSelector((state) => state.user.data);
    
    const {id} = useParams();
    const text = user[item].find(obj=>obj.id===parseInt(id)).body;
    
    
    
    // if(!text) return <>Empty</>

  return (
    <div className='py-6 pb-16'>
        <div className='p-4 md:text-xl flex flex-col w-[80%]' dangerouslySetInnerHTML={{ __html: text}}></div>
          <Editor 
            title={editorConfig.title}
            content={editorConfig.content} 
            setEditorInput={editorConfig.setEditorInput}
          />
        <div className='p-2'>
          <Button label={buttonLabel} onclick={()=>buttonClickFunction(item, id)}/>
        </div>
    </div>
  )
}

export default ViewAndEdit