import React from "react";
import Menu from "./Menu/Menu";
import s from './Navbar.module.css'
import { useEffect, useState } from "react";
const Navbar = () => {
    const items = [{value:'About', href:'/about'},{value:'Portfolio', href:'/portfolio'},{value:'Contact', href:'/contact'}];
    const [menuActive, setMenuActive] = useState(false);
    return(
        <div>
            <nav className={s.navBar}>
                <div className={s.btn} onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                </div>
                <Menu active={menuActive} setActive={setMenuActive} items={items}/>
            </nav>
     
        </div>
    )
}

export default Navbar;
