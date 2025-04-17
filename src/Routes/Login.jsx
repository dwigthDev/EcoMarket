import EcoMarketLogo from '../assets/EcoMarket-logo.webp';
import { Input } from '../Componentes/Input.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react';





export function Login() {
//variables necesarias para  control de datos  
    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");

    function validarDatos(){
        console.log(contra," ",correo);
        
    }


    return (
        <form className='card' action={validarDatos}>
            <div>
                <img src={EcoMarketLogo} className="logo" alt="EcoMarket logo" />
            </div>
            <div className="container">
                <div>
                    <h2 className="fw-bold fs-1 m-0">Inicio de Sesión</h2>
                    <p>Ingresa con tu correo electrónico y contraseña.</p>
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
            </div>
            <button type='submit'>Iniciar Sesión</button>
            <div className="d-flex align-items-center my-2">
                <hr className="flex-grow-1" />
                <a href='/registro' className='ms-4 me-4'>Crear una cuenta</a>
                <hr className="flex-grow-1" />
            </div>
            <a  href='#' className='fs-6'>Recuperar contraseña</a>
        </form>
    );
}