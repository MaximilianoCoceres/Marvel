import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './footer.css';
import {FaInstagram, FaWhatsapp,FaFacebook,FaTwitter} from "react-icons/fa"; 

const Footer = () => {
    return (
        <footer>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
        <h3>Contacto</h3>
        <ul>
          <li><a href="mailto:help@comicverse.com">help@comicverse.com</a></li>
          <li><Link to={"https://wa.me/+34634624907"}> <FaWhatsapp/>  901-890-999</Link></li>
          <div className='map-container'>
          <iframe
              title="ubicacion"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11925.483260527453!2d-0.8770484!3d41.647729549999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2ses!4v1681482436323!5m2!1ses-419!2ses"
              width="100%"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </ul>
      </div>
      <div class="col-12 col-md-4">
        <h3>Navegación</h3>
        <ul>
          <li><HashLink smooth to={"/#home"}>Inicio</HashLink></li>
          <li><Link to={"/ecommerce"}>Catálogo</Link></li>
          <li><a href="#">Mi cuenta</a></li>
        </ul>
      </div>
      <div class="col-12 col-md-4">
        <h3>Redes sociales</h3>
        <ul>
          <li><Link to={"https://www.instagram.com/maxcoceres22/"}><FaFacebook/></Link></li>
          <li><Link to={"https://www.instagram.com/maxcoceres22/"}><FaTwitter/></Link></li>
          <li><Link to={"https://www.instagram.com/maxcoceres22/"}><FaInstagram/></Link></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    );
}

export default Footer;
