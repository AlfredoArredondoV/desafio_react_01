import React from 'react'
import './Footer.css';

const Footer = (props) => {
    return (
        <div>
        <p className='footerPage'>{props.titulo}</p>
        <button type="button" className="btn btn-primary">
            Profile <span className="badge badge-light">9</span>
            {/* <span className="sr-only">unread messages</span> */}
        </button>
        </div>
    )
}

export default Footer