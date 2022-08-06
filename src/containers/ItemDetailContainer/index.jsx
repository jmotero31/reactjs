import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemsDetail from '../../Components/ItemDetail'
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {
    const[detalle, setDetalle] = useState({})
    const parametro = useParams() //hook para captar parametros de las barra de navegación
    

    useEffect(() => {
      const getData = async () =>{
        try {
            const docRef = doc(db, "productos", parametro.productId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // console.log(docSnap.id)
                // console.log("Documento: ", docSnap.data());
                const data = {id: docSnap.id, ...docSnap.data()}
                setDetalle(data)
              } else {
                // console.log("No se encontro el documento!");
              }
            // const respuesta = await fetch(`https://fakestoreapi.com/products/${parametro.productId}`)
            // const data = await respuesta.json()
            // setDetalle(data)
        } catch (error) {
            console.log(error)
        }
      }
      getData();
    },[parametro])

  return (
    <>
      <ItemsDetail producto={detalle}/>
    </>
  )
}

export default ItemDetailContainer