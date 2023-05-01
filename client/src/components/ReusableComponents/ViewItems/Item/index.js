import React from 'react'
import Boxed from './Boxed'
import Rowed from './Rowed'

function Item({boxed, obj}) {
    if (boxed) return (<Boxed 
    name={obj.name} 
    image={obj.image} 
    description={obj.description}
    deleteFunction={obj?.deleteFunction}
    viewFunction={obj?.viewFunction}
    />)

  return (
    <Rowed 
      name={obj.name} 
      image={obj.image} 
      description={obj.description}
      deleteFunction={obj?.deleteFunction}
      viewFunction={obj?.viewFunction}
      optionsArray = {obj?.optionsArray}
      selectOnChange = {obj?.selectOnChange}
      optionsDisabled={obj?.optionsDisabled}
    />
  )
}

export default Item