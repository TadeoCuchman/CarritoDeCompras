import React from "react";
import Button from "../Button/Button"
import './Tarjeta.css'

const Tarjeta = (props) => {
  const { agregarAlCarro, producto } = props;

  return (
    <div className="tarjeta">
      <img src={producto.img} alt={producto.name} />
      <p>{producto.name}</p>
      <p>{producto.price}</p>
      <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al Carro
      </Button>
    </div>
  );
};

export default Tarjeta;
