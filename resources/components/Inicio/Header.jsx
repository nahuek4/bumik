import React, { useEffect, useState } from 'react'
import logopB from '../../assets/img/logos/logopB.webp'
import logob from '../../assets/img/logos/logob.webp'
import About from './About'
import { Link } from 'react-router-dom'
import { Bounce } from "react-awesome-reveal";

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
                <Bounce duration="1800" triggerOnce>
                    <div className="logo">
                        <img className="logoBumik" src={imagenSrc} alt="logo bumik" />
                        <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/W0VaYyKTaT03PDF5lc" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/W0VaYyKTaT03PDF5lc">via GIPHY</a></p>
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
                </Bounce>
            </div>
            <About />
        </div>
    )
}

export default Header;