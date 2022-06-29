import React from 'react'
import { useState } from 'react'
import './styles.css'

const ItemCount = ({inicial, stock, onAdd}) => {
const [contar, setContar] = useState(inicial) //hook estados guardados

    function sumar() {
    contar < stock ? setContar(contar + 1) : alert('Stock disponible ' + stock)
  }
    const restar =()=>{
      contar > inicial ? setContar(contar - 1): alert('Compra mínima es ' + inicial) 
    }
    const resetear = ()=>{
      setContar(inicial)
    }
    
  return (
    <div>
        <p >{contar}</p>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <button onClick={()=>{onAdd(contar); resetear()}}>Agregar al Carrito</button>
        <button onClick={resetear}>Resetear</button>
    </div>
  )
}

export default ItemCount