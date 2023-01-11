import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"

const SideBar : React.FC = () => {
    return (
        <div className="side-bar">
            <nav>
                <ul>
                    <li><NavLink to="/">Dashboard</NavLink></li>
                    <li><NavLink to="/tests">Tests</NavLink></li>
                    <li><NavLink to="/team">Team</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;