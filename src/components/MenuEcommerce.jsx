import React from "react";
import { Link } from "react-router-dom";
import "./menuecommerce.css";
import {FaShoppingCart} from "react-icons/fa";

const MenuEcommerce = () => {
  return (
    <div>
      <nav className="navEcommerce">
        <div className="title__header">
          <h1>COMICVERSE</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to={"/#home"}>Home</Link>
            </li>
            <li>
              <Link href="#">Categorías</Link>
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
            <li>
              <Link href="#">Ofertas</Link>
            </li>
            <li>
              <Link href="#">Mi Cuenta</Link>
              <ul>
                <li>
                  <Link href="#">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link href="#">Registrarse</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">Ayuda</Link>
            </li>
            <li>

            <Link href="#"><FaShoppingCart></FaShoppingCart></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuEcommerce;
