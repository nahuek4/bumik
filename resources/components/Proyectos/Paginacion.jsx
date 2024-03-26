import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { getProyectos } from '../../services/getServices';

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
                        <div key={index} className='galleryItem'>
                            <img src={`/assets/img/sliders/proyectos/${image.imagen}`} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <ReactPaginate
                containerClassName={"pagination"}
                activeClassName={"activePaginate"}
                pageClassName={"page-item"}
                onPageChange={(event) => setPage(event.selected)}
                breakLabel="..."
                pageCount={Math.ceil(datos.length / n)}
                previousLabel="<- "
                nextLabel=" ->"
            />
        </div>
    );
}

export default Paginacion;
