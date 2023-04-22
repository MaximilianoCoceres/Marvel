import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./menuecommerce.css";
import {FaShoppingCart} from "react-icons/fa";
import {FiMenu} from 'react-icons/fi';
import {IoMdCloseCircle} from 'react-icons/io';

const MenuEcommerce = () => {

  const [menuDesplegable, setMenuDesplegable] = useState(false)




  return (
    <div>
      <nav className="navEcommerce">
        <div className="title__header">
          <h1>COMICVERSE</h1>
          <button className="btn btn-light" onClick={()=> setMenuDesplegable(!menuDesplegable)}>{menuDesplegable? <IoMdCloseCircle/> : <FiMenu/>}</button>
        </div>
        <div className={` menu ${menuDesplegable? 'active' : '' } `}>
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
