import React from 'react'
import flecha from '../assets/flecha.svg';
import EcoMarketLogo from '../assets/EcoMarket-logo.webp';

const Header = () => {
  return (
    <section className='row mt-5 mb-5'>
        <div className='col d-flex align-items-center'>
            <div className='text-start'>
                <h1 className="display-2 fw-bold text-success mb-3">¡Bienvenido a EcoMarket!</h1>
                <p className="lead text-muted mb-4 fs-3">
                    Tu lugar favorito para productos ecológicos, saludables y responsables con el planeta 🌱.
                </p>
                <div className=" d-flex  gap-3">
                <button className="btn btn-success d-flex align-items-center gap-2" type="submit">
                    Ver Destacados 
                    <img src={flecha} alt="Carrito" width="20" height="20" className="me-2" /> 
                </button>
                </div>
            </div>
        </div>

        <div className='col'>
            <img src={EcoMarketLogo} alt="logo-de-la-Empresa" className='img-fluid w-75' />
        </div>
    </section>
  )
}
export default Header