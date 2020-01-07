import React from "react";
import Layout from "./../components/layout/Layout";
import SkillsSlider from './../components/skills-slider/SkillsSlider';

import './about.css';

function About(){
    return(
        <Layout title="Conóceme | Carlos Hernández">
          <h1 className="text-center mt-3"><b>Acerca de mí</b></h1>
          <div className="row">
            <img src="../static/myself.jpg" alt="Carlos" className="d-block mx-auto my-4 personal-image"/>
         </div>
          <div className="row">
            <p className="px-5 text-center">
                  ¡Un saludo! Mi nombre es Carlos, tengo 22 años y vivo en Venezuela. Actualmente estudio 
                  Ingeniería de Telecomunicaciones y me dedico al Desarrollo Web, principalmente con React.
                  En mi Github podrás visualizar mis proyectos principales y si deseas ponerte en contacto 
                  conmigo, abajo te dejo mis redes sociales principales.
            </p>
          </div>
          <h3 className="text-center"><b>Principales habilidades</b></h3>
          <SkillsSlider/>
    </Layout>
    );
}

export default About;


