import { useState } from "react"
// import { helpHttp } from "../../utils/helpHttp"

export const useForm = (initialForm, validateForm) => {
    const[form, setForm]= useState(initialForm)
    const [errors, setErros] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    //cambio de valores
  
    const handleChange = (e) =>{
        const{name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleBlur = (e) =>{
        handleChange(e)
        setErros(validateForm(form))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setErros(validateForm(form))

        if(Object.keys(errors).length === 0){
            alert("Se envia pedido")
            setLoading(true)
            // helpHttp()
            //     .post()
            //     .then((res) => {})

        }else{
            return
        }
    }

    return{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }

}