import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import './styles.css'
import ItemCount from '../../Components/ItemCount'
import {useNavigate} from "react-router-dom"

const Item = ({producto}) => {

  const navigate = useNavigate()

  const handledetail= ()=>{
    console.log("Navega hacia el detail")
    navigate(`/detail/${producto.id}`)
  }


return (
  <div onClick = {handledetail}>
    <Card style={{ width: '18rem' }} className='estilo1'>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>
        {/* {producto.description} */}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{producto.category}</ListGroupItem>
        <ListGroupItem>{producto.price}</ListGroupItem>
        
      </ListGroup>
      <Button  variant="primary">Ver más</Button>

      <ItemCount inicial={1} stock={10} onAdd={1}/>
    </Card>
    
  </div>
    
  )
}
export default Item