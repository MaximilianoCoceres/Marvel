import React from 'react';
import './home.css'
import Spiderman from "../../img/spiderman-menu.jpg";
import Xmen from "../../img/wolverine-menu.jpg";
import Fantastic from "../../img/4fantastic-menu.jpg";
import Marvel from "../../img/marvel-menu.jpg";

const Home = () => {
    return (
        <section>
            
               <a href="/"><img src={Spiderman} alt="" /><span>ABOUT</span> </a> 
                <a href=""> <img src={Xmen} alt="" /><span>COMICS</span> </a>
                <a href=""> <img src={Fantastic} alt="" /><span>ECOMMERCE</span></a>
                <a href=""> <img src={Marvel} alt="" /><span>CONTACT</span></a>
            
        </section>
    );

    }
export default Home;
