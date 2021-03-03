import React from "react";
import s from './Title.module.css';
const Title = (props) => {
    return(
        <h2>{props.textTitle}<div className={s.line}></div></h2>
    )
}

export default Title;