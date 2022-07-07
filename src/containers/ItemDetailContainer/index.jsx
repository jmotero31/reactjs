import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemsDetail from '../../Components/ItemDetail'

const ItemDetailContainer = () => {
    const[detalle, setDetalle] = useState({})
    const parametro = useParams() //hook para captar parametros de las barra de navegación
    

    useEffect(() => {
      const getData = async () =>{
        try {
            const respuesta = await fetch(`https://fakestoreapi.com/products/${parametro.productId}`)
            const data = await respuesta.json()
            setDetalle(data)
        } catch (error) {
            console.log(error)
        }
      }
      getData();
    },[parametro])

  return (
    <div>
      <ItemsDetail producto={detalle}/>
    </div>

  )
}

export default ItemDetailContainer