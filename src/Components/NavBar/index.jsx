// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { Shop } from '../../Contex/ShopContext';
import CardWidget from '../CartWidget';
import './styles.css';

//de aca
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// const {estadoA} = useContext(Shop)
// console.log(estadoA)

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <>
        <Link to='/' className="navbar-brand" id="blanco"><img  src='/img/1.jpg' alt="Rieger" className="logo" />  R i e g e r | Ecoomers</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/category/electronics' className='nav-link active a' aria-current="page">Electrónica</Link>
            <Link to='/category/jewelery' className='nav-link active a' aria-current="page">Joyería</Link>
            <Link to= "/category/women's clothing" className='nav-link active a' aria-current="page">Ropa de Mujer</Link>
            <Link to="/category/men's clothing" className='nav-link active a' aria-current="page">Ropa de Hombre</Link>
          </Nav>
            <CardWidget/>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default NavBar;

// hasta aca

// const NavBar = () =>{

// // const {estadoA} = useContext(Shop)
// // console.log(estadoA)

//   return (
// <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
// <div className="container-fluid">
//   <Link to='/' className="navbar-brand" id="blanco"><img  src='/img/1.jpg' alt="Rieger" className="logo"/>  R i e g e r | Fábrica de cerveza</Link>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className='collapse navbar-collapse justify-content-end' id="navbarNav">
//             <ul className='navbar-nav ul'>
//               <li className='nav-item'>
//                 <Link to='/category/electronics' className='nav-link active a' aria-current="page">Electronica</Link>
//               </li>
//               <li className='nav-item'>
//                 <Link to='/category/jewelery' className='nav-link a'>Joyeria</Link>
//               </li>
//               <li className='nav-item'>
//                 <Link to= "/category/women's clothing" className='nav-link a'>Ropa de Mujer</Link>
//               </li>
//               <li>
//                 <Link to="/category/men's clothing" className='nav-link a'>Ropa de Hombre </Link>
//               </li>
             
//                 <CardWidget/>
              
//             </ul>
//           </div>
//   </div>
// </nav>
//   );
// }

// export default NavBar;