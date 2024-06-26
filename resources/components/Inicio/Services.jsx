import React, { useState, useEffect } from 'react';
import { getServices } from '../../services/getServices';
import Works from './Works';
import { Slide } from "react-awesome-reveal";

const Services = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getServices();
            setDatos(data);
        };

        fetchData();
    }, []);

    return (
        <div className="serviceComp">
            <div className="serviceBackground">
                <Slide direction='up' duration="2000" triggerOnce fraction={0} cascade>
                    <div className='servicesContain'>
                        <div className="serviciosText">
                            <h1>Nuestros <span className='spanVerde'>Servicios</span></h1>
                        </div>
                        <div className='serviciosGen'>
                            <div className="serviceContainer">
                                {datos.map((servicio, index) => (
                                    <div className="boxBorder" key={index}>
                                        <div className="serviceBox">
                                            <ul>
                                                <li className='liImg'>
                                                    <img src={`../../assets/icons/${servicio.imagen}`} alt="servicio ofrecido" />
                                                </li>
                                                <li className='liServices'>{servicio.servicio}</li>
                                                <li className='liTextServices'>
                                                    {servicio.descripcion.split('\n').map((line, lineIndex) => (
                                                        <p key={lineIndex}>{line}</p>
                                                    ))}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="botonService">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZL63YOXJUQ2Ee7VYszlfoi8bPjeuZvujjGCmt-j_ewmTi5A/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className='botonServicios'>¡Cotizá tu proyecto!</button></a>
                        </div>
                    </div>
                </Slide >
            </div>
            <Works />
        </div >
    );
};

export default Services;