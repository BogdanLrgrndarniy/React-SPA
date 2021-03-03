import React from "react";
import Title from '../../Title/Title';
import s from './HeaderAbout.module.css';
import HeaderAboutButton from './HeaderAboutButton/HeaderAboutButton';
const HeaderAbout = () => {
   return (
      <div className={s.text_Header}>
         <Title textTitle='About' />
         <div className={s.title}>Bogdan Yanovskiy</div>
         <p>Beetroot academy student
I have experience in the development of web projects. I like to create websites, layout and revitalize them</p>
      <HeaderAboutButton />
      {/* <div className={s.img}></div> */}
      </div>
   )
}

export default HeaderAbout;
