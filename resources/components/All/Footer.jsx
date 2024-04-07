import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footerContainer'>
            <div className="footer">
                <div className="footerText">
                    <h1>FROM</h1>
                    <h1>ARGENTINA</h1>
                    <h1 className='spanRosa'>WORLDWIDE</h1>
                </div>
                <div className="footerLinks">
                    <Link to="/">INICIO</Link>
                    <Link to="/servicios">SERVICIOS</Link>
                    <Link to="/portfolio">PROYECTOS</Link>
                    <Link to="/contacto">CONTACTO</Link>
                </div>
            </div>
            <div className="contacts">
                <div className="business">
                    <a href="mailto:estudiobumik@gmail.com" target='_blank' rel="noreferrer"><img src="/public/assets/icons/email.webp" alt="email" /></a>
                </div>
                <div className="whatsapp">
                    <a href="https://wa.me/+5491121878975" target="_blank" rel="noreferrer"><img src="/public/assets/icons/whatsapp.webp" alt="whatsapp" /></a>
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/estudiobumik/" target='_blank' rel="noreferrer"><img src="/public/assets/icons/instagram.webp" alt="instagram" /></a>
                </div>
            </div>
            <div className="derechosbumik">
                <p>&copy; {currentYear} Estudio Bumik</p>
            </div>
        </footer >
    )
}

export default Footer