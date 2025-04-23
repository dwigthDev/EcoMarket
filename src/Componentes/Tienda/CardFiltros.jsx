import React from 'react'


const CardFiltros = () => {
  return (
    <div className='container'>
        <div className='d-flex card'>
            <div className='d-flex gap-2 card-body'>
                <h3>Filtrar por:  </h3>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue={""}>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example">
                    <option defaultValue={""}>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue={""}>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default CardFiltros