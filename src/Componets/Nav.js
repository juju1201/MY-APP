import React from 'react';
import logo from '../Assets/Logo.svg';

function Nav() {
  return (
    <nav>
      <img src='{logo}' alt='Little Lemon Logo'/>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/orderonline">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;