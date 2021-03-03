import React from "react";
import s from './Portfolio.module.css';
import gridElement1 from './1.png'
import gridElement2 from './2.png'
import gridElement3 from './3.png'
import gridElement4 from './4.png'
import gridElement5 from './5.png'
import Title from "../modules/Title/Title";

const Portfolio = () => {
    return(
        <div className={s.portfolio} id='main'>
        <div> <Title textTitle='Portfilio'/> <h2 className={s.text}>Featured</h2></div>
        <div className={s.item}>
        <div className={s.container}>
            <ul className={s.effects}>
                <li className={s.item1}>
                    <img src={gridElement1} alt></img>
                    <div>
                        <div className={s.item}>
                            <div className={s.container}>
                                <h2></h2>
                                <p>My first Web-Site only html/css</p>
                                <a href='https://bogdanlrgrndarniy.github.io/Home_works/lesson18/index.html'>See More</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={s.item2}>
                    <img src={gridElement2} alt></img>
                    <div>
                        <div className={s.item}>
                            <div className={s.container}>
                                <h2></h2>
                                <p>My second Web-Site only html/sass</p>
                                <a href='https://bogdanlrgrndarniy.github.io/Home_works/exam/index.html'>See More</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={s.item3}>
                    <img src={gridElement3} alt></img>
                    <div>
                        <div className={s.item}>
                            <div className={s.container}>
                                <h2></h2>
                                <p>My AJAX Web-Site for search movies </p>
                                <a href='https://bogdanlrgrndarniy.github.io/Home_works/java-Script/AJAX/practice/lesson35/index.html'>See More</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={s.item4}>
                    <img src={gridElement4} alt></img>
                    <div>
                        <div className={s.item}>
                            <div className={s.container}>
                                <h2></h2>
                                <p>My first site with Java Script</p>
                                <a href='https://bogdanlrgrndarniy.github.io/Home_works/monticello/index.html'>See More</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={s.item5}>
                    <img src={gridElement5} alt></img>
                    <div>
                        <div className={s.item}>
                            <div className={s.container}>
                                <h2></h2>
                                <p>My second Web-Site for search movies </p>
                                <a href='https://bogdanlrgrndarniy.github.io/Home_works/exam3/digitalproducts/index.html'>See More</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div> 
        </div>
        </div>
    )
}

export default Portfolio;