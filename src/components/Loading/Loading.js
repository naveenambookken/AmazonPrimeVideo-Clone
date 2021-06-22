import React from 'react'
import './Loading.css'

function Loading(props) {
    return (
    <div className={`sk-chase ${props.className}`}>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
     </div>
    )
}

export default Loading
