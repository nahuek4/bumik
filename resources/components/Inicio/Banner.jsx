import React from 'react'
import Services from './Services';

const Banner = () => {
    return (
        <div className='bannerI'>
            <div className="bannerText">
                <div className="investigacion">
                    <h1>01</h1>
                    <h2>Investigación.</h2>
                    <p>Realizamos una investigación exhaustiva sobre el problema o necesidad que se quiere resolver para entender las necesidades del usuario el contexto en el que se utilizará el diseño y los objetivos específicos del proyecto.</p>
                </div>
                <div className="desarrollo">
                    <h1>02</h1>
                    <h2>Desarrollo.</h2>
                    <p>Generáramos ideas y conceptos para la solución a través de bocetos, diagramas y prototipos básicos para probar diferentes enfoques.</p>
                </div>
                <div className="resultado">
                    <h1>03</h1>
                    <h2>Resultado.</h2>
                    <p>Desarrollamos el diseño final mediante la creación de maquetas y prototipos detallados para llevar a cabo pruebas de usuario para asegurar que el diseño cumpla con las necesidades y objetivos del proyecto.</p>
                </div>
            </div>
            <Services />
        </div>
    )
}

export default Banner;