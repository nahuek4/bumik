import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { getProyectos } from '../../services/getServices';

const Paginacion = () => {
    const [datos, setDatos] = useState([]);
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState(0);
    const n = 4;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProyectos();
            setDatos(data);
        };

        fetchData();

        setFilterData(
            datos.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <div className="App">
            <div className="galleryContainComp">
                <div className="galleryContain">
                    {filterData && filterData.map((image, index) => (
                        <div key={index} className='galleryItem'>
                            <img src={`assets/img/sliders/proyectos/${image.imagen}`} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <ReactPaginate
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                onPageChange={(event) => setPage(event.selected)}
                breakLabel="..."
                pageCount={Math.ceil(datos.length / n)}
                previousLabel="<- previous"
                nextLabel="-> next"
            />
        </div>
    );
}

export default Paginacion;