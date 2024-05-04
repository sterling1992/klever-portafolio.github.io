import React from "react";
import "./Experience.css";


const Experience = ({title, enterprise,role,date,description,logo}) => {
  return(
    <section className="main_container_experience">

      <div className="title_experience">
        <h2>{title}</h2>
        <hr />
      </div>
    
      <div className="container_info_card">
        <div className="container_logo">
          <img src= {logo} alt="logo empresa inndico" />

        </div>

        <div className="container_name_enterprise" >
          <h3> {enterprise} </h3>
          <h4> {role} </h4>
          <h5> { date} </h5>
          <p> { description} </p>
          <hr />
        </div>
      </div>

    </section>
  );
};

export default Experience;