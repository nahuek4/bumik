import React, { Fragment, useState } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import "../../css/app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const isActive = useMatch({
        path: '/',
        exact: true
    });

    return (
        <div className='navbar'>
            <div className="navMenu">
                <ul className={click ? 'navLinks active' : 'navLinks'}>
                    <li className='navItem'><NavLink className={`navLink ${isActive ? 'activeLink' : ''}`} to="/" onClick={handleClick}>Inicio</NavLink></li>
                    <li className='navItem'><NavLink className={`navLink ${isActive ? 'activeLink' : ''}`} to="/servicios" onClick={handleClick}>Servicios</NavLink></li>
                    <li className='navItem'><NavLink className={`navLink ${isActive ? 'activeLink' : ''}`} to="/portfolio" onClick={handleClick}>Proyectos</NavLink></li>
                    <li className='navItem'><NavLink className={`navLink ${isActive ? 'activeLink' : ''}`} to="/contacto" onClick={handleClick}>Contacto</NavLink></li>
                </ul>
            </div>
            <div className="navToggle" onClick={handleClick}>
                <Fragment>
                {click ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />} 
                </Fragment>
            </div>
        </div>
    )
}

export default Navbar;
