import React from 'react'

function Alert(props) {
    const capitalized =(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
   props.alert && <div className="row justify-content-center"><div className={`alert alert-${props.alert.type} col-md-4 text-center  alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg} 
    </div></div>
    )
}

export default Alert
