import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Paginacion = () => {
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 3;

    useEffect(() => {
        setFilterData(
            data.filter((item, index) => {
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
                pageCount={Math.ceil(data.length / n)}
                previousLabel="<- previous"
                nextLabel="-> next"
            />
        </div>
    );
}

export default Paginacion;