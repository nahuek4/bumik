import React from 'react'
import Nahue from '../../assets/img/fotos/popOutNahue.webp'
import Mili from '../../assets/img/fotos/popOutMili.webp'
import Banner from './Banner'

const About = () => {
    return (
        <div className='nosotros'>
            <div className="nosotrosContain">
                <div className="about">
                    <h1>¿<span className='spanRosa'>Quienes </span>somos?</h1>
                    <p>Who we are</p>
                </div>
                <div className="perfiles">
                    <div className="perfilNahue">
                        <div className="imgnahue"><img src={Nahue} alt="" /></div>
                        <h2>Nahuel Cañete</h2>
                        <p>Front End Developer</p>
                    </div>
                    <div className="perfilMili">
                        <div className="imgmili"><img src={Mili} alt="" /></div>
                        <h2>Milagros Abreo</h2>
                        <p>Graphic Designer</p>
                    </div>

                </div>
                <div className="borderboxText">
                    <div className="text">
                        <p> Somos Nahuel y Milagros, y Juntos formamos nuestro estudio de diseño con base en Buenos Aires <br />especializado en
                            diseño gráfico, branding, redes sociales y desarrollo web.</p>
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    )
}

export default About;