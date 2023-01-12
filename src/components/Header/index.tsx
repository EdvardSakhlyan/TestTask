import React from 'react';
import "./style.scss"
import {Link} from "react-router-dom";

interface HeaderProps {
    heading : string
}

const Header : React.FC<HeaderProps> = ({heading}) => {
    return (
        <header>
            <h1>{heading}</h1>
            <ul>
                <li><Link to="popular">Popular</Link></li>
                <li><Link to="favorite">Favorite</Link></li>
                <li><Link to="new">New</Link></li>
            </ul>
        </header>
    );
};

export default Header;