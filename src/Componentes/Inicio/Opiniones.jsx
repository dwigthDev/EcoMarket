import React from 'react'
import CardOpiniones from '../CardOpiniones'


const Opiniones = () => {
    const url = "https://dummyjson.com/comments?limit=4"
  return (
    <>
    <section className="container my-5">
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <h2 className="display-5 fw-bold text-success mb-2">
            ¿Que opinan de nosotros?
        </h2>
        <p className="lead text-muted fs-4 mb-4">
            Conoce las opiniones de nuestros clientes y que opinan de nuestro servicio
        </p>
      </div>

      <div className="col-12 col-md-4 col-sm-1 d-flex  justify-content-between w-100">
        <CardOpiniones url={url} />
      </div>
    </div>
  </section>
  </>
  )
}

export default Opiniones