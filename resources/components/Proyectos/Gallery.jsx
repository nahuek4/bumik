import React from 'react'
import { useState, useEffect } from 'react';
import { getProyectos } from '../../services/getServices'


const Gallery = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProyectos();
            setDatos(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="galleryContainComp">
                <div className="galleryContain">
                    {datos.map((image, index) => (
                        <div key={index} className='galleryItem'>
                            <div className="galleryItemImg"><img src={`assets/img/sliders/proyectos/${image.imagen}`} alt={image.alt} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery;