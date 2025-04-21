import React from 'react'
import Productos from './Productos'

const Populares = () => {
  const url = "https://fakestoreapi.in/api/products?limit=4";
  
  return (
    <>
        <div>
            <h2 className='display-5 fw-bold text-success mb-1'>Conoce nuestros productos</h2>
            <p className='lead text-muted mb-4 fs-4'>Descubre los productos mas populares y amados por nuestros clientes</p>
        </div>
        <div>
            <Productos url={url} ></Productos>
        </div>
    </>
  )
}

export default Populares