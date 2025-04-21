import { React, useEffect, useState } from 'react';
import cartIcon from '../assets/carrito.svg';

const Productos = ({ url }) => {
    const imgStyle = {
        height: '250px',
        objectFit: 'contain'
    };
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProductos(data.products);
                console.log("Productos cargados:", data.products); // Se movió aquí
            })
            .catch(error => console.error('Error al obtener productos:', error));
    }, [url]);
    return (
        <div className='container d-flex justify-content-center gap-3'>
            {
                productos.map(producto=>(
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={producto.image} className="card-img-top" alt="Imagen de ejemplo" />
                        <div className="ms-0 me-0">
                            <div className="d-flex justify-content-center">
                                <a className="text-muted">{producto.category}</a>
                            </div>
                            <h5 className=" text-center">{producto.title.length > 10 ? producto.title.slice(0,15) + "..." : producto.title }</h5>
                            <p className="text-start">
                            {producto.description.length > 45  ? producto.description.slice(0,45) + "..." : producto.description }
                            </p>
                            <p className></p>
                            <a className="btn btn-outline-dark ">
                                <img src={cartIcon} alt="carrito-icon" className="me-2 cart-icon-carta"/>
                                Añadir al carrito 
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Productos;
