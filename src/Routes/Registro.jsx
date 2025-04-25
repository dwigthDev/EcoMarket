import EcoMarketLogo from '../assets/EcoMarket-logo.webp';
import { useState } from 'react';

export function Registro() {

  function validarDatos(e) {
    e.preventDefault();
    if (
      correo === "" ||
      contra === "" ||
      nombre === "" ||
      APPAT === "" ||
      APMAT === "" ||
      genero === "" ||
      nacimiento === ""
    ) {
      alert("Todos los campos deben ser completados");
      return;
    }

  }

  return (
    <div className="container py-4">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <form className="p-3" onSubmit={validarDatos}>
          <div className="text-center mb-3">
            <a href="/">
              <img
                src={EcoMarketLogo}
                className="img-fluid"
                alt="EcoMarket Logo"
                style={{ maxHeight: '80px' }}
              />
            </a>
          </div>

          <h2 className="fw-bold fs-4 text-center mb-4">Crear Cuenta</h2>
          <p className='m-0 '>Ingresa con tu correo electrónico y contraseña.</p>


          <div className="mb-3 text-start mt-2">
            <label htmlFor="nombres" className="form-label">
              Nombres:
            </label>
            <input
              id="nombres"
              type="text"
              placeholder="Nombres"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="row gx-2 text-start">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="apellidoPat" className="form-label">
                Apellido Paterno:
              </label>
              <input
                id="apellidoPat"
                type="text"
                placeholder="Apellido Paterno"
                className="form-control"
                value={APPAT}
                onChange={(e) => setAPPAT(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="apellidoMat" className="form-label">
                Apellido Materno:
              </label>
              <input
                id="apellidoMat"
                type="text"
                placeholder="Apellido Materno"
                className="form-control"
                value={APMAT}
                onChange={(e) => setAPMAT(e.target.value)}
              />
            </div>
          </div>


          <div className="mb-3 text-start">
            <label htmlFor="nacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              id="nacimiento"
              type="date"
              className="form-control"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
          </div>

          <fieldset className="mb-3">
            <legend className="col-form-label text-start">Género:</legend>
            <div className="d-flex flex-wrap gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  id="genM"
                  value="M"
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label className="form-check-label" htmlFor="genM">
                  Masculino
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  id="genF"
                  value="F"
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label className="form-check-label" htmlFor="genF">
                  Femenino
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="genero"
                  id="genO"
                  value="O"
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label className="form-check-label" htmlFor="genO">
                  Otro
                </label>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="btn btn-success w-100">
            Crear cuenta
          </button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <a href="/login" className="px-2">
              Ya tengo cuenta
            </a>
            <hr className="flex-grow-1" />
          </div>
        </form>
      </div>
    </div>
  );
}
