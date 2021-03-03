import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Headernavbar.module.css';
const Headernavbar = () => {
    return(
        <div>
            <nav className={s.navMenu}>
            <div><NavLink to='/' >About</NavLink></div>
            <div><NavLink to='/portfolio'>Portfolio</NavLink></div>
            <div>Blog</div>
            <div>Contact</div>
            </nav>
        </div>
    )
}

export default Headernavbar;
