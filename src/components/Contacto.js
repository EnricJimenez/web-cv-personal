import React from 'react';
import "./Contacto.css";
import ThemeSwitcher from "./ThemeSwitcher";
import "./ThemeSwitcher.css";

export const Contacto = () => {
  return (
    <div className='page'>
    <ThemeSwitcher />
    <h1 className='heading'><strong>Contacto</strong></h1>

    <form className='contact' action="mailto:monready81@gmail.com">
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellidos'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Motivo de contacto'/>
          <input type='submit' value="Enviar"/>

    </form>
      
    </div>
  )
}

export default Contacto