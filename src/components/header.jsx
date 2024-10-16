
import React from 'react';
import logo from '../assets/imgs/logo.svg'; 

const Header = () => {
  return (
<header>
        <img src={logo} width={'50%'} className='self-center' height={24} alt="Logo de Batabit" />
        <div class="header--title-container">
            <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
            <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
            <a class="header--button" href="#planes">
                Conoce nuestros planes
            </a>
        </div>
    </header>
  );
};

export default Header;
