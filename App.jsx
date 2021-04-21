import  React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import  About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Login from "./Login";
import Navbar from "./Navbar";
import {Switch, Route, Redirect} from "react-router-dom";   
const App = () => {
    return (
     <>
     <Navbar />
      <Switch> 
        <Route exact path="/" component={Home}/>cd
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
        <Redirect to="/" />
      </Switch>
     </>  
   );
};

export default App;