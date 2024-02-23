import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/css/css.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const bars = <FontAwesomeIcon icon={faBars} />
    const xmark = <FontAwesomeIcon icon={faXmark} />
    return (
        <div className='navbar'>
            <div className="navMenu">
                <ul className={click ? 'navLinks active' : 'navLinks'}>
                    <li className='navItem'><NavLink className="navLink" to="/" onClick={handleClick}>Inicio</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/portfolio" onClick={handleClick}>Portfolio</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/servicios" onClick={handleClick}>Servicios</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/contacto" onClick={handleClick}>Contacto</NavLink></li>
                </ul>
            </div>
            <div className="navToggle" onClick={handleClick}>
                <i className={click ? xmark : bars}></i>
            </div>
        </div>
    )
}

export default Navbar;