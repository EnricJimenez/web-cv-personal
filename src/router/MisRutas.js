import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Certificaciones } from '../components/Certificaciones';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import Footer from '../components/layout/Footer';
import HeaderNav from '../components/layout/HeaderNav';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}
        <HeaderNav />
        {/* CONTENIDO CENTRAL */}
        <section className="content">
            <Routes>
              <Route exact path="/" element={<Navigate to="/Inicio" />}/>
              <Route path="/inicio" element={<Inicio/>}/>
              <Route path="/certificaciones" element={<Certificaciones/>}/>
              <Route path="/servicios" element={<Servicios/>} />
              <Route path="/curriculum" element={<Curriculum/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              }/>
            </Routes>
         </section>
        
        {/* FOOTER */} 
        <Footer />
    </BrowserRouter>

  )
}
export default MisRutas
