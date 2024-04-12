import React from 'react'
import Banner from './Banner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
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
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            type: 'fraction',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        rewind={true}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {datos.map((equipo, index) => (
                            <SwiperSlide>
                                <div className="perfil" key={index}>
                                    <div className="fondoPerfil">
                                        <div className="imgPerfil"><img src={`assets/img/fotos${equipo.foto}.webp`} alt="Foto de perfil" /></div>
                                        <div className="descripcion">
                                            <h2>{equipo.nombre}</h2>
                                            <p>{equipo.trabajo}</p>
                                        </div>
                                    </div>
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