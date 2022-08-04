
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../Components/ItemList'
import './styles.css'
// import { collection, query, getDocs } from "firebase/firestore";
// import { db } from '../../firebase/config'
import useFirebaseProductos from '../../Components/Hooks/useFirebaseProductos'
import Loading from '../../Components/Loading'


const ItemsListContainer = ({greeting}) => {
  const [productosFire, cargando, erro] = useFirebaseProductos()
  // const [productos, setProductos] = useState(productosFire)
  const [productosFiltrados, setProductosFiltrados] = useState(productosFire)
  const parametro = useParams()
  // const [valor, setValor] = useState(0)
  const productos = productosFire
  // console.log(parametro)
  console.log(productosFire, cargando, erro)


//   useEffect(()=>{
//   //  const producto = async () => {
//   //    try {
//   //     const q = query(collection(db, "productos"));
//   //     const querySnapshot = await getDocs(q);
//   //     const datos = []
//   //     querySnapshot.forEach((doc) => {
//   //       // console.log(doc.id, " => ", doc.data());
//   //       datos.push({id: doc.id, ...doc.data()})
//   //     });
//   //     //  const respuesta = await fetch('https://fakestoreapi.com/products'); //fetch promesas '/data/productos.json'
//   //     //  const datos = await respuesta.json()
//   //      setProductos(datos)
//   //      setProductosFiltrados(datos)
//   //    } catch (error) {
//   //      console.log("Hubo un error en la consulta");
//   //      console.log(error)
//   //    }
//   //  }
//   //   producto()
//   // if(valor < 1){
//        console.log(productosFire)
//       setProductos(productosFire)
//       setProductosFiltrados(productosFire)
//   //     setValor(2)
//   // }
//  }, []) 

 useEffect(() => {
  if (parametro?.categoryId){
    const filtrados = productos.filter(produc => produc.category === parametro.categoryId)
    setProductosFiltrados(filtrados)
  }else{
    setProductosFiltrados(productos)
  }
 }, [parametro, productos])
 

  return (
    <>
        {cargando !== true ?
          <ItemList productos={productosFiltrados}/> 
        :
        <div className='loadingContainer'>
          <Loading/>
        </div>
      }
    </>
    )
  }
export default ItemsListContainer