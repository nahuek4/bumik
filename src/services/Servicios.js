import React from 'react';

const Servicios = ({ servicios }) => {
    return (
        <div className="serviceContflex">
            <div className="serviceContainer">
                {servicios.map((servicio, index) => (
                    <div className="boxBorder" key={index}>
                        <div className="serviceBox">
                            <ul>
                                <li className='liImg'>
                                    <img src={require(`../assets/icons/${servicio.imagen}`)} alt="servicio ofrecido" />
                                </li>
                                <li className='liServices'>{servicio.servicio}</li>
                                <li className='liTextServices'>
                                    {servicio.descripcion.split('\n').map((line, lineIndex) => (
                                        <p key={lineIndex}>{line}</p>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Servicios;