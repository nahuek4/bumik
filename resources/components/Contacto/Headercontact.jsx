import React from 'react'
import Form from './Form';

const Headercontact = () => {
    return (
        <div>
            <div className="headerContactContainer">
                <div className="headerContactTitulo">
                    <h1>¡Trabajemos <span className='spanRosa'>Juntos</span>!</h1>
                    <p>¿Estas buscando un diseño único y atractivo para tu marca?</p>
                    <p>Con nuestros servicios, tu marca será reconocida y respetada en su industria. </p>
                    <p>¡Contáctanos hoy para obtener un diseño de marca de calidad!</p>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Headercontact;