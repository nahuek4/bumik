import React from 'react'
import { useState } from 'react';

const FAQ = () => {
    const [selected, setSelected] = useState(null);
    let i = null;
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }
    return (
        <div>
            <div className="faqContainerComp">
                <div className="faqContain">
                    <div className="tittleFaq">
                        <h1>Preguntas <span className='spanRosa'>Frecuentes</span></h1>
                        <p>FAQS Generales</p>
                    </div>
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <div className="vacio"></div>
                            <h1>¿Puedo diseñar solo el logo de mi marca?</h1>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? "content show" : "content"}><p>{item.descripcion}</p></div>
                    </div>
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <div className="vacio"></div>
                            <h1>¿Cuáles son los métodos de pago de los servicios?</h1>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? "content show" : "content"}><p>{item.descripcion}</p></div>
                    </div>
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <div className="vacio"></div>
                            <h1>¿Cuánto demora del proceso de Branding?</h1>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? "content show" : "content"}><p>{item.descripcion}</p></div>
                    </div>
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <div className="vacio"></div>
                            <h1>¿En donde dan servicio?</h1>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? "content show" : "content"}><p>{item.descripcion}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ