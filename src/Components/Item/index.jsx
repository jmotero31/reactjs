import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import './styles.css'
import ItemCount from '../../Components/ItemCount'

const Item = ({producto}) => {

return (
<Card style={{ width: '18rem' }} className='estilo1'>
  <Card.Img variant="top" src="/img/s.jpg" />
  <Card.Body>
    <Card.Title>{producto.nombreProducto}</Card.Title>
    <Card.Text>
     {producto.descripcion}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{producto.graduacion}</ListGroupItem>
    <ListGroupItem>{producto.premio}</ListGroupItem>
    
  </ListGroup>
  <Button variant="primary">Ver más</Button>
  <ItemCount stock={20} onAdd={'10'} initial={1} />
</Card>
  )
}
export default Item