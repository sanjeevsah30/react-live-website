
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Service from './Services';
import About from './About';
import Navbar from "./Navbar.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 


import { BrowserRouter, Route, Link,Switch, Redirect } from "react-router-dom";


const App = ()=> {
  return(
    <>
     <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to="/"  />
   <Home />
   
    </Switch>
    <footer className="w-100 bg-light text-center">
               <p>© 2020 Sanjeevtechnical . All right reserved |Term and Condition</p> 
                </footer>
    

    </>
  );
}
export default App;
