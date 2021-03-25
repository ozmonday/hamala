import React from 'react'
import SearchIcon from '../assets/icons/search.svg' 
import './Search.css'

export default function Search(props) {
    const { onclick } = props;
    let src = React.useRef()

    return (
        <div ref={src} className="search">
            <input onFocus={() => {src.current.style.border = "1px solid #2CA6F3";}} onBlur={() => {src.current.style.border = "1px solid #FAFAFC";}} placeholder="cari nama ibu hamil" />
            <button onClick={onclick}><img src={SearchIcon} alt="icon-search"/></button>
        </div>
    )
}
