import React from 'react'
import logob from '../../assets/img/logos/logob.png'
import Section from './Section'


const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="logo">
                    <img src={logob} alt="logo bumik" />
                    <h1 className='textHeader'>Estudio de diseño gráfico & desarrollo web</h1>
                </div>

                <div className="buttonHeader">
                    <button className="servicios">
                        <span className="circle" aria-hidden="true">
                            <span className="icon"></span>
                        </span>
                        <span className="serviceText">Servicios</span>
                    </button>
                </div>
            </div>
            <Section />
        </div>
    )
}

export default Header;