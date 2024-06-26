import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { getProyectos } from '../../services/getServices';
import { Fade } from "react-awesome-reveal";

const Paginacion = () => {
    const [datos, setDatos] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [page, setPage] = useState(0);
    const n = 4;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProyectos();
            setDatos(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (datos.length > 0) {
            setFilterData(
                datos.slice(page * n, (page + 1) * n)
            );
        }
    }, [datos, page]);

    return (
        <div>
            <div className="galleryContainComp">

                <div className="galleryContain">
                    {filterData.map((image, index) => (
                        <Fade triggerOnce duration={3500}>
                            <div key={index} className='galleryItem'>
                                <img src={`/assets/img/sliders/proyectos/${image.imagen}`} alt={image.alt} />
                                <div className="capa">
                                    <a target="_blank" href={image.href}><h3>VER EN BEHANCE</h3></a>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
            <div className="paginateReact">
                <ReactPaginate
                    containerClassName={"pagination"}
                    activeClassName={"activePaginate"}
                    pageClassName={"page-item"}
                    onPageChange={(event) => setPage(event.selected)}
                    pageCount={Math.ceil(datos.length / n)}
                    previousLabel="Anterior "
                    nextLabel=" Siguiente"
                />
            </div>
            <div className="galleryTextContain">
                <div className="galleryText">
                    <p>¿Tenes alguna consulta de cómo podrías llevar tu proyecto adelante?</p>
                    <p>Envíanos un mensaje a <span className='spanRosa'>estudiobumik@gmail.com</span> o completá el formulario</p>
                    <p>y te responderemos a la brevedad.</p>
                </div>
                <div className="botonService">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZL63YOXJUQ2Ee7VYszlfoi8bPjeuZvujjGCmt-j_ewmTi5A/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className='botonServicios'>¡Cotizá tu proyecto!</button></a>
                </div>
            </div>
        </div >
    );
}

export default Paginacion;
