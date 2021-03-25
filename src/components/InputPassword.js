import React from 'react'
import './InputPassword.css'
import Eye from  '../assets/icons/remove_red_eye.svg'




const InputPassword = React.forwardRef( (props, ref) => {
    const [protect, setProtect] = React.useState(true);

    let focus = React.useRef();
    let type = protect ? "password" : "text";

    return (
        <div ref={focus} className="password-field">
            <input ref={ref} placeholder="password" type={type} onFocus={() => { focus.current.style.borderBottom = "1px solid #2CA6F3"; }} onBlur={() => { focus.current.style.borderBottom = "1px solid #C1C1C1";}}/>
            <button onClick={() => setProtect(!protect)}><img src={Eye} alt="icon"/></button>
        </div>
    )
})

export default InputPassword
