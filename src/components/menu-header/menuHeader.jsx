import React from "react";
import '../menu-header/menu_header.css';

const MenuHeaderNabvar = () => {
  return(
   
    <aside className="menu_container">
      
      <ul className="menu_lista">
        <li>
          <a className="menu_items" href="#about-me">
            <i className="icon_about_me"></i>
            <span  className="container_span">About me</span>
          </a>
        </li>

        <li>
          <a className="menu_items" href="some-works">
            <i className="icon_some_works"></i>
            <span  className="container_span" >Some works</span>
          </a>
        </li>


        <li>
          <a className="menu_items" href="#skills">
            <i className="icon_skills"></i>
            <span className="container_span">Skills</span>
          </a>
        </li>


        <li>
          <a className="menu_items" href="#hobbies">
            <i className="icon_hobbies"></i>
            <span  className="container_span" >Hobbies</span>
          </a>
        </li>


        <li>
          <a className="menu_items" href="#contacts">
            <i className="icon_contacts"></i>
            <span  className="container_span" >contacts</span>
          </a>
        </li>



      </ul>
    </aside>
  );
}


export default MenuHeaderNabvar;