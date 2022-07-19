
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../Components/ItemList'
import './styles.css'

import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemsListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const parametro = useParams()
  console.log(parametro)


  useEffect(()=>{
   const producto = async () => {
     try {
      const q = query(collection(db, "productos"));
      const querySnapshot = await getDocs(q);
      const datos = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        datos.push({id: doc.id, ...doc.data()})
      });
      //  const respuesta = await fetch('https://fakestoreapi.com/products'); //fetch promesas '/data/productos.json'
      //  const datos = await respuesta.json()
       setProductos(datos)
       setProductosFiltrados(datos)
     } catch (error) {
       console.log("Hubo un error en la consulta");
       console.log(error)
     }
   }
    producto()
 },[] ) 

 useEffect(() => {

  if (parametro?.categoryId){
    const filtrados = productos.filter(produc => produc.category === parametro.categoryId)
    setProductosFiltrados(filtrados)
  }else{
    setProductosFiltrados(productos)
  }

 }, [parametro, productos])
 

// Muestra valor de agregar al carrito
  // const onAdd =(contar)=>{
  //   alert('Valor ' + contar) 

  // }
 console.log(productos)
  return (
    <div className='formato'>
        {productos.length !== 0 ?
          <ItemList productos={productosFiltrados}/> 
        :
        <p>Cargando ...</p>
      }
    </div>
    )
  }
export default ItemsListContainer