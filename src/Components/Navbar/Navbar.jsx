import React from "react";
import NavbarImage from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import './Styles.css'


function Navbar() {
  return (
    <div className="navbar">
     <div className="logo">
     <Link to="/">
        <img src={NavbarImage} alt="Logo" />
      </Link>
      <h2 className="nav-title">Jakhongir</h2>
      <p className="nav-subtitle">Web developer</p>
     </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/work">Works</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ul className="nav-socials">
        <li className="nav-social-item">
          <a href="https://t.me+998906301169">
          <span style={{color:"#3d5a65"}}>
          <i className="fa-brands fa-telegram fa-xl" ></i>
          </span>
          </a>
        </li>
        <li className="nav-social-item">
          <a href="https://linkedin.com">
         <span style={{color:"#3d5a65"}}>
         <i className="fa-brands fa-linkedin-in fa-xl"></i>
         </span>
          </a>
        </li>
        <li className="nav-social-item">
          <a href="#">
          <span style={{color:"#3d5a65"}}>
          <i className="fa-brands fa-github fa-xl"></i>
          </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
