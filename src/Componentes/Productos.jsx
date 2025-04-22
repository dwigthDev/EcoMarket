import React, { useEffect, useState } from 'react';
import cartIcon from '../assets/carrito.svg';

const Productos = ({ url }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
        setProductos(data.products);
        console.log("Productos cargados:", data.products);
        })
        .catch(error => console.error('Error al obtener productos:', error));
    }, [url]);

    return (
        <div className="">
        <div className="row g-4">
            {productos.map(producto => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={producto.id}>
                <div className="border p-3 rounded-3     h-100 shadow-sm">
                    <img
                        src={producto.image}
                        className="card-img-top p-3"
                        alt={producto.title.slice(0,10)}
                        style={{ height: '250px', objectFit: 'contain' }}
                    />
                <div className=" p-0 d-flex flex-column justify-content-between">
                <div>
                    <p className="text-muted text-center small mb-1">{producto.category}</p>
                    <h5 className="text-center fw-semibold">
                    {producto.title.length > 15
                        ? producto.title.slice(0, 15) + '...'
                        : producto.title}
                    </h5>
                    <p className="text-muted small">
                    {producto.description.length > 60
                        ? producto.description.slice(0, 60) + '...'
                        : producto.description}
                    </p>
                </div>
                <div className="text-center mt-auto">
                    <a className="btn btn-outline-success">
                    <img
                        src={cartIcon}
                        alt="carrito-icon"
                        className="me-2"
                        width={20}
                        height={20}
                    />
                    Añadir al carrito
                    </a>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Productos;
