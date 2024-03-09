import React, { useEffect, useState } from 'react'
import logopB from '../../assets/img/logos/logopB.webp'
import logob from '../../assets/img/logos/logob.webp'
import About from './About'
import { Link } from 'react-router-dom'


const Header = () => {
    const [imagenSrc, setImagenSrc] = useState('imagen1.jpg');

    useEffect(() => {

        const cambiarImagenSegunAncho = () => {
            if (window.innerWidth <= 500) {
                setImagenSrc(logob);
            } else {
                setImagenSrc(logopB);
            }
        };

        cambiarImagenSegunAncho();

        window.addEventListener('resize', cambiarImagenSegunAncho);

        return () => {
            window.removeEventListener('resize', cambiarImagenSegunAncho);
        };
    }, []);
    return (
        <div>
            <div className='header'>
                <div className="logo">
                    <img className="logoBumik" src={imagenSrc} alt="logo bumik" />
                    <h1 className='textHeader'>Estudio de diseño gráfico & desarrollo web</h1>
                </div>

                <div className="buttonHeader">
                    <Link to="/servicios">
                        <button className="servicios">
                            <span className="circle" aria-hidden="true">
                                <span className="icon"></span>
                            </span>
                            <span className="serviceText">Servicios</span>
                        </button>
                    </Link>
                </div>
            </div>
            <About />
        </div>
    )
}

export default Header;