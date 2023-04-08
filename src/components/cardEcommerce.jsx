import React from 'react';
import './cardComponents.css'

const CardEcommerce = ({img, title, description,price,pages}) => {
    
    return (
        
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className='price'>{price}</p>
                        <div className='botones'>
                        <a href=" " className="btn btn-primary">Ver</a>
                        <a href=" " className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
            </div>
        
    );
}

export default CardEcommerce;
