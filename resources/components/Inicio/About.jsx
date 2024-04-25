import React from 'react'
import Banner from './Banner'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        adaptiveWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='nosotros'>
            <div className="nosotrosContain">
                <div className="about">
                    <h1>¿<span className='spanRosa'>Quienes </span>somos?</h1>
                    <p>Who we are</p>
                </div>
                <div className="perfiles">
                    <Swiper
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 0,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 1000000,
                            disableOnInteraction: false,
                        }}
                        rewind={true}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                        className="mySwiper"
                    >
                        {datos.map((equipo, index) => (
                            <Slider {...settings} className='sliderSettings'>                                <div className="perfil" key={index}>
                                <div className="fondoPerfil">
                                    <div className="imgPerfil"><img src={`assets/img/fotos${equipo.foto}.webp`} alt="Foto de perfil" /></div>
                                    <div className="descripcion">
                                        <h2>{equipo.nombre}</h2>
                                        <p>{equipo.trabajo}</p>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Banner />
        </div >
    )
}

export default About;