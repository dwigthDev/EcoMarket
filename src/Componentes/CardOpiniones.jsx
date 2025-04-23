import {React, useState, useEffect} from 'react'
import Opiniones from './Inicio/Opiniones'


const CardOpiniones = ({url}) => {
    const [opiniones,setOpiniones] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setOpiniones(data.comments); 
        })
    })

    return (
        <>
            {opiniones.map(opinion =>
                <div className="card" key={opinion.id} style={{ maxWidth: 250 }}>
                <div className="wp-block-uagb-container testimonial-wrapper uagb-block-1c190e8a">
                <div className="wp-block-uagb-star-rating uagb-block-abdc9429">
                    <div className="text-center">
                        <img src="https://unavatar.io/x/duolingo" alt="foto-de-usuario" width="50px" className="rounded mb-3"/>
                    </div>
                    <div className="uag-star-rating" title="5/5">
                        <span className="uag-star">★</span>
                        <span className="uag-star">★</span>
                        <span className="uag-star">★</span>
                        <span className="uag-star">★</span>
                        <span className="uag-star">★</span>
                    </div>
                </div>
                <div className="wp-block-uagb-advanced-heading uagb-block-5f760e99">
                    <p className="uagb-heading-text">
                    {opinion.body}
                    </p>
                    <p className="uagb-desc-text">
                    <strong>{opinion.user.fullName}</strong>
                    </p>
                </div>
                </div>
            </div>
            )}
        </>
        );
}

export default CardOpiniones