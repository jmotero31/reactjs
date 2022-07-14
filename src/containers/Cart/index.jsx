import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Contex/ShopContext'

const Cart = () => {
  const {cart} = useContext(Shop)
  const {remover} = useContext(Shop)
  const {setCart} = useContext(Shop)
  // console.log(cart)



  return (
    <div>
      <ol>
      {cart.map(prod => {
        return <li key={prod.id}>Cantidad: {prod.cant} | Producto: {prod.title}<button onClick={() => remover(prod.id)}>X</button></li>
        
      })}
      </ol>
      <button onClick={()=>setCart([])}>Vaciar</button>
  </div>
  )
 }

export default Cart