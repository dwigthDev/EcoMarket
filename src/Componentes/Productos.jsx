import { React, useEffect, useState } from 'react';

const Productos = ({url}) => {
    const imgStyle = {
        height: '250px',
        objectFit: 'contain'
    }
    const [productos,setProductos ] = useState([])

    // consumir api
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setProductos(data.products); console.log(productos);}
            )
            .catch(error => console.error('Error al obtener productos:', error));
    }, [url]);

    return (
        <div className='container d-flex justify-content-center gap-3'>
            {
                productos.map(producto=>(
                    <div className="card" style={{ width: '20rem' }}>
                    <img src={producto.image} className="card-img-top" alt="Imagen de ejemplo" />
                    <div className="ms-0 me-0">
                      <h5 className="card-title">Título de la Tarjeta</h5>
                      <p className="text-start">
                        {producto.description.length > 40  ? producto.description.slice(0,40) + "..." : producto.description }
                      </p>
                      <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                    </div>
                  </div>
                ))
            }
        </div>
    );
}

export default Productos