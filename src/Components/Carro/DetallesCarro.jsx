import React from 'react';
import './DetallesCarro.css'

const DetallesCarro = (props) => {
    const { carro } = props;

    return (
        <div className="detallesCarro">
            <ul>
                {carro.map(x => <li key={x.name} className="productoLi">
                    <img className="imgCarro" src={x.img} alt={x.name} />
                    {x.name} <span> {x.cantidad}</span>
                </li>)}

            </ul>
        </div>
    );
};

export default DetallesCarro;