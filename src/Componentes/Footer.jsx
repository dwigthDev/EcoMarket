import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-success text-white py-4 ">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0 text-center text-md-start">
          <h2 className="h5">EcoMarket SPA</h2>
          <p className="small mb-0">© {new Date().getFullYear()} EcoMarket SPA. Todos los derechos reservados.</p>
        </div>
        <nav>
          <ul className="d-flex gap-3 mb-0">
                <a href="/" className="text-white text-decoration-none">Inicio</a>
                <a href="/" className="text-white text-decoration-none">Nosotros</a>
                <a href="/" className="text-white text-decoration-none">Contacto</a>
                <a href="/tienda" className="text-white text-decoration-none">Tienda</a>
          </ul>
        </nav>
      </div>
    </footer>
  );
}