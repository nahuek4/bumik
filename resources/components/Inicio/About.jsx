import React from 'react'
import Banner from './Banner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
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
                        effect={coverflow}
                        coverflowEffect={{
                            rotate: 0, // Slide rotate in degrees
                            stretch: 0, // Stretch space between slides (in px)
                            depth: 585, // Depth offset in px (slides translate in Z axis)
                            modifier: 1, // Effect multipler
                            slideShadows: true, // Enables slides shadows
                        }}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        rewind={true}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay, EffectFade]}
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
            </div>
            <Banner />
        </div >
    )
}

export default About;