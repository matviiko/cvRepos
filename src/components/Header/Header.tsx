import React from "react";
import "./Header.scss"

export interface IListItem {
    label: string;
    to?: string;
}

export const Header: React.FC = () => {

    const logo = 'Matvii'

    const navList: Array<IListItem> = [
        {label: 'Hello'},
        {label: 'Skills'},
        {label: 'Experience'},
        {label: 'Education'},
        {label: 'Portfolio'},
        {label: 'Contact me'}
    ]

    return (
        <nav className="nav">
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
                                <a href="/">{item.label}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}