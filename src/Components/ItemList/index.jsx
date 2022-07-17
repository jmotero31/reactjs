import React from 'react'
import Item from '../Item'
import './styles.css'

const ItemList = ({productos}) => {

  // console.log(productos.map(prod => prod.idProducto))
  
  return (
    <div className='estilo1'>
      {productos.map(prod=>{
      return <Item key={prod.idProducto} producto={prod}/>
      } )}
    </div>
  )
}

export default ItemList