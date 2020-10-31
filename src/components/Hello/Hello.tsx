import React from 'react';
import './Hello.scss';
import logo from '../../image/business-man.jpg';
import Icon from '@mdi/react';
import { mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin } from '@mdi/js';
import {IState} from "../../shared/interfaces";
import {Link} from "react-scroll";

export interface IHelloProps {
  userState: IState;
  isActive: boolean;
}

export const Hello: React.FC<IHelloProps> = props => {

  const cls: Array<string> = [
    'container', 'about'
  ]

  if(props.isActive) {
    cls.push('nav_active')
  }

  return (
    <div id="Hello" className={cls.join(' ')}>
      <div className="about__content">
        <div className="about__title">
          <h1>
            <span>I am {props.userState.firstName + " " + props.userState.lastName}</span>
          </h1>
        </div>
        <div className="about__text">
          <p>
            {props.userState.text}
          </p>
        </div>
        <div className="about__info">
          <p>
            <span className="title info__title">phone</span>
            <span>{props.userState.phone}</span>
          </p>
          <p>
            <span className="title info__title">email</span>
            <span>{props.userState.email}</span>
          </p>
          <p>
            <span className="title info__title">address</span>
            <span>{props.userState.address}</span>
          </p>
          <p>
            <span className="title info__title">social</span>
            <span>
              <a
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://${props.userState.social.facebook}`}
              >
                <Icon className="icons_item" path={mdiFacebook} size={0.7} />
              </a>
              <a
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://${props.userState.social.instagram}`}
              >
                <Icon className="icons_item" path={mdiInstagram} size={0.7} />
              </a>
              <a
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://${props.userState.social.linkedin}`}
              >
                <Icon className="icons_item" path={mdiLinkedin} size={0.7} />
              </a>
              <a
                className="icons"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://${props.userState.social.github}`}
              >
                <Icon className="icons_item" path={mdiGithub} size={0.7} />
              </a>
            </span>
          </p>
        </div>
        <div className="about_btns">
          <Link to={"Contact me"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="title btn">
            contact me
          </Link>
          <a href="/" className="title btn gray-btn">
            downland cv
          </a>
        </div>
      </div>
      <div className="about__img">
        <img src={logo} alt={logo} />
      </div>
    </div>
  );
};
