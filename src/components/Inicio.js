import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";
import "./ThemeSwitcher.css";

export const Inicio = () => {
  return (
    <div className='home'>
        <ThemeSwitcher />
      <h1>
        ¡Hola! Soy Enric Jiménez, un apasionado de la <strong>programación</strong> y la <strong>ciberseguridad</strong>.
        Mi recorrido en el mundo de la tecnología comenzó con el desarrollo web, y desde entonces, 
        he adquirido habilidades en una variedad de lenguajes y tecnologías como <strong>HTML, CSS , JavaScript, Java y C#</strong>.
      </h1>
      <h2>
      Tengo diversos cursos y certificaciones de <strong>Google</strong>,<strong>Microsoft</strong> y <strong>Udemy</strong>.
      </h2>
    </div>
  )
}

export default Inicio
