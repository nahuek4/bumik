import React from 'react'
import Gallery from './Gallery';

const HeaderProyectos = () => {
    return (
        <div>
            <div className="headerProyectoContainer">
                <div className="tituloContainerHeaderProyecto">
                    <h1>Nuestros <span className='spanRosa'>Trabajos</span></h1>
                    <p>¡Conocé algunos de los proyectos de los que fuimos parte!</p>
                </div>
            </div>
            <Gallery />
        </div>
    )
}

export default HeaderProyectos;