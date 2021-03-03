import React from "react";
import { NavLink } from 'react-router-dom';
import s from './HeaderAboutButton.module.css'
const HeaderAboutButton = () => {
return(
    <NavLink to='/coverLetter'>
    <div type='button'  className={s.button}>
       Work Enquiry
    </div>
    </NavLink>
)
}

export default HeaderAboutButton;