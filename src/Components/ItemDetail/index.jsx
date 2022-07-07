import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const ItemsDetail = ({producto}) => {
 console.log(producto)
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
      {/* <Button  variant="primary">Ver más</Button> */}
      {/* <ItemCount inicial={1} stock={10} onAdd={1}/> */}
    </Card>
  </div>
  )
}

export default ItemsDetail