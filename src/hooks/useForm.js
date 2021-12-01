import { useState } from "react"

const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target}) => {
        //return the name from the value in this case we set the name as name
        // console.log(e.target.name);
        //this will give us the value from the input 'could be any key from the keyword'
        // console.log(target.value);
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    return[ values, handleInputChange]
}

export default useForm
