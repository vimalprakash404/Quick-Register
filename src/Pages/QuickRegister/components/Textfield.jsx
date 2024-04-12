import React , {useState}from "react"
import {  validateEmailTextBox,validateNameTextBox } from "../validation"
export default function Textfield({id , name, label , type , value = "" , disabled = false }) {
    const [errorMessage,setErrorMessage] = useState(false);
    const functionReloader = type === "text" ? validateNameTextBox : validateEmailTextBox;
    return (
        <div>
            <label for={id}>{label}:</label>
            <input type={type} id={id} name={name}  disabled={disabled}  value={value===""?undefined : value } onChange={()=>{var val = document.getElementById(id).value; console.log(functionReloader); functionReloader( val, console.log,setErrorMessage)}}/>
           {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
    )
}