
import React from 'react'
import { useEffect, useState } from 'react'
import ItemCount from '../../Components/ItemCount'
import ItemList from '../../Components/ItemList'
import './styles.css'

const ItemsListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
   const producto = async () => {
     try {
       const respuesta = await fetch('/data/productos.json'); //fetch promesas 
       const datos = await respuesta.json()
       setProductos(datos)
     } catch (error) {
       console.log("Hubo un error en la consulta");
       console.log(error)
     }
   }
 producto()
 },[] ) 

// Muestra valor de agregar al carrito
  const onAdd =(contar)=>{
    alert('Valor ' + contar) 

  }

  return (
    <div className='formato'>
        <ItemCount inicial={1} stock={10} onAdd={onAdd}/>
        {/* <p className='color'>{greeting}</p> */}
        <ItemList productos={productos}/> 
    </div>
    )
  }
export default ItemsListContainer