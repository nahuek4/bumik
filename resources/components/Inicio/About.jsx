import React from 'react'
import Nahue from '../../assets/img/fotos/popOutNahue.webp'
import Mili from '../../assets/img/fotos/popOutMili.webp'
import Banner from './Banner'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getEquipo } from '../../services/getServices';
import { useState, useEffect } from 'react';

const About = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = getEquipo();
            setDatos(data);
        };

        fetchData();
    }, []);
    return (
        <div className='nosotros'>
            <div className="nosotrosContain">
                <div className="about">
                    <h1>¿<span className='spanRosa'>Quienes </span>somos?</h1>
                    <p>Who we are</p>
                </div>
                <div className="perfiles">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {datos.map((equipo, index) => (
                            <SwiperSlide>
                                <div className="perfil">
                                    <div className="imgPerfil"><img src={`assets/img/fotos/${image.imagen}`} alt="Foto de perfil" /></div>
                                    <h2>{equipo.nombre}</h2>
                                    <p>{equipo.trabajo}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
                <div className="borderboxText">
                    <div className="text">
                        <p> Somos Nahuel y Milagros, y Juntos formamos nuestro estudio de diseño con base en Buenos Aires <br />especializado en
                            diseño gráfico, branding, redes sociales y desarrollo web.</p>
                    </div>
                </div>
            </div>
            <Banner />
        </div >
    )
}

export default About;