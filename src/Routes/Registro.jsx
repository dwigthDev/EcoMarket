import EcoMarketLogo from '../assets/EcoMarket-logo.webp';
import FormPersonal from '../Componentes/Registro/FormPersonal';
import FormContacto from '../Componentes/Registro/FormContacto';
import  {ThemeContext} from '../Contexts/ContextoGeneral.jsx'

// siempre se hacen los locos como si no les hubieran dicho nada 


import { useState } from 'react';
// nombre - rut - nacimiento - genero - tel - idtipocliente  ====>  contraseña correo 
  export function Registro() {
    const [cambio,setCambio] = useState(true)

  return(
    <ContextoGeneral>
      <div className='container pb-5 w-50'>
          <div className='card'>
              <div className='text-center'>
                <img src={EcoMarketLogo} alt="LogoDeEmpresa" width={"100"}/>
                <h1 className='display-8'>{cambio ? "Ingrese Datos" : "Crear correo"}</h1>
              </div>
              <div className="card-body">
                {cambio ? <FormPersonal/> : <FormContacto/> }
              </div>
              <button onClick={()=>{setCambio(!cambio)}} className='mt-2 mb-2 btn btn-success' >{cambio ? "Siguiente" : "Volver"} </button>
              <a  href='/' className='fs-6 text-center'>Volver a tienda</a>
          </div>
        </div>
    </ContextoGeneral>

  );
  }

