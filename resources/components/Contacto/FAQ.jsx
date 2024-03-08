import React from 'react'
import { useState, useEffect } from 'react';
import { getDesplegable } from '../../services/getServices';

const FAQ = () => {
    const [datos, setDatos] = useState([]);
    const [selected, setSelected] = useState(null);

    let i = null;
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    function datosTipo(tipo) {
        return datos.filter(item => item.tipo === tipo).map((item, i) => {
            return (
                <div className="item" key={i}>
                    <div className="tittle" onClick={() => toggle(i)}>
                        <div className="vacio"></div>
                        <h1>{item.titulo}</h1>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? "content show" : "content"}><p>{item.descripcion}</p></div>
                </div>
            );
        });
    }

    useEffect(() => {
        const fetchData = () => {
            const data = getDesplegable();
            setDatos(data);
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="faqContainerComp">
                <div className="faqContain">
                    <div className="tittleFaq">
                        <h1>Preguntas <span className='spanRosa'>Frecuentes</span></h1>
                        <p>FAQS Generales</p>
                    </div>
                    {datosTipo("branding")}
                </div>
            </div>
        </div >
    )
}

export default FAQ