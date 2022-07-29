
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
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/

  if(!form.name.trim()){
    errors.name = "El campo 'Nombre' es requerido"
  }else if(!regexName.test(form.name.trim())){
    errors.name ="El campo 'Nombre'  solo acepta letras y espacios en blanco"
  }else if(form.name.trim().lenght > 2){
    errors.name = "El campo 'Nombre' debe tener más de dos letras"
  }

  if(!form.email.trim() && form.email === form.email2){
    errors.email = "El campo 'Correo' es requerido"
  }else if(!regexEmail.test(form.email.trim())){
    errors.email = "El campo 'Correo' es incorrecto"
  }
  
  if(form.email !== form.emaildos){
    errors.emaildos = "Verificar correos"
  }

  if(!form.subjet.trim()){
    errors.subjet = "El campo 'Asunto' es requerido"
  }

  if(!form.comments.trim()){
    errors.comments = "El campo 'Comentario' es requerido"
  }else if(!regexComments.test(form.comments.trim())){
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
            type="email" 
            name="email"  
            placeholder="Escribe tu correo" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.email} 
            required
            />
            {errors.email && <p>{errors.email}</p>}

            <input 
            type="email" 
            name="emaildos"  
            placeholder="Vuelva a escribir su 'Correo'" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.emaildos} 
            required
            />
            {errors.emaildos && <p>{errors.emaildos}</p>}

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
            name="comments" 
            cols="50"
            rows="5"
            placeholder="Escribe tus comentarios" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value = {form.comments}
            required
            />
            {errors.comments && <p>{errors.comments}</p>}
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default ContactFrom