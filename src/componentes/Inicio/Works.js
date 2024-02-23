import React from 'react';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { getImages } from '../../services/getServices';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../All/Footer';


const Works = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = getImages();
            setDatos(data);
        };

        fetchData();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        adaptiveWidth: true,
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
        <div>
            <div className='sliderContainer'>
                <div className="carousel">
                    <div className="tituloCarousel">
                        <h1>Nuestros <span>trabajos</span></h1>
                        <p>¡Conocé algunos de los proyectos de los que fuimos parte!</p>
                    </div>
                    <div className="slider">
                        <Slider {...settings} className='sliderSettings'>
                            {datos.map((image, index) => (
                                <div key={index} className='imagenSliderItem'>
                                    <div className="imgItem"><img src={require(`../../assets/img/sliders/sliderInicio/${image.imagen}`)} alt={image.marca} /></div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Works;