import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="footer">
                <div className="footerText">
                    <h1>FROM</h1>
                    <h1>ARGENTINA</h1>
                    <h1 className='spanColor'>WORLDWIDE</h1>
                </div>
                <div className="footerLinks">
                    <Link to="/">INICIO</Link>
                    <Link to="/servicios">SERVICIOS</Link>
                    <Link to="/portfolio">PROYECTOS</Link>
                    <Link to="/contacto">CONTACTO</Link>
                </div>
                <div className="contacts">
                    <p>New Business/Contrataciones:</p>
                    <span>estudiobumik@gmail.com</span>
                    <p>Whatsapp:</p>
                    <span>+54 9 1121878975</span>
                    <p>Instagram:</p>
                    <span>@estudiobumik</span>
                </div>
            </div>
        </div>
    )
}

export default Footer