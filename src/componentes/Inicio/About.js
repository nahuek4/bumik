import React from 'react'
import Nahue from '../../assets/img/fotos/popOutNahue.png'
import Mili from '../../assets/img/fotos/popOutMili.png'
import Banner from './Banner'

const About = () => {
    return (
        <div className='nosotros'>
            <div className="nosotrosContain">
                <div className="about">
                    <h1>¿<span>Quienes </span>somos?</h1>
                    <p>Who we are</p>
                    <div className="imgs">
                        <div className="imgnahue"><img src={Nahue} alt="" width="500px" /></div>
                        <div className="imgmili"><img src={Mili} alt="" width="500px" /></div>
                    </div>
                </div>
                <div className="perfiles">
                    <div className="perfilNahue">
                        <h2>Nahuel Cañete</h2>
                        <p>Front End Developer</p>
                    </div>
                    <div className="perfilMili">
                        <h2>Milagros Abreo</h2>
                        <p>Graphic Designer</p>
                    </div>

                </div>
                <div className="borderboxText">
                    <div className="text">
                        <p> Somos Nahuel y Milagros, y Juntos formamos nuestro estudio de diseño con base en Buenos Aires <br />especializado en
                            diseño gráfico, branding, redes sociales y desarrollo web.</p>
                        <br />
                        <p className='pI'> Hi! We are Nahuel and Milagros, and together we found our creative studio in Buenos Aires <br /> specializing in
                            graphic design branding, social media and web development.</p>
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    )
}

export default About;