import React from 'react'
import './ButtonNav.css'

export default function ButtonNav(props) {
    const { status, nama, onclick, icon, acticon } = props;

    return (
        status === nama ? <div className="button-nav-active" onClick={() => { onclick(nama) }}><div id="icon-active"><img src={acticon} alt="logo"/></div><span id="text" >{nama}</span></div> : <div className="button-nav" onClick={() => { onclick(nama) }} ><div id="icon"><img src={icon} alt="icon"/></div><span id="text" >{nama}</span></div>
    )
}
