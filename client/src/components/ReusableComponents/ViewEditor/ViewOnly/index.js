import React from 'react'

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function ViewOnly({item}) {
  const navigate = useNavigate();
  const {id} = useParams();
  let text
  
  try{
    const user = useSelector((state) => state.user.data);

    text = user[item].find(obj=>obj.id===parseInt(id))?.body;
  }
  catch(e){
    navigate("/dashboard")
  }
    
  return (
    <>
        <div className='p-4 text-lg' dangerouslySetInnerHTML={{ __html: text}}></div>
    </>
  )
}

export default ViewOnly