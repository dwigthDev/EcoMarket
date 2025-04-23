import { Input } from '../Componentes/Input.jsx'
import EcoMarketLogo from '../assets/EcoMarket-logo.webp';
import { useState } from 'react';

export function Registro() {
const [correo,setCorreo] = useState("");
const [contra,setContra] = useState("");
const [nombre,setNombre] = useState("");
const [APPAT,setAPPAT] = useState("");
const [APMAT,setAPMAT] = useState("");
const [genero,setGenero] = useState("");
const [nacimiento,setNacimiento] = useState("");

function validarDatos(e){
    e.preventDefault();
    function validarDatos(){
        if (
            !correo ||
            !contra ||
            !nombre ||
            !APPAT ||
            !APMAT ||
            !genero ||
            !nacimiento
          ) {
            alert("Todos los campos deben ser completados");
            return false; // Para impedir envío de formulario, si aplica
          }
        
    }

    console.log(`
            correo:${correo}
            contraseña:${contra}
            nombre:${nombre}
            APPAT:${APPAT}
            APMAT:${APMAT}
            genero:${genero}
            nacimiento:${nacimiento}
        `)
}


    return(
        <div className='card border '>
            <form className='container' onSubmit={validarDatos}>
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
                    <input type="text" placeholder='Nombres' className='form-control' onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div className='d-flex gap-3'>
                    <div className='text-start mb-2'>
                        <label htmlFor="apellidoPat" >Apellido Paterno:</label>
                        <input onChange={(e)=> setAPPAT(e.target.value)} type="text" placeholder='Apellido Pat' className='form-control'/>
                    </div>
                    <div className='text-start mb-2'>
                        <label htmlFor="apellidoMAt">Apellido Materno:</label>
                        <input onChange={(e)=> setAPMAT(e.target.value)} type="text" placeholder='Apellido Mat' className='form-control'/>
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
                <div className='text-start mb-2'>
                        <label htmlFor="apellidoMAt">Fecha de nacimiento:</label>
                        <input onChange={(e)=> setNacimiento(e.target.value)} type="date" placeholder='Apellido Mat' className='form-control'/>
                    </div>
                <label htmlFor="Genero" className='d-flex justify-content-start mb-2'>Género:</label>    
                <div className='mb-3 d-flex'>
                    <div className="form-check form-check-inline">
                        <input onChange={(e)=> setGenero(e.target.value)} className="form-check-input" type="radio" name="genero" id="inlineRadio1" value="M" />
                        <label  className="form-check-label" htmlFor="inlineRadio1" >Masculino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={(e)=> setGenero(e.target.value)} className="form-check-input" type="radio" name="genero" id="inlineRadio2" value="F" />
                        <label  className="form-check-label" htmlFor="inlineRadio2">Femenino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={(e)=> setGenero(e.target.value)} className="form-check-input" type="radio" name="genero" id="inlineRadio3" value="" />
                        <label  className="form-check-label" htmlFor="inlineRadio3">Otro</label>
                    </div>
                </div>

            </div>
            <button type='submit' className='btn btn-success' >Crear cuenta</button>
            <div className="d-flex align-items-center my-2">
                <hr className="flex-grow-1" />
                <a href='/login' className='ms-4 me-4'>Ya tengo cuenta</a>
                <hr className="flex-grow-1" />
            </div>
            </form>
        </div>
    );
}