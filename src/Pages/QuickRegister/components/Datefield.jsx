import React ,{useState} from 'react'

export default function DateField({id  , name , label}) {
    const [errorMessage,setErrorMessage] = useState(false)
    return (
        <div>
            <label>{label}</label>
            <input type="date" id={id}  name={name} />
            {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
    )
}