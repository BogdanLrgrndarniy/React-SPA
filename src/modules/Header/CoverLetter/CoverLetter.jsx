import React from "react";
import s from './CoverLetter.module.css';
import coverLetter from './coverLetter.pdf';

const CoverLetter = () => {
    return (
        <div className={s.headerAbout}>
            <h1>Front-end developer Bogdan Yanovsky</h1>
            <a href={coverLetter} download="CoverLetter.pdf"> Download Cover-Letter </a>
        </div>
    )
}


export default CoverLetter;


