import React from "react";
import { NavLink } from "react-router-dom";
 //import web from "../src/images/main2.jpg"

const About=()=>{
    return(
        <>
          <section id="header" className="d-flex align-items-center">
             <div className="container-fluid nav">
               <div className="row">
                 <div className="col-10 mx-auto"> 
                     <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1> <strong className="brand-name">  Who we are</strong>
                        </h1>
                        <h2 className="my-1">
                        We are the one who provide platform for the people who need wwork and who want their work to be done
                        </h2>
                        <h3> <strong className="brand-name">  How we do</strong>
                        </h3>
                        <h4 className="my-1">
                        We are the one who provide platform for the people who need wwork and who want their work to be done
                        </h4>
                        <div className="mt-3">
                          <NavLink to= "/contact" className= "btn-get-started">
                            Contact Us
                          </NavLink>
                        </div>
                    </div>

                 
                     </div>
                     
                 </div>
                </div>
               </div> 
          </section>
        </>   
    );
};

export default About;