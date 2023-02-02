import React from "react";
import './about.css';
import Shield from '../../components/Shield'
import Escudo from "../../img/escudo-about.png";


const About = () => {
  return (
    <div className="row about gx-0 overflow-hidden">
      
   
        <div className="  col-md-6">left</div>
        <div className=" col-md-6 aboutRight"> 
       <div className="text p-4">
       <h1>Lorem ipsum</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur impedit fugit doloremque et? Quia iure ipsam porro voluptatem quidem.</h4>
       </div> 
               <div className="escudo"><Shield/> </div>
        </div>
      
    </div>
  );
};

export default About;
