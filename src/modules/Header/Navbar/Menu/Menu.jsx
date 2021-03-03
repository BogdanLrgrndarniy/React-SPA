import React from "react";
import './Menu.css';
import { NavLink } from 'react-router-dom';

const Menu = ({header, items, active, setActive}) => {
    return(

        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur'></div>
            <div className='menu_content'>
                <div className='menu__header'>{header}</div>
                <ul>
                    {items.map(item =>
                    <li><NavLink to={item.href}>{item.value}</NavLink></li>
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;
