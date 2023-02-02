import React from "react";
import './about.css';
import Shield from '../../components/Shield'
import Capi from "../../img/CAPITAN AMERICA.png";


const About = () => {
  return (
    <div className="row about gx-0 overflow-hidden">
      
   
        <div className="col-md-6 aboutLeft d-flex align-items-center justify-content-center">
          <figure className="">
            <img src={Capi} alt="" />
          </figure>
        </div>
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
