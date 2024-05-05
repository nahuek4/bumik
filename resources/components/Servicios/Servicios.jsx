import React from 'react'
import { useState, useEffect } from 'react';
import { getDesplegable } from '../../services/getServices';
import { Slide } from "react-awesome-reveal";


function datosTipo(datos, tipo, selected, toggle) {
    return datos
        .filter(item => item.tipo === tipo)
        .map((item, i) => {
            let descripcionItems = null;
            if (typeof item.descripcion === 'string') {
                if (item.descripcion.includes('<br>')) {
                    descripcionItems = item.descripcion.split('<br>').map((punto, index) => (
                        <li key={index}>{punto.trim()}</li>
                    ));
                } else {
                    descripcionItems = <li>{item.descripcion}</li>;
                }
            }

            return (
                <div className="item" key={i}>
                    <div className="tittle" onClick={() => toggle(i)}>
                        <div className="vacio"></div>
                        <h1>{item.titulo}</h1>
                        <span className='spanVerde'>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? "content show" : "content"}>
                        <div className="descripcionServics">{descripcionItems && <ul>{descripcionItems}</ul>}</div>
                    </div>
                </div>
            );
        });
}

const Servicios = () => {
    const [datos, setDatos] = useState([]);
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDesplegable();
            setDatos(data);
        };

        fetchData();
    }, []);

    return (
        <div className='serviciosServComp'>
            <div className="serviciosContain">
                <div className="serviceServicio">
                    <Slide duration="1800" triggerOnce fraction="0">
                        <div className="serviceServicioimg">
                            <div className=""><img src="assets/img/fotos/brandingzhu.webp" alt="innocenti logo" /></div>
                        </div>
                    </Slide>
                    <Slide duration="1800" triggerOnce direction='right' fraction="0">
                        <div className="containerData">
                            <div className="tituloServicio">
                                <h1 className='spanVerde'>Branding</h1>
                                <p className='descripcionServicio'> No se trata solamente de tener un logo atractivo, sino de crear una identidad que te represente y te diferencie de la competencia</p>
                                <p className='descripcionServicio'> Es por eso que ofrecemos servicios de Branding que van más allá de un simple diseño. Trabajamos contigo para crear una identidad sólida que refleje tus valores y personalidad, y que conecte con tu audiencia de manera efectiva.</p>
                                <p className='descripcionServicio'>Nuestros paquetes están diseñados para ofrecerte opciones que se adapten a tus necesidades y presupuesto. Además, también podemos personalizar un paquete para ti si deseas incluir algo más específico.</p>
                                <p className='descripcionServicio'>No subestimes el poder del branding en tu negocio. Una marca bien construida puede ser la clave para atraer y fidelizar a tus clientes, y estamos aquí para ayudarte en ese proceso.</p>
                            </div>
                            <div className="mostrarMas">
                                <div className="column">
                                    {datosTipo(datos, "branding", selected, toggle)}
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="serviciosContain">
                <div className="serviceServicio">
                    <Slide duration="1800" triggerOnce fraction="1">
                        <div className="serviceServicioimg">
                            <div className=""><img src="/assets/img/fotos/pcmuestra.webp" alt="pc muestra" /></div>
                        </div>
                    </Slide>
                    <Slide duration="1800" triggerOnce direction='right' fraction="1">
                        <div className="containerData">
                            <div className="tituloServicio">
                                <h1 className='spanVerde'>Diseño & Desarrollo web</h1>
                                <p className='descripcionServicio'> Te ofrecemos un servicio completo de diseño y desarrolllo web para ayudarte a crear una presencia online única y efectiva para tu marca o negocio. Trabajamos con vos para crear algo personalizado y profesional que refleje tu identidad y valores de marca.</p>
                                <p className='descripcionServicio'> Además, nos aseguramos que la página web sea fácil de usar, rápida y segura para mejorar la experiencia del usuario y aumentar la conversión de clientes potenciales.</p>
                                <p className='descripcionServicio'>Ya sea que necesites una página web institucional, un portfolio, una tienda online o una landing page, estamos para ayudarte a crear una presencia que destaque en un mercado competitivo.</p>
                            </div>
                            <div className="mostrarMas">
                                <div className="column">
                                    {datosTipo(datos, "desarrollo", selected, toggle)}
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="serviciosContain">
                <div className="serviceServicio">
                    <Slide duration="1800" triggerOnce fraction="1">
                        <div className="serviceServicioimg">
                            <div className=""><img src="/assets/img/fotos/celulares.webp" alt="celulares muestra" /></div>
                        </div>
                    </Slide>
                    <Slide duration="1800" triggerOnce direction='right' fraction="1">
                        <div className="containerData">
                            <div className="tituloServicio">
                                <h1 className='spanVerde'>Social Media</h1>
                                <p className='descripcionServicio'> En el mundo actual, las redes sociales son fundamentales para dar a conocer tu marca. En Bumik entendemos que es importante no sólo tener una presencia online, sino destacarse visualmente, ser coherente y transmitir los valores de la marca. Creando así una comunidad real y fiel. </p>
                                <p className='descripcionServicio'> ¡En Bumik te ayudamos a crear una presencia digital sólida y atractiva que te conecte con tus clientes!</p>
                            </div>
                            <div className="mostrarMas">
                                <div className="column">
                                    <div className="columns">
                                        <h2>Posteos/historias mensuales</h2>
                                        <h2>Diseño de feed</h2>
                                        <h2>Plantillas editables</h2>
                                        <h2>Edición de fotografías</h2>
                                        <h2>Reels/Edición de videos</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="serviciosContain">
                <div className="serviceServicio">
                    <Slide duration="1800" triggerOnce fraction="1">
                        <div className="serviceServicioimg">
                            <div className=""><img src="/assets/img/fotos/mateq.webp" alt="mateq packaging" /></div>
                        </div>
                    </Slide>
                    <Slide duration="1800" triggerOnce direction='right' fraction="1">
                        <div className="containerData">
                            <div className="tituloServicio">
                                <h1 className='spanVerde'>Packaging & Papelería</h1>
                                <p className='descripcionServicio'> Combinamos creatividad y funcionalidad para presentar tu producto de manera atractiva, dejando una impresión duradera en tus consumidores. Te garantizamos que tu producto destaque con una mezcla única de estilo y utilidad.</p>
                            </div>
                            <div className="mostrarMas">
                                <div className="column">
                                    <div className="columns">
                                        <h2>Tarjetas personales</h2>
                                        <h2>Etiquetas de producto</h2>
                                        <h2>Stickers</h2>
                                        <h2>Patterns</h2>
                                        <h2>Cajas</h2>
                                        <h2>Menús</h2>
                                        <h2>Invitaciones</h2>
                                        <h2>Y más</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="botonService">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZL63YOXJUQ2Ee7VYszlfoi8bPjeuZvujjGCmt-j_ewmTi5A/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className='botonServicios'>¡Cotizá tu proyecto!</button></a>
            </div>
        </div >
    )
}

export default Servicios;