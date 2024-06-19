import React from 'react';

function Footer() {
  const imagePath = '../Assets/logo.png';
  return (
    <footer>
    <img src= '{require(\ "./logo.png")}' alt='Little Lemon Logo'/>
     <ul>
        <h1>Doormat Navigation</h1>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/orderonline">Order Online</a></li>
        <li><a href="/login">Login</a></li>
    </ul>
    <ul>
        <h1>Contacts</h1>
        <li><a href="/adress">Adress</a></li>
        <li><a href="/phonenumber">Phone Number</a></li>
        <li><a href="/email">Email</a></li>
    </ul>
    <ul>
        <h1>Social Media Links</h1>
        <li><a href="/facebook">Facebook</a></li>
        <li><a href="/instagram">Instagram</a></li>
        <li><a href="/twitter">Twitter</a></li>
    </ul>
    </footer>
  );
}

export default Footer;