
import { useForm } from '../Components/Hooks/useForm'
import './styles.css'

const initialForm = {
  name: "",
  email: "",
  emaildos: "",
  subject: "",
  comments: "",
};

const validateForm = (form) =>{
  let errors={}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  let regexComments = /^.{1,255}$/

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

  if(!form.subject){
    errors.subject = "El campo 'Asunto' es requerido"
  }

  if(!form.comments){
    errors.comments = "El campo 'Comentario' es requerido"
  }else if(!regexComments.test(form.comments)){
    errors.comments = "El campo 'Comentario' no debe exceder los 255 cararteres"
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
        handleSubmit
    } = useForm(initialForm, validateForm)




  return (
    <div className='contenedor'>
        <h2>Formulario de contacto</h2>
        <form onSubmit={handleSubmit} className='formulario'>
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

            <input 
            className='ingreso'
            type="text" 
            name="subject"  
            placeholder="Escribe tu asunto" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.subject} 
            required
            />
            {errors.subject && <p className='validacion'>{errors.subject}</p>}
            <textarea 
            className='ingreso'
            type="text" 
            name="comments" 
            cols="50"
            rows="5"
            placeholder="Escribe tus comentarios" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value = {form.comments}
            required
            />
            {errors.comments && <p className='validacion'>{errors.comments}</p>}
            <button className='ingreso boton'>Terminar</button>
        </form>
    </div>
  )
}

export default ContactFrom