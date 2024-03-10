import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Paginacion = ({ datos }) => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 3;

    useEffect(() => {
        setFilterData(
            datos.filter((item, index) => {
                return (index >= page * n) & (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <div className="App">
            <ul>
                {filterData && filterData.map((item, index) => <li>Item #{item}</li>)}
            </ul>
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