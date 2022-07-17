import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './styles.css'
import {useNavigate} from "react-router-dom"

const Item = ({producto}) => {

  const navigate = useNavigate()

  const handledetail= ()=>{
    console.log("Navega hacia el detail")
    navigate(`/detail/${producto.id}`)
  }


return (
    <Card style={{ width: '18rem' }} className='estilo1' onClick = {handledetail}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        
        <ListGroupItem>{producto.price}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}
export default Item