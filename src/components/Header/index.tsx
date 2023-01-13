import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import {changeCategory} from "../../features/content/contentSlice";
import {useAppDispatch} from "../../app/hooks";

interface HeaderProps {
    heading : string
}

const Header : React.FC<HeaderProps> = ({heading}) => {

    const dispatch = useAppDispatch()

    const isActiveFn = (arg : any) =>  arg.isActive ? "activeLink" : undefined

    const handleChangeCategory = ({currentTarget : {innerText}} : React.MouseEvent<HTMLElement>) => {
        const category = innerText.toLowerCase()
        dispatch(changeCategory(category))
    }

    return (
        <header>
            <h1>{heading}</h1>
            <ul>
                <li><NavLink to="popular" className={isActiveFn} onClick={handleChangeCategory}>Popular</NavLink></li>
                <li><NavLink to="favorite" className={isActiveFn} onClick={handleChangeCategory}>Favorite</NavLink></li>
                <li><NavLink to="new" className={isActiveFn} onClick={handleChangeCategory}>New</NavLink></li>
            </ul>
        </header>
    );
};

export default Header;