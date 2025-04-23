import React from 'react' 
import CardFiltros from '../Componentes/Tienda/CardFiltros.jsx'
import Productos from '../Componentes/Productos.jsx'
const url = "https://fakestoreapi.in/api/products?limit=20";


const Tienda = () => {
    return (
        <section className=''>            
            <div className='mb-3'>
                <CardFiltros></CardFiltros>
            </div>
            <div>
                <Productos url={url}></Productos>
            </div>
        </section>        
        
    )
}

export default Tienda