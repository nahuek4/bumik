import React from 'react';
import Servicios from "../../services/Servicios";

const ListService = ({ servicios }) => {
    return (
        <div>
            <Servicios servicios={servicios} />
        </div>
    );
}

export default ListService;