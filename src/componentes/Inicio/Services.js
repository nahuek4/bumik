import React, { useState, useEffect } from 'react';
import ListService from './ListService';
import { getServices } from '../../services/getServices';

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
        <div className='servicesContain'>
            <div className="containerList">
                <div className="serviciosText">
                    <h1>Nuestros <span>Servicios</span></h1>
                    <p>What we do</p>
                </div>
                <div className='serviciosGen'>
                    <ListService servicios={datos} />
                </div>
            </div>
        </div>
    );
};

export default Services;