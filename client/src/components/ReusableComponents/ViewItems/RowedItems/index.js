import React, { useState } from 'react'

import Fuse from 'fuse.js'

import Button from '../../Button';

export default function Items({boxed=false, array, title, addFunction}) {
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
  }

  return(
  <>
  </>
  )
}