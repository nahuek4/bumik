import React, { useState, useEffect } from 'react';
import ListService from './ListService';
import { getServices } from '../../services/getServices';
import Works from './Works';

const Services = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = getServices();
            setDatos(data);
        };

        fetchData();
    }, []);

    return (
        <div className="serviceBackground">
            <div className='servicesContain'>
                <div className="containerList">
                    <div className="serviciosText">
                        <h1>Nuestros <span>Servicios</span></h1>
                        <p>What we do</p>
                    </div>
                    <div className='serviciosGen'>
                        <ListService servicios={datos} />
                    </div>
                    <div className="botonService">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZL63YOXJUQ2Ee7VYszlfoi8bPjeuZvujjGCmt-j_ewmTi5A/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className='botonServicios'>¡Cotizá tu proyecto!</button></a>
                    </div>
                </div>
            </div>
            <Works />
        </div>
    );
};

export default Services;