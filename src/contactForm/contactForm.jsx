
import { useContext, useEffect } from 'react';
import { useForm } from '../Components/Hooks/useForm'
import pedido from '../firebase/pedido';
import './styles.css'
import { Shop } from '../../src/Contex/ShopContext'

const initialForm = {
  name: "",
  email: "",
  emaildos: "",
  phone: "",
  address: "",
};

const validateForm = (form) =>{
  let errors={}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  let regexaddress = /^.{1,255}$/

  if(!form.name){
    errors.name = "El campo 'Nombre' es requerido"
  }else if(!regexName.test(form.name)){
    errors.name ="El campo 'Nombre'  solo acepta letras y espacios en blanco"
  }else if(form.name.length < 4){
    errors.name = "El campo 'Nombre' debe tener más de dos letras"
  }

  if(!form.email){
    errors.email = "El campo 'Correo' es requerido"
  }else if(!regexEmail.test(form.email)){
    errors.email = "El campo 'Correo' es incorrecto"
  }
  
  if(form.email !== form.emaildos){
    errors.emaildos = "Verificar correos"
  }

  if(!form.phone){
    errors.phone = "El campo 'Telefono' es requerido"
    
  }else if(form.phone.length < 8){
    errors.phone = "El numero debe tener al menos 10 digitos"
    
  }

  if(!form.address){
    errors.address = "El campo 'Comentario' es requerido"
  }else if(!regexaddress.test(form.address)){
    errors.address = "El campo 'Dirección' no debe exceder los 255 cararteres"
  }

  return errors
}


const ContactFrom = () => {
  const {form, 
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    setLoading
    } = useForm(initialForm, validateForm)
    
  const {cart} = useContext(Shop)
  const total =1

  useEffect(() => {
      if(loading){
        const pedidoConfirmado = pedido(form, cart, total)
        
        console.log(pedidoConfirmado)
        alert("llegue")
      }
    
      // return () => {
      //   second
      // }
  }, [loading])

 
  return (
    <>
        <h2>Datos personales para realizar su compra</h2>
        <form onSubmit={handleSubmit} className='formulario'>
          <label>Nombre y apellido</label>
            <input 
            className='ingreso'
            type="text" 
            name="name"  
            placeholder="Escribe tu nombre" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.name} 
            required
            />
            {errors.name && <p className='validacion'>{errors.name}</p>}
            <label>Email</label>
            <input 
            className='ingreso'
            type="email" 
            name="email"  
            placeholder="Escribe tu correo" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.email} 
            required
            />
            {errors.email && <p className='validacion'>{errors.email}</p>}
            <label>Repetir Email</label>
            <input 
            className='ingreso'
            type="email" 
            name="emaildos"  
            placeholder="Vuelva a escribir su 'Correo'" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.emaildos} 
            required
            />
            {errors.emaildos && <p className='validacion'>{errors.emaildos}</p>}
            <label>Telefono de Contacto</label>
            <input 
            className='ingreso'
            type="number" 
            name="phone"  
            placeholder="xxx-xxxxxxx" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.phone} 
            required
            />
            {errors.subject && <p className='validacion'>{errors.phone}</p>}
            <label>Dirección / Número / Piso / Departamento / Entre calles / Aclaración</label>
            <textarea 
            className='ingreso'
            type="text" 
            name="address" 
            cols="50"
            rows="5"
            placeholder="Dirección" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value = {form.address}
            required
            />
            {errors.comments && <p className='validacion'>{errors.address}</p>}
            <button className='ingreso boton' onClick={()=>{setLoading(false)}}>Terminar</button>
        </form>
    </>
  )
}

export default ContactFrom