import React, { Component } from 'react';
import Gallery from './Data.json'
import './Card.css';

class LocalFileRead extends Component {
    render() {
        return (
            <>
                {Gallery.map(img => (
                    <div className="card" >
                    <img src={img.imgurl} className="card-img-top" alt={img.description} />
                    <div className="card-body">
                        <h5 className="card-title">{img.name}</h5>
                        <p className="card-text">{img.description}</p>
                    </div>
                    </div>
                ))}
            </>
        );
    }
}

export default LocalFileRead;