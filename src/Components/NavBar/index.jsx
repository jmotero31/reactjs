import React from 'react';
import CardWidget from '../CartWidget';
import './styles.css';


const NavBar = () =>{
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light nav">
<div className="container-fluid">
  <a className="navbar-brand" href="#" id="blanco"><img  src='/img/1.jpg' alt="Rieger" className="logo"/>  R i e g e r | Fábrica de cerveza</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className='collapse navbar-collapse justify-content-end' id="navbarNav">
            <ul className='navbar-nav ul'>
              <li className='nav-item'>
                <a className='nav-link active a' aria-current="page" href="#">Nosotros</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link a' href="#">Contacto</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link a' href="#">Ingresa</a>
              </li>
              <li>
                <a className='nav-link a' href="#"><CardWidget/></a>
              </li>
            </ul>
          </div>
  </div>
</nav>
  );
}

export default NavBar;