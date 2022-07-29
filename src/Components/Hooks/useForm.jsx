import { useState } from "react"

export const useForm = (initialForm, validateForm) => {
    const[form, setForm]= useState(initialForm)
    const [errors, setErros] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    //cambio de valores

    const handleChange = (e) =>{
        const{name, value} = e.target
    }

    const handleBlur = (e) =>{
        handleChange(e)
        setErros(validateForm(form))
    }

    const handleSubmit = (e) =>{}

    return{
        form: form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }

}