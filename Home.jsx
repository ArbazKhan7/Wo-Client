import React from "react";
import { NavLink } from "react-router-dom";
//import web from "../src/images/main3.jpg";
import web from "../src/images/main2.jpg"

const Home=()=>{
    return(
        <>
          <section id="header" className="d-flex align-items-center">
             <div className="container-fluid">
               <div className="row">
                 <div className="col-10 mx-auto"> 
                     <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Connect to people with <strong className="brand-name">  WoClient</strong>
                        </h1>
                        
                        <div className="mt-3">
                          <NavLink to= "/service" className= "btn-get-started">
                            Lets Start
                          </NavLink>
                        </div>
                    </div>

                 <div className="container">

                 </div>
                 </div>
                </div>
               </div> 
               </div>
          </section>
        </>   
    );
};

export default Home;