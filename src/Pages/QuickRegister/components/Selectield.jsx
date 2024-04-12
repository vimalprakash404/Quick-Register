import React, { useState } from 'react';
export default function SelectField({ id, name, label, values = [] }) {
    const [errorMessage,setErrorMessage] = useState("required")
    return (
        <div>
            <label for={id}>{label}</label>
            <select id={id} name={name}>
                <option value="">Select</option>
                {values.map((element) => <option value={element["value"]}>{element["displayName"]}</option>)}
            </select>
            {errorMessage && <span className="error">{errorMessage}</span>}
        </div>



    )
}