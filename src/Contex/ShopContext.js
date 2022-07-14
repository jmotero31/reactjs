import React, {createContext, useState } from 'react'

export const Shop = createContext()  //hook de reack - dinamico

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState("Valor por defecto")
    const [cart, setCart] = useState([])

const agregarProducto = (producto, cantidad) => {

  // console.log(producto, cantidad)

  const repetido = buscar(producto)
  
  // console.log(repetido)
  // console.log(cart)

  if(repetido){
      repetido.cant += cantidad
      // console.log(repetido)
      // console.log(cart)
      setCart([...cart])
      // console.log(cart)
    }else{
      setCart([...cart, {...producto, cant: cantidad}])
      // console.log(cart)
    }
}

 const buscar = (producto) => {
  return cart.find(valor => valor.id === producto.id)
 }

 const remover = (id) =>{
  const productosFiltrados = cart.filter(producto => producto.id !== id)
  setCart(productosFiltrados);
 }

  return (
    // <Shop.Provider value ={{estadoA, setEstadoA}}>     // doble llave porque el valor es un objeto de Java Scrip como el style stilo en linea
    <Shop.Provider value ={{estadoA, setEstadoA, agregarProducto, cart, remover}}> 
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider