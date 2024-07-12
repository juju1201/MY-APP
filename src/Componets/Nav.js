import React from 'react';
import logo from '../Componets/Assets/logo.png';
import '../Styles/NavStyles.css';


function Nav() {
  return (
    <nav>
      <img src={logo} alt='littlelemon logo'/>
      <ul>
        <li><a href="/home">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/reservations">RESERVATIONS</a></li>
        <li><a href="/orderonline">ORDER ONLINE</a></li>
        <li><a href="/login">LOGIN</a></li>
      </ul>
    </nav>
  );
}

export default Nav;