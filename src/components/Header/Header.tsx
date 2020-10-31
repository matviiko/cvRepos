import React from "react";
import {Link} from "react-scroll"
import "./Header.scss"

export interface IListItem {
  label: string;
  to?: string;
}

export interface IHeaderProps {
  isActive: boolean
}

export const Header: React.FC<IHeaderProps> = ({isActive}) => {

  const logo = 'Matvii'

  const navList: Array<IListItem> = [
    {label: 'Hello'},
    {label: 'Skills'},
    {label: 'Experience'},
    {label: 'Education'},
    {label: 'Portfolio'},
    {label: 'Contact me'}
  ]

  const cls: Array<string> = [
    'nav'
  ];

  if(isActive) {
    cls.push('nav_active')
  }

  return (
    <nav className={cls.join(' ')}>
      <div className="logo">
        <span>
            {logo}
        </span>
      </div>
      <ul>
        {
          navList.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  activeClass="active"
                  to={item.label}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >{item.label}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}