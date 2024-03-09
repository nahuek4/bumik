import React from 'react'
import logob from '../../assets/img/logos/logopB.webp'
import About from './About'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="logo">
                    <img className="logoBumik" src={logob} alt="logo bumik" />
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