import React from 'react'
import Carrito  from '../assets/carrito.svg'
import EcoMarketLogo from '../assets/logo_tipografico.png';

export const NavBar = ()=> {
    const cartIcon = Carrito
  return (
<nav className="navbar fixed-top bg-success navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <img src={EcoMarketLogo} alt="Logo-de-la-empresa" width="50px"/>
    <strong className="navbar-brand text-success" ></strong>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Alineamos el UL a la derecha */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        {/* Botón también alineado con los ítems */}
        <li className="nav-item ms-2">
        <button className="btn btn-success d-flex align-items-center" type="submit">
          <img src={cartIcon} alt="Carrito" width="20" height="20" className="me-2" /> Carrito
        </button>

        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar