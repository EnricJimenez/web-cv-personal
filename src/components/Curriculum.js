import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";
import "./ThemeSwitcher.css";

export const Curriculum = () => {
  return (
  <div className='page'>
  <ThemeSwitcher />
    <h1 className='heading'><strong>Currículum</strong></h1>

    <h2><strong>Experiencia</strong></h2>
    <ul>
      <li>
        <h4>Costumer & bank branches agent | enero 2015 - sept. 2016</h4>
      </li>
      <li>
      <h4>Website Developer | sept. 2016 - sept. 2018</h4> 
      </li>
      <li>
        <h4>Front End Assistant | jul. 2019 - feb. 2020</h4>
      </li>
      <li>
        <h4>Front End Support Manager | feb. 2020 - dic. 2020</h4>
      </li>
      <li>
        <h4>Lotus Notes consultant | dic. 202 - abr. 2021</h4>
      </li>
      <li>
        <h4>Fraud analyst | jun. 2021 - feb. 2022</h4>
      </li>
      <li>
        <h4>Data Engineer | ago. 2022 - mar. 2023</h4>
      </li>
      <li>
        <h4>QA Tester Analyst | abr. 2023 - oct. 2023</h4>
      </li>
    </ul>

    <h2><strong>Conocimientos</strong></h2>
    <ul>
      <li>
        <h4>Desarrollo Web (HTML,CSS,JavaScript)</h4>
      </li>
      <li>
      <h4>Edición(Photoshop,Mediator-Pro)</h4>
      </li>
      <li>
        <h4>C,C#,Java,Kotlin</h4>
      </li>
      <li>
        <h4>Cyber Threat Hunting (Kali Linux)</h4>
      </li>
    </ul>

    <h2><strong>Educación</strong></h2>
    <ul>
      <li><h4>Grado superior en administración de sistemas informáticos</h4></li>
      <li><h4>Técnico en microinformática, redes y comunicaciones</h4></li>
      <li><h4>Informática de sistemas (Universidad Politécnica de Cataluña)</h4></li>
      <li><h4>Programación de páginas web con HTML, CSS y JavaScript</h4></li>
      <li><h4>JavaScript Web Development</h4></li>      
      <li><h4>C# Microsoft developer certification</h4></li>
      <li><h4>Microsoft AZ-900 certification</h4></li>
      <li><h4>Java Front-end & Back-end developer</h4></li>
      <li><h4>Oracle Certified Associate Java SE 8 Programmer</h4></li>
      <li><h4>Google Cybersecurity professional</h4></li>
      <li><h4>Cyber Threat Hunting with Python</h4></li>
      <li><h4>ISO 27001 Auditor</h4></li>
      <li><h4>React JS MERN Stack</h4></li>  
    </ul>            

    <h2><strong>Reconocimientos y premios</strong></h2>
    <ul>
      <li><h4>Carta de recomendación de superior en RACC</h4></li>
      <li><h4>Carta de recomendación de superior en Caixabank</h4></li>
    </ul>     
  </div>
  )
}

export default Curriculum
