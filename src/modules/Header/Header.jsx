import React from "react";
import logo from './Headernavbar/Logo.png'
import Headernavbar from './Headernavbar/Headernavbar';
import HeaderAbout from './HeaderAbout/HeaderAbout';
import s from './Header.module.css'
import HeaderSocialMedia from './HeaderSocialMedia/HeaderSocialMedia';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
import CoverLetter from './CoverLetter/CoverLetter';
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
    return(
        <Router>
 
        <header id='header'>
            <div className={s.HeaderTop}>
            <img src={logo} alt="logo" className={s.logo}/>
            {/* <Headernavbar /> */}
            <Navbar />
            {/* <HeaderAbout /> */}
            <HeaderSocialMedia />
            <Switch>
            <Route path='/coverLetter'>
                <CoverLetter />
            </Route>

            <Route  path='/' component={HeaderAbout}/>
           
            </Switch>
            </div>
          
        </header>
 
        </Router>
    )
}

export default Header;