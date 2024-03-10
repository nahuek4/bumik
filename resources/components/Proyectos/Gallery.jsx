import React from 'react'
import { useState, useEffect } from 'react';
import { getProyectos } from '../../services/getServices'
import Paginacion from './Paginacion';


const Gallery = () => {
    const [datos, setDatos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(6);

    const maximo = datos.length / porPagina;

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
                    {datos.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((image, index) => (
                        <div key={index} className='galleryItem'>
                            <img src={`assets/img/sliders/proyectos/${image.imagen}`} alt={image.alt} />
                        </div>
                    ))}
                    <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;