import React from 'react'
import { useState } from 'react'
import './styles.css'

const ItemCount = ({agregar, stock}) => {
const [contar, setContar] = useState(1) //hook estados guardados
 


    function sumar() {
    contar < stock ? setContar(contar + 1) : alert('Stock disponible ' + stock)
  }
    const restar =()=>{
      contar > 1 ? setContar(contar - 1): alert('Compra mínima es 1') 
    }
    const resetear = ()=>{
      setContar(1)
    }
    
    const confirmar = () =>{
      if(contar <= stock){
        agregar(contar)
      }
      else{
        alert("Lo sentimos solamente tenemos " + stock)
      }
    }
  return (
    <>
    <div className="containerItemCount">
        <button onClick={restar} className='buttonCount'>-</button>
        <span className="numberCount">{contar}</span>
        <button onClick={sumar} className='buttonCount'>+</button>
     </div>
        <button onClick={()=>{confirmar(); resetear()}} className="buttonAddCart">Agregar al Carrito</button>
        <button onClick={resetear} className="buttonAddCart">Resetear</button>
    </> 
  )
}

export default ItemCount