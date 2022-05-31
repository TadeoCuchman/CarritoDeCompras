import React from 'react';
import Bubble from './Bubble';
import './Carro.css'
import DetallesCarro from './DetallesCarro'

const Carro = (props) => {
    const { carro, mostrarCarro, openCarro } = props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

    return (
        <div>
            <span className="bubble">
                {cantidad > 0 ?
                <Bubble value={cantidad}/>
                : ''
                }
            </span>
            <button className='carroButton' onClick={() => mostrarCarro()}>
                Carro
            </button>
            {openCarro ?
            <DetallesCarro carro={carro}/>
            : ''
            } 
        </div>
    );
};

export default Carro;