import { useState } from 'react';

import './App.css';
import Layout from './Components/Layout/Layout';
import Title from './Components/Title/Title'
import NavBar from './Components/NavBar/NavBar';
import ListaDeTarjetas from './Components/ListaDeTarjetas/ListaDeTarjetas'

function App() {
  const [productos, setProductos] = useState([
    { name: 'Print', price: 1200, img: '/images/6328.png' },
    { name: 'Print1', price: 1500, img: '/images/Brigadoon.jpeg' },
    { name: 'Print2', price: 1300, img: '/images/floral-prints-.jpeg' }
  ]);
  const [carro, setCarro] = useState([]);
  const [openCarro, setOpenCarro] = useState(false);


  const agregarAlCarro = (producto) => {
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name ?
        ({ ...x, cantidad: x.cantidad + 1 })
        : x)
      return setCarro(newCarro);
    }

    return setCarro(carro.concat({ ...producto, cantidad: 1 }))
  }

  const mostrarCarro = () => {
    if (!carro.length) {
      return
    }
    setOpenCarro(!openCarro);
  }

  return (
    <div>
      <NavBar carro={carro} mostrarCarro={mostrarCarro} openCarro={openCarro} />
      <Layout>
        <Title />
        <ListaDeTarjetas
          agregarAlCarro={agregarAlCarro}
          productos={productos}
        />
      </Layout>

    </div>
  );
}

export default App;
