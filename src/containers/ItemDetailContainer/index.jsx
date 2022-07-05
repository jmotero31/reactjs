import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemsDetail from '../../Components/ItemDetail'

const ItemDetailContainer = () => {
    const[detalle, setDetalle] = useState({})

    useEffect(() => {
      const getData = async () =>{
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await respuesta.json()
            setDetalle(data)
        } catch (error) {
            console.log(error)
        }
      }
      getData();
    },[])

  return (
    <div>
      <ItemsDetail producto={detalle}/>
    </div>

  )
}

export default ItemDetailContainer