import React from "react";
import "../pages/home/home.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Spiderman from "../img/spiderman-menu.jpg";
import Xmen from "../img/wolverine-menu.jpg";
import Fantastic from "../img/4fantastic-menu.jpg";
import Marvel from "../img/marvel-menu.jpg";
import '../pages/home/home.css';

const Menu = () => {
  return (
    <div className="menu__container">
    <header className="header"><h1>COMICVERSE</h1></header>
      <nav>
        <HashLink smooth to="/#about">
          <img src={Spiderman} alt="" />
          <span>ABOUT</span>{" "}
        </HashLink>
        <HashLink smooth to="/#comics">
          {" "}
          <img src={Xmen} alt="" />
          <span>COMICS</span>{" "}
        </HashLink>
        <Link to={"/ecommerce"}>
          {" "}
          <img src={Fantastic} alt="" />
          <span>ECOMMERCE</span>
        </Link>
        <HashLink smooth to="/#contact">
          {" "}
          <img src={Marvel} alt="" />
          <span>CONTACT</span>
        </HashLink>
      </nav>
    </div>
  );
};

export default Menu;
