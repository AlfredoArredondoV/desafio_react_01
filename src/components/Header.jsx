import React from 'react'
import './Header.css';
const Header = (props) => {
    return (
        <div>
        <p className='title'>{props.titulo}</p>
        </div>
    )
}

export default Header