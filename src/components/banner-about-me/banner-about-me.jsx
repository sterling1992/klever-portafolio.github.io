import React from "react";
import "./banner-about-me.css";

const BannerAboutMe = () =>{
  return(
    <div className="banner_container">

      <div className="title_container_h1">
        <h1 className="title_h1">Klever Arrechea Castillo</h1>
      </div>

      <div className="subtitle_container_h1">
        <h2 className="subtitle_h2">
          Ing. Industry Automation and Front End Developers
        </h2>
      </div> 

      
      <div className="main_container_find_out_more">
        <span className="text_container">Find out more about Klever Arrechea</span>
        <i className="icon_v"></i>
      </div>
      
    </div>
  );
}


export default BannerAboutMe;