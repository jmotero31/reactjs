import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Contex/ShopContext'

const Cart = () => {
  const {cart} = useContext(Shop)
  const {remover} = useContext(Shop)
  // console.log(cart)
  const eliminar = () =>{
    remover()
  }

  return (
    <ol>
      {cart.map(prod => {
        return <li key={prod.id}>Cantidad: {prod.cant} | Producto: {prod.title}<button onClick={eliminar}>Eliminar</button></li>
      })}
    </ol>
  )
}

export default Cart