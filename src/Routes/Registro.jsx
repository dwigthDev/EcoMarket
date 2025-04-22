import { Input } from '../Componentes/Input.jsx'
import EcoMarketLogo from '../assets/EcoMarket-logo.webp';
import { useState } from 'react';

export function Registro() {
const [correo,setCorreo] = useState("");
const [contra,setContra] = useState("");

    return(
        <div className='card border '>
            <form className='container'>
            <div>
                <a href="/">
                    <img src={EcoMarketLogo} className="logo" alt="volver"  />
                </a>
            </div>
            <div className="container">
                <div>
                    <h2 className="fw-bold  fs-1 m-0">Crear Cuenta</h2>
                </div>
                <div className='text-start mb-2'>
                    <label htmlFor="DatosPersonales" className=''>Nombres:</label>
                    <input type="text" placeholder='Nombres' className='form-control'/>
                </div>
                <div className='d-flex gap-3'>
                    <div className='text-start mb-2'>
                        <label htmlFor="apellidoPat" >Apellido Paterno:</label>
                        <input type="text" placeholder='Apellido Pat' className='form-control'/>
                    </div>
                    <div className='text-start mb-2'>
                        <label htmlFor="apellidoMAt">Apellido Materno:</label>
                        <input type="text" placeholder='Apellido Mat' className='form-control'/>
                    </div>
                </div>
                <div>
                    <Input
                        titulo="Correo"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <Input
                        titulo="Contraseña"
                        type="password"
                        value={contra}
                        onChange={(e) => setContra(e.target.value)}
                    />
                </div>
                <label htmlFor="Genero" className='d-flex justify-content-start mb-2'>Género:</label>    
                <div className='mb-3 d-flex'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="genero" id="inlineRadio1" value="masculino" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Masculino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="genero" id="inlineRadio2" value="femenino" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Femenino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="genero" id="inlineRadio3" value="otro" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Otro</label>
                    </div>
                </div>

            </div>
            <button type='submit' className='btn btn-success'>Crear cuenta</button>
            <div className="d-flex align-items-center my-2">
                <hr className="flex-grow-1" />
                <a href='/login' className='ms-4 me-4'>Ya tengo cuenta</a>
                <hr className="flex-grow-1" />
            </div>
            </form>
        </div>
    );
}