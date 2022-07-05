import React from 'react'

const ItemsDetail = ({producto}) => {
 console.log(producto)
  return (
    <div key={producto.id}> 
      
      <h1>{producto.title}</h1>
  </div>
  )
}

export default ItemsDetail