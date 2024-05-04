import React from "react";
import "./AboutMe.css";
import phto_about_klever from "../../assets/images/photo_about_klever.jpg";

const AboutMeComponent = () => {
  return(
    <section className="main_container_abut_me">
      
      <div className="container_title">
        <h2>About Klever </h2>
        <hr />        
      </div>

      <div className="container_photo">
        <img src= {phto_about_klever} className="container_photo_about_klever" alt="" />
      </div>

      <div className="container_description">
        <p>
          Hola! Mi nombre es Klever Arrechea Castillo
        </p><br />
        <p>Innovador tecnológico y social en busca de cambiar el juego.
          Soy Klever Arrechea Castillo, un apasionado emprendedor que trabaja 
          en la construcción de tecnológicas accesibles para micro y pequeñas
          empresas en Colombia. Amante de los sistemas ERP, creo en soluciones 
          empresariales que simplifican y potencian 
        </p> <br />
        <p>
          Mi corazón late fuerte por lo social. Trabajo incansablemente 
          para cerrar la brecha educativa y tecnológica en las zonas más 
          desfavorecidas de Colombia a través de la orientación a niños, niñas adolescentes y jóvenes 
          en temas de acceso y permanencia en la educación superior y en la orientación 
          de cursos gratuitos presenciales en temas de Ciencia, Tecnología, Ingeniería y Matemáticas 
          (STEM) por su sigla en inglés.
        </p>
      </div>

    </section>
  );
}

export default AboutMeComponent;