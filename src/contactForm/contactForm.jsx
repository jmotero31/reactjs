import { useForm } from "../Hooks/useForm"
import './styles.css'

const initialForm = {
  name:"",
  email:"",
  subject:"",
  comments:""
}

const validateForm = (form) =>{
  let errors={}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/

  if(!form.name.trim()){
    errors.name = "El campo 'Nombre' es requerido"
  }


  return errors
}

const ContactFrom = () => {
    const {form, errors,loading,response,handleChange,handleBlur,handleSubmit} = useForm(initialForm, validateForm)


  return (
    <div>
        <h2>Formulario de contacto</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="name"  
            placeholder="Escribe tu nombre" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.name} 
            required
            />
            {errors.name && <p>{errors.name}</p>}
            <input 
            type="text" 
            name="email"  
            placeholder="Escribe tu correo" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.email} 
            required
            />
            {errors.email && <p>{errors.email}</p>}
            <input 
            type="text" 
            name="subject"  
            placeholder="Escribe tu asunto" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.subject} 
            required
            />
            {errors.subject && <p>{errors.subject}</p>}
            <textarea 
            type="text" 
            name="commets"  
            cols="50"
            rows="5"
            placeholder="Escribe tus comentarios" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.comments} 
            required
            />
            {errors.comments && <p>{errors.comments}</p>}
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default ContactFrom