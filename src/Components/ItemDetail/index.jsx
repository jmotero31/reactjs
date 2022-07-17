import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import { Shop } from '../../Contex/ShopContext'


const ItemsDetail = ({producto}) => {
  const navigate = useNavigate()

  producto.stock = 15
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
    <div key={producto.id} className='estilo1'> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
        {producto.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{producto.category}</ListGroupItem>
        <ListGroupItem>{producto.price}</ListGroupItem>
      </ListGroup>

      {!cantidad ?
        <ItemCount agregar={confirmacion} stock={producto.stock}/>
        :
        <button onClick={terminar}>Terminar Compra</button>
      }
    </Card>
  </div>
  )
}

export default ItemsDetail