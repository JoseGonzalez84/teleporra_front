import React from "react"

const InputControl = (params) => {

    const ControlType = (type) => params.type === typeof undefined || params.type === '' ? 'text' : params.type

    return(
        <div className="field">
            <label className="label">{params.label}</label>
            <div className="control">
                <input className={params.class} type={params.type} placeholder={params.placeholder} />
            </div>
        </div>
    )
}

export default InputControl