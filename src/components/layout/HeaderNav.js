import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>E</span>
          <h3> Enric Jiménez Vélez</h3>
        </div>
        <nav>
            <ul>
                <li>
                  <NavLink to="/Inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/Certificaciones" className={({isActive}) => isActive ? "active" : ""}>Certificaciones</NavLink>
                </li>
                <li>
                  <NavLink to="/Curriculum" className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                  <NavLink to="/Contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
