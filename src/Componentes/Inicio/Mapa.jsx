import React from 'react'
import Acordeon from '../Acordeon'


const Mapa = () => {
  return (
    <section className='d-flex gap-3'>
      <div className='col'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0138036448247!2d-70.67000449999999!3d-33.448946899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c45558896371%3A0xe38282e406413635!2sDuoc%20UC%3A%20Sede%20Alameda!5e0!3m2!1ses!2scl!4v1745432102000!5m2!1ses!2scl" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className=''>
        <h1 className='display-5 fw-bold text-success text-start'>Visita nuetra sede o Contactanos</h1>
        <p className='text-start'>Visítanos en nuestra ubicación o contáctanos a través de los siguientes medios.</p>
        <hr/>
        <div className=''>

          <Acordeon></Acordeon>
        </div>
      </div>
    </section>
  )
}

export default Mapa