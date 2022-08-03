import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../Contex/ShopContext'
import Table from 'react-bootstrap/Table'
import './styles.css'
import pedido from '../../firebase/pedido'
import orden from '../../firebase/orden'
import ContactFrom from '../../contactForm/contactForm'
import ModalContainer from '../ModalContainer'
import { useForm } from '../../Components/Hooks/useForm'
import Button from 'react-bootstrap/Button';



const Cart = () => {
  const {cart} = useContext(Shop)
  const {remover} = useContext(Shop)
  const {setCart} = useContext(Shop)
  const[total, setTotal] = useState(0)
  const [confirmar, setConfirmar] = useState(false)
  const [formulario, setFormulario] = useState({})

  const navigate = useNavigate()
  
  // console.log(cart)
  
 

 
  
// const totalCarrito = ()=> {
 
// }
// totalCarrito()
useEffect(() => {
  setTotal(cart.reduce( (acumulador, producto) => acumulador = (producto.price) * (producto.cant) + acumulador, 0 ))
}, [cart])

console.log(total)

const volver =()=>{
  navigate('/')
}

const confirmo = () =>{
  setConfirmar(true)
  // setFormulario (form)
}


const comprar = async() =>{
  const pedidoConfirmado = pedido("Juan Martin", "Otero", "Calle 56", "joero@live.com.ar", "2214354140", cart, total)
 //agregar un modal para completar los datos del comparador 
//  console.log(pedidoConfirmado)
  orden(cart, pedidoConfirmado)
//  const docRef = await addDoc(collection(db,"orden"),pedidoConfirmado)
}

  return (
  
      <div>
        {cart.length !== 0?
            <>
            <Table striped bordered hover className='estilo ancho'>
            <thead className='color1'>
              <tr>
                <th>Cantidad</th>
                <th>Descripción</th>
                <th>Precio Unitario</th>
                <th>Precio Parcial</th>
                <th>Quitar</th>
              </tr>
            </thead>
            {cart.map(prod => {
              return <tr key={prod.id} className='color2'>
                <td>{prod.cant}</td>
                <td>{prod.title}</td>
                <td>{prod.price}</td>
                <td>{prod.cant * prod.price}</td>
                <td><Button onClick={() => remover(prod.id)} id="col"> X </Button></td>

              </tr>
            })
            }
            <tbody>
              <tr className='color2'>
                <td style={{color: 'beige'}}>TOTAL</td>
                <td colSpan={2}></td>
                <td style={{color: 'beige'}}>{total}</td>
                <td><Button onClick={()=>setCart([])}>Vaciar</Button></td>
              </tr>
            </tbody>
            </Table>
            <button onClick={()=>{confirmo()}}>Comprar</button>
            {confirmar && <ModalContainer total={total} setCart={setCart} setConfirmar={setConfirmar}/>}
            
            </>
          :
          <>
          <h1>Carrtio Vacio</h1>
          <Button onClick={volver}>Volver</Button>
          </>
        }
      </div>
  )
 }

export default Cart

{/* <span>Total: {total}</span>
<ol>
{cart.map(prod => {
  return <li key={prod.id}>Cantidad: {prod.cant} | Producto: {prod.title} Precio: {prod.cant * prod.price}<button onClick={() => remover(prod.id)}> X </button></li>
})}
</ol>
<button onClick={()=>setCart([])}>Vaciar</button> */}