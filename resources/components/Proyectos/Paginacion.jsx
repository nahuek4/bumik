import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Paginacion = () => {
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                pageRangeDisplayed={3}
                pageCount={10}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                activeClassName="bg-purple text-white"
            />
        </>
    );
}

export default Paginacion;