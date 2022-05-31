import React from 'react';
import './NavBar.css'
import Logo from '../Logo/Logo';
import Carro from '../Carro/Carro'

const NavBar = (props) => {
    const { carro, mostrarCarro, openCarro } = props;
    return (
        <nav>
            <Logo/>
            <Carro carro={carro} mostrarCarro={mostrarCarro} openCarro={openCarro} />
        </nav>
    );
};

export default NavBar;