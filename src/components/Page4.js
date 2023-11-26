import React from "react";

export default function Page4({formData, setFormData }){
    const { fullName, lastName, email, password } = formData;
    console.log(formData);
    return(
        <div className="page4">
            <p>Page 4</p>
        </div>
    )
}