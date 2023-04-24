import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menuecommerce.css";
import { FaShoppingCart } from "react-icons/fa";

const MenuEcommerce = () => {

  const [open, setOpen] = useState(false)


  const handleMenuClick = () => {
    setOpen(!open);
  }

  return (
    <div>
      <div className="hamburger-menu">

        <button className="hamburger-menu__button" onClick={handleMenuClick}>
          <span className="hamburger-menu__button-line"></span>
          <span className="hamburger-menu__button-line"></span>
          <span className="hamburger-menu__button-line"></span>
        </button>
      </div>
      <nav className={`hamburger-menu__nav ${open ? 'hamburger-menu__nav--open' : ''} navEcommerce`}>
        <div className="title__header">
          <h1>COMICVERSE</h1>
        </div>
        <div>
          <ul className="hamburger-menu__list">
            <li className="hamburger-menu__item">
              <Link className="hamburger-menu__link" to={"/#home"}>Home</Link>
            </li>
            <li className="hamburger-menu__item">
              <Link className="hamburger-menu__link" href="#">Categorías</Link>
              <ul>
                <li>
                  <Link href="#">Superhéroes</Link>
                </li>
                <li>
                  <Link href="#">Novelas gráficas</Link>
                </li>
                <li>
                  <Link href="#">Cómic Europeo</Link>
                </li>
              </ul>
            </li>
            <li className="hamburger-menu__item">
              <Link className="hamburger-menu__link" href="#">Ofertas</Link>
            </li>
            <li className="hamburger-menu__item">
              <Link className="hamburger-menu__link" href="#">Mi Cuenta</Link>
              <ul>
                <li>
                  <Link href="#">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link href="#">Registrarse</Link>
                </li>
              </ul>
            </li>
            <li className="hamburger-menu__item">
              <Link className="hamburger-menu__link" href="#">Ayuda</Link>
            </li>
            <li className="hamburger-menu__item">

              <Link className="hamburger-menu__link" href="#"><FaShoppingCart></FaShoppingCart></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuEcommerce;
