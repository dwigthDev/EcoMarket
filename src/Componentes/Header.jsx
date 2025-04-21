import EcoMarketLogo from '../assets/EcoMarket-logo.webp';
import React from 'react'

const Header = () => {
  return (
    <section className='row'>
        <div className='col d-flex align-items-center'>
            <div className='text-start'>
                <h1 className="display-4 fw-bold text-success mb-3">¡Bienvenido a EcoMarket!</h1>
                <p className="lead text-muted mb-4 fs-3">
                    Tu lugar favorito para productos ecológicos, saludables y responsables con el planeta 🌱.
                </p>
                <div className=" d-flex  gap-3">
                    <a href="/login" className="btn btn-success">
                        Iniciar Sesión
                    </a>
                    <a href="/registro" className="btn btn-outline-success">
                        Crear Cuenta
                    </a>
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