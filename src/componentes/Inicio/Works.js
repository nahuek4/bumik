import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import popOutMili from "../../assets/img/fotos/popOutMili.png";
import popOutNahue from "../../assets/img/fotos/popOutNahue.png";
import icon from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png"

const Works = () => {
    const imagenes = [
        popOutMili,
        popOutNahue,
        icon,
        icon2
    ];

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
                    initialSlide: 1 // Añade esto para mejorar la experiencia inicial en dispositivos pequeños
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
        <div className='sliderContainer'>
            <div className="carousel">
                <div className="tituloCarousel">
                    <h2>Nuestros trabajos</h2>
                </div>
                <div className="slider">
                    <Slider {...settings} className='sliderSettings'>
                        {imagenes.map((image, index) => (
                            <div key={index} className='imagenSliderItem'>
                                <div className="imgItem"><img src={image} alt="" /></div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Works;