import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../Contex/ShopContext'
import './styles.css'
import pedido from '../../firebase/pedido'
import orden from '../../firebase/orden'
import ContactFrom from '../../contactForm/contactForm'
import ModalContainer from '../ModalContainer'
import { useForm } from '../../Components/Hooks/useForm'




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
  
      <div className='e'>
        {cart.length !== 0?
            <>
            <table striped bordered hover className='i'>
            <thead className='o'>
              <tr>
                <th>Producto</th>
                <th></th>
                <th>Cant</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <br></br>
            <tbody>
            {cart.map(prod => {
              return <tr key={prod.id} className='aa'>
                <td ><img src={prod.image} style={{ width: '60px', height: '60px', padding: '0.1rem'}}></img></td>
                <td>{prod.title}</td>
                <td>{prod.cant}</td>
                <td>$ {prod.cant * prod.price}</td>
                <td><button onClick={() => remover(prod.id)} className="buttondel"> X </button></td>

              </tr>
            })
            }
            </tbody>
            <br /><br />
            <tfoot>
              <tr className='u'>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td> $ {total}</td>
                <td></td>
              </tr>
            </tfoot>
            </table>
            <button onClick={()=>{confirmo()}} className="buttonAddCart">Comprar</button>
            <button onClick={()=>setCart([])} className="buttonAddCart">Vaciar</button>
            {confirmar && <ModalContainer total={total} setCart={setCart} setConfirmar={setConfirmar} volver={volver} />}
            
            </>
          :
          <>
          <h1>Carrito Vacio</h1>
          <button onClick={volver}>Volver</button>
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