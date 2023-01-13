import React from 'react';
import {NavLink} from "react-router-dom";
import { RiDashboardFill } from 'react-icons/ri';
import { HiClipboardList } from 'react-icons/hi';
import { RiTeamFill } from 'react-icons/ri';
import {useAppSelector} from "../../app/hooks";
import "./style.scss"


const SideBar : React.FC = () => {

    const isActiveFn = (arg : any) =>  arg.isActive ? "activeLink" : undefined

    const {contentReducer : {category}} = useAppSelector(state => state)

    return (
        <div className="side-bar">
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/dashboard/${category}`} className={isActiveFn}>
                            <RiDashboardFill/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/tests/${category}`} className={isActiveFn}>
                            <HiClipboardList/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/team/${category}`} className={isActiveFn}>
                            <RiTeamFill/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;