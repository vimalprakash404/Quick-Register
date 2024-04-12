import React from "react"

export default function Coupon({id , name, label , type , value = "" , disabled = false }) {
    return (
        <div>
            <label for={id}>{label}:</label>
            <input type={type} id={id} name={name}  disabled={disabled}  value={value===""?undefined : value } style={{display:"inline-block", width :"50%"}} />
            <div className="couponButton">Apply</div>
        </div>
    )
}