import React from "react";
import "./Hello.scss"
import logo from "../../image/business-man.jpg"
import Icon from "@mdi/react";
import {mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin} from "@mdi/js"

export const Hello: React.FC = () => {
    return (
        <div className="container about">
            <div className="about__content">
                <div className="about__title">
                    <h1><span>I am Matvii Kopchak</span></h1>
                </div>
                <div className="about__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet, assumenda cum deleniti eos
                        expedita facilis inventore iste itaque iusto magnam minus non possimus quidem quisquam
                        reiciendis sed voluptas voluptatibus!
                    </p>
                </div>
                <div className="about__info">
                    <p>
                        <span className="title info__title">phone</span>
                        <span>+380964960758</span>
                    </p>
                    <p>
                        <span className="title info__title">email</span>
                        <span>matviy.kopchak@gmail.com</span>
                    </p>
                    <p>
                        <span className="title info__title">address</span>
                        <span>Ivano-Frankivsk Ukraine</span>
                    </p>
                    <p>
                        <span className="title info__title">social</span>
                        <span >
                            <a className="icons" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/matviy.kopchak">
                                <Icon className="icons_item" path={mdiFacebook} size={0.7} />
                            </a>
                            <a className="icons" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/matviikoo/">
                                <Icon className="icons_item" path={mdiInstagram} size={0.7} />
                            </a>
                            <a className="icons" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matvii-kopchak-99a0b2138/">
                                <Icon className="icons_item" path={mdiLinkedin} size={0.7} />
                            </a>
                            <a className="icons" target="_blank" rel="noopener noreferrer" href="https://github.com/matviiko">
                                <Icon className="icons_item" path={mdiGithub} size={0.7} />
                            </a>
                        </span>
                    </p>
                </div>
                <div className="about_btns">
                    <a href="/" className="title btn">
                        contact me
                    </a>
                    <a href="/" className="title btn gray-btn">
                        downland cv
                    </a>
                </div>
            </div>
            <div className="about__img">
                <img src={logo} alt={logo}/>
            </div>
        </div>
    )
}