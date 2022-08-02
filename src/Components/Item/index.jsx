import React from 'react'
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './styles.css'
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({producto}) => {

  const navigate = useNavigate()

  const handledetail= ()=>{
    console.log("Navega hacia el detail")
    navigate(`/detail/${producto.id}`)
  }


return (
  <li className='estilo1'>
  <Card style={{ width: '18rem', height: '30rem', padding: '1rem'}}>
  <Card.Img variant="top" src={producto.image} style={{ width: '100%', height: '220px'}} />
  <Card.Body>
    <Card.Title>{producto.title}</Card.Title>
    <Card.Text>
    {producto.price}
    </Card.Text>
    <Button variant="primary " onClick = {handledetail}>Ver más</Button>
  </Card.Body>
</Card>
</li>


  // <li className='estilo1'>
  //   <Card style={{ width: '18rem', height: '30rem', padding: '1rem'}}  onClick = {handledetail}>
  //     <Card.Img variant="top" src={producto.image} style={{ width: '100%', height: '220px'}}/>
      
  //       <Card.Title>{producto.title}</Card.Title>
  //     {/* <Card.Body>

  //     </Card.Body> */}
  //       <ListGroupItem>{producto.price}</ListGroupItem>
  //     {/* <ListGroup >
        
  //     </ListGroup> */}
  //   </Card>
  // </li>
  )
}
export default Item