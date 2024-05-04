import React from "react";
import AboutMeComponent from "../../components/about-me/AboutMe";
import BannerAboutMe from "../../components/banner-about-me/banner-about-me";
import Experience from "../../components/experience/Experience";


// IMPORT LOGO ENTERPRISE FOR SEND WHIT PARAMETER OR PROPS

import logoInndico from "../../assets/logos_enterprise/logo_inndico.png";
import logoCCTET  from  "../../assets/logos_enterprise/logo_cctet.png";
import logoManosVisibles from "../../assets/logos_enterprise/logo_manos_visibles.png";
import logoAluraLatam  from "../../assets/logos_enterprise/LogoAluraLatam.jpeg";
import logoUniversidadDelCauca from "../../assets/logos_enterprise/Universidad_del_cauca.jpg";



const AboutMeView = () => {
  return (
    <div>
      <BannerAboutMe />
      <AboutMeComponent />
      
     
      <Experience 
        title= "Experience"
        enterprise= "Innovación Digital Corporativa S.A.S"
        role= "CEO and Founder"
        date= "Agust 2020 - Present"
        description= "CEO y Fundador de la Startup Inndico, empresa del sector tecnológico que ofrece soluciones a micros y pequeñas empresas con tecnologías propias como MOPI, sistema de Planificación de Recursos Empresariales (ERP) para la gestión de Ventas, Compras, Inventarios, Clientes, Proveedores, POS.  Vox Line, sistema integral de gestión de recursos humanos y proyectos. "
        logo = {logoInndico}
      />


      <Experience 
        enterprise= "Innovación Digital Corporativa S.A.S"
        role= "Product Owner and front end developer"
        date= "Junio 2022 - Julio 2023"
        description= "Front end Developers proyecto NNumeria, solución para la gestión documental de soportes contables y financieros "
        logo = {logoInndico}
      />
      
      <Experience 
        enterprise= "Corporación CCTET"
        role= "Director de Tecnología"
        date= "October 2018 - Present"
        description= "Coordinar proyectos de apoyo y acompañamiento educativo en formación STEM, acceso y permanencia en la educación superior para beneficiar a niños, niñas, adoelscentes y jóvenes del Pacífico Caucano y otras zonas desfavorecidad de Colombia "
        logo = {logoCCTET}
       />

      <Experience 
        enterprise= "Corporación Manos Visibles"
        role= "Docente tutor y enlace territorial STEM"
        date= "October 2021 - Abril 2022"
        description= "Realizar procesos de acompañamiento, diseño y estructuración de curos de formación STEM para niños, niñas, adolescentes y jóvenes del PAcífico Caucano en los Municipios de Timbiquí y Guapi"
        logo = {logoManosVisibles}
       />

      <Experience 
        title= "Educations"
        enterprise= "Alura Latam"
        role= "Student Specializing Front End Development "
        date= "Febrero 2024 - Present"
        description= "Estudiante perteneciente al grupo G6 de Alura Latam en conjunto con Oracle, de la formación de la especialización en desarrollo Front End."
        logo = {logoAluraLatam}
      />

      <Experience 
        enterprise= "Universidad del Cauca"
        role= "Automation engineering student"
        date= "Febrero 2012 - Julio 2017"
        description= "Formación profesional en Ingeniería en Automatización Industrial, perteneciente a la facultad de Ingeniería Electrónica y Telecomunicaciones, durante la formación profesional abarqué temas y áreas de estudios relacionadas con la automatización, instrumentación y control de procesos, átreas relacioandas con los sistemas dinámicos, máquinas electricas, programación, y páreas de la física, como mecánica, física de fluidos, electromagnetismo, entre otras. "
        logo = {logoUniversidadDelCauca}
      />


       


       
    </div>   
  );
}

export default AboutMeView;