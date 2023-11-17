import React from 'react';
import './navbar.css'; // Asegúrate de tener tu hoja de estilos

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item"><button onClick={onLoginClick}>Login/Register</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
