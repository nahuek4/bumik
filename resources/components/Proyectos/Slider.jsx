import React from 'react'
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { getMarcas } from '../../services/getServices';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMarcas();
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
            <Slider {...settings} className='sliderSettings'>
                {datos.map((image, index) => (
                    <div key={index} className='imagenSliderItem'>
                        <div className="imgItem"><img src={`assets/img/sliders/sliderInicio/${image.imagen}`} alt={image.marca} /></div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Slider;