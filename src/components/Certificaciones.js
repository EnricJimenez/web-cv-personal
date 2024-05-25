import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";
import "./ThemeSwitcher.css";

export const Certificaciones = () => {
  return (
    <div className='page'>
     <ThemeSwitcher />
      <h1 className='heading'><strong>Cursos y certificaciones realizadas</strong></h1>
        <h5> Pasa el cursor sobre las imágenes para hacer zoom sobre ellas</h5>
         <div className='gallery'>
             <img src="images/11.jpg" alt=""width="900" height="700"/>
             <img src="images/1.jpg"alt=""width="300" height="250"/>
             <img src="images/2.jpg" alt=""width="900" height="700"/>
             <img src="images/4.jpg"alt=""width="900" height="700"/>
             <img src="images/6.png"alt=""width="900" height="700"/>
             <img src="images/10.jpg"alt=""width="900" height="700"/>
             <img src="images/3.jpg"alt=""width="900" height="700"/>
             <img src="images/7.jpg"alt=""width="900" height="700"/>
             <img src="images/8.jpg"alt=""width="900" height="700"/>
             <img src="images/9.png"alt=""width="900" height="700"/>
             </div>
      </div>
  );
}
export default Certificaciones;