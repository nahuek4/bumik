import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className="navMenu">
                <ul className={click ? 'navLinks active' : 'navLinks'}>
                    <li className='navItem'><NavLink className="navLink" exact to="/" onClick={handleClick} activeClassName="activeLink">Inicio</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/servicios" onClick={handleClick} activeClassName="activeLink">Servicios</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/portfolio" onClick={handleClick} activeClassName="activeLink">Proyectos</NavLink></li>
                    <li className='navItem'><NavLink className="navLink" to="/contacto" onClick={handleClick} activeClassName="activeLink">Contacto</NavLink></li>
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
