import React from 'react';
import {NavLink} from "react-router-dom";
import { RiDashboardFill } from 'react-icons/ri';
import { HiClipboardList } from 'react-icons/hi';
import { RiTeamFill } from 'react-icons/ri';
import "./style.scss"



const SideBar : React.FC = () => {

    const isActiveFn = (arg : any) =>  arg.isActive ?  undefined : "activeLink"

    return (
        <div className="side-bar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard" className={isActiveFn}>
                            <RiDashboardFill/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tests" className={isActiveFn}>
                            <HiClipboardList/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/team" className={isActiveFn}>
                            <RiTeamFill/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;