import React  from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import { Shop } from '../../Contex/ShopContext'
import Loading from '../../Components/Loading'
import './styles.css'


const ItemsDetail = ({producto}) => {
  const navigate = useNavigate()

  // console.log(producto.stock)
  
  const [cantidad, setCantidad] = useState(0)
  const {agregarProducto} = useContext (Shop)
  


  const confirmacion = (cant) =>{
    setCantidad (cant)
  }
  const terminar = () =>{
    agregarProducto(producto, cantidad)
    navigate('/cart')
  }
  console.log(cantidad)
  
  return (
    <div key={producto.id} className='estilo'> 
    {producto.id ?(
      
      // <div key={producto.id} className='estilo'> 
      
        <div >
          <div className='contenedorIm'>
            <img src={producto.image} style={{width: '220px', height: '220px'}}></img>
          </div>
          <br></br>
          <div className='contenedorcont'>
            <h4 className='categoria'>{producto.category}</h4>
            <h2>{producto.title}</h2>
            <text>{producto.description}</text>
            <br></br>
            
            <div className="marcar">
              <p ><span className='resaltar'>Precio: </span>$ {producto.price}</p>
              <p ><span className='resaltar'>Stock disponible: </span> {producto.stock}</p>
            </div>
            
          {!cantidad ?
          <div className='ui'><ItemCount agregar={confirmacion} stock={producto.stock}/></div>
          :
          <div className='ui'><button onClick={terminar} className="buttonAddCart">Terminar Compra</button></div>
        }
          </div>
        </div>
    // </div>
    )
  :
  (
    <Loading/>
  )
    }
    </div>
  )
}

export default ItemsDetail