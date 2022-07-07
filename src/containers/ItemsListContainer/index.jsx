
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import ItemList from '../../Components/ItemList'
import './styles.css'

const ItemsListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const parametro = useParams()
  console.log(parametro)


  useEffect(()=>{
   const producto = async () => {
     try {
       const respuesta = await fetch('https://fakestoreapi.com/products'); //fetch promesas '/data/productos.json'
       const datos = await respuesta.json()
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
        {/* <ItemCount inicial={1} stock={10} onAdd={onAdd}/> */}
        {/* <p className='color'>{greeting}</p> */}
        {productos.length !== 0 ?
          <ItemList productos={productosFiltrados}/> 
        :
        <p>Cargando ...</p>
      }
    </div>
    )
  }
export default ItemsListContainer