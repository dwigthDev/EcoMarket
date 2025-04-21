import React from 'react' 
import CardFiltros from '../Componentes/CardFiltros'
import Productos from '../Componentes/Productos.jsx'
const url = "https://fakestoreapi.in/api/products?limit=4";


const Tienda = () => {
    return (
    <div className='container'>
        <div className='d-flex card'>

            <div className='d-flex gap-2 card-body'>
                <h3>Filtrar por:  </h3>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            
                <select class="form-select" aria-label="Default select example">
                    <option selected>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
    )
}

export default Tienda