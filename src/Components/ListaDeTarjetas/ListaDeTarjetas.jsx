import React from "react";
import Tarjeta from "../Tarjeta/Tarjeta";
import './ListaDeTarjetas.css'

const ListaDeTarjetas = (props) => {
  let { productos, agregarAlCarro } = props;
  return (
    <div className='listaDeTarjetas'>
      {productos.map((producto, index) => 
        <Tarjeta
          agregarAlCarro={agregarAlCarro}
          key={index}
          producto={producto}
        />
      )}
    </div>
  );
};

export default ListaDeTarjetas;
