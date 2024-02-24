import React from 'react'
import Servicios from './Servicios';

const HeaderService = () => {
    return (
        <header className='headerService'>
            <div className="headerServiceContain">
                <div className="tituloServicios">
                    <h1>Nuestros <span>Servicios</span></h1>
                    <p>What we do</p>
                </div>
                <div className="textServicios">
                    <p>Trabajamos de forma remota, colaborando con <span className='spanVerde'>personas de todo el mundo</span>, <span className='spanRosa'>sin importar dónde te encuentres.</span></p>
                    <p>Nuestra pasión se centra en la creación de marcas auténticas y significativas que reflejen la identidad y los</p>
                    <p>valores de cada cliente. Además, diseñamos páginas web profesionales y funcionales que impulsan tus objetivos online.</p>
                </div>
            </div>
            <Servicios />
        </header>
    )
}

export default HeaderService;