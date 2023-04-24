import React, {useState, useEffect} from "react";
import "../pages/home/home.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Spiderman from "../img/spiderman-menu.jpg";
import Xmen from "../img/wolverine-menu.jpg";
import Fantastic from "../img/4fantastic-menu.jpg";
import Marvel from "../img/marvel-menu.jpg";
import '../pages/home/home.css';
import { useScroll } from "../hooks/useScroll";
import {FaInstagram, FaWhatsapp,FaPhoneAlt} from "react-icons/fa"; 


const Menu = () => {

  const [activeItem, setActiveItem] = useState(null);

  useEffect(()=>{

    const handleScroll = ()=>{
      const scrollPosition = window.scrollY;
      const targets = document.querySelectorAll('[id^="section"]');


      for (let i= targets.length -1; i >= 0; i--){
        const target = targets[i];
        const targetTop = target.getBoundingClientRect().top + scrollPosition;

        if(scrollPosition >= targetTop -50){
          setActiveItem(target.id);
          break;
        }
      }
    }

    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  

    const { scrollY  } = useScroll();

    const menuItems = [

        {
          label: 'ABOUT', path:'/#sectionabout',image: Spiderman , target: 'sectionabout'
        },
        {
          label: 'COMICS', path:'/#sectioncomics',image:Xmen ,target: 'sectioncomics' 
        },
        {
          label: 'CONTACT', path:'/#sectioncontact',image:Marvel ,target: 'sectioncontact' 
        },
    ]
    

  return (
    <div className="menu__container">
    <header className="header">
    <div className="title__header">
    <h1>COMICVERSE</h1> 
    </div>
    <div className="redes__header" >
    <Link to={"https://www.instagram.com/maxcoceres22/"}><FaInstagram/></Link> 
    <Link to={"https://wa.me/+34634624907"}><FaWhatsapp/></Link> 
    <a href="tel:+34634624907"><FaPhoneAlt/></a>
    </div>
    </header>
      <nav className={`${scrollY > 770 ? 'scrolled' : ''} navHome`} >

        {menuItems.map((item, index)=>(
          
          <HashLink key={index} smooth to={item.path} className={activeItem === item.target ? 'active' : ''}>
          {console.log(item)}
            <img src={item.image} alt="" />
            <span>{item.label}</span>
          </HashLink>
        )
            
        )}
        <Link to={"/ecommerce"}>
          {" "}
          <img src={Fantastic} alt="" />
          <span>ECOMMERCE</span>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
